(function(){'use strict';

/**
 * @ngdoc overview
 * @name LLServices
 * @module
 * @description
 *
 * The `LLServices` module provides services that encapsulate
 * common techniques of interacting with the GovRight Corpus API
 *
 */
(function() {
  angular
    .module('LLServices', ['govrightCorpusServices']);
}());


/**
 * @ngdoc object
 * @name LLServices.LLAuth
 * @header LLServices.LLAuth
 * @object
 *
 * @description
 *
 * Login helper.
 *
 * - Makes a login popup
 * - Handles API response and saves user data
 *
 * Examples:
 *
 * - Login user via Facebook:
 *
 * ```
 * // SiteConfig.authUrl comes from json config
 * var authUrl = SiteConfig.authUrl + '/' + $location.host();
 *
 * LLAuth.socialLogin(authUrl).then(function() {
 *   // do stuff with LLAuth.currentUser
 *   console.log( LLAuth.currentUser );
 * }).catch(function(err) {
 *   // show login error message
 * });
 * ```
 *
 * - Login via loopback user credentials:
 *
 * ```
 * var username = 'test'; // Can be user email
 * var password = 'test';
 *
 * LLAuth.login(username, password).then(function() {
 *   // do stuff with LLAuth.currentUser
 *   console.log( LLAuth.currentUser );
 * }).catch(function(err) {
 *   // show login error message
 * });
 * ```
 *
 * - Top level controller snippet:
 *
 * ```
 * $scope.$on('auth:login', function() {
 *   $scope.currentUser = LLAuth.currentUser;
 * });
 *
 * $scope.logout = function() {
 *   LLAuth.logout().then(function() {
 *     $scope.currentUser = null;
 *     $state.go('site.login'); // or something
 *   });
 * }
 * ```
 *
 * - Restore user session
 *
 * ```
 * angular
 *   .module('app')
 *   .run(['LLAuth', function(LLAuth) {
 *     LLAuth.checkLogin().then(function() {
 *       // do stuff with LLAuth.currentUser
 *       console.log( LLAuth.currentUser );
 *     }).catch(function() {
 *       console.warn('Your login expired or something.');
 *     });
 *   }]);
 * ```
 */
(function() {
  angular
    .module('LLServices')
    .factory('LLAuth', Auth);

  Auth.$inject = [
    '$window',
    '$q',
    '$rootScope',
    'LoopBackAuth',
    'User',
    'LLFacebook'
  ];

  function Auth($window, $q, $rootScope, LoopBackAuth, User, Facebook) {

    var isSocialHandlerInitialised = false;

    var loginDeferred;
    var loginPopup;

    var LLAuth = {
      /**
       * @ngdoc property
       * @name LLServices.LLAuth#currentUser
       * @propertyOf LLServices.LLAuth
       *
       * @description
       *
       * Current user instance. Is `null` by default, populated on successful login.
       */
      currentUser: null,

      /**
       * @ngdoc method
       * @name LLServices.LLAuth#initSocialHandler
       * @methodOf LLServices.LLAuth
       *
       * @description
       *
       * Creates a `processAuthMessage` function on the `window` object which
       * is called from the popup window to pass auth data to angular app.
       * Is automatically called before social login if hasn't been initialised yet.
       */
      initSocialHandler: function() {
        if(isSocialHandlerInitialised) {
          return;
        }

        $window.processAuthMessage = $window.processAuthMessage || function(payload) {
          payload = JSON.parse(payload);

          if (!payload || !payload.corpusAccessToken) {
            console.error('LL Auth: invalid payload.');
            if (loginDeferred) {
              loginDeferred.reject('invalid-payload');
            }
            return;
          }

          if (!payload.corpusAccessToken.id) {
            console.error('LL Auth: missing access token.');
            if (loginDeferred) {
              loginDeferred.reject('malformed-access-token');
            }
            return;
          }

          if (!payload.facebookAccessData || !payload.facebookAccessData.appId) {
            console.error('LL Auth: malformed facebook data.');
            if (loginDeferred) {
              loginDeferred.reject('malformed-facebook-data');
            }
            return;
          }

          LoopBackAuth.setUser(payload.corpusAccessToken.id, payload.corpusAccessToken.userId);
          LoopBackAuth.rememberMe = true;
          LoopBackAuth.save();

          Facebook.saveAccessData(payload.facebookAccessData, LoopBackAuth.rememberMe);
          Facebook.init();

          LLAuth.setCurrentUser(payload);

          /**
           * @ngdoc event
           * @name auth:login
           * @eventOf LLServices.LLAuth
           * @eventType broadcast
           *
           * @description
           *
           * `auth:login` is broadcasted on successful login. Example subscription:
           *
           * `$scope.$on('auth:login', function() {...});`
           */
          $rootScope.$broadcast('auth:login');

          if (loginDeferred) {
            loginDeferred.resolve(payload);
          }
        };
        isSocialHandlerInitialised = true;
      },

      /**
       * @ngdoc method
       * @name LLServices.LLAuth#setCurrentUser
       * @methodOf LLServices.LLAuth
       *
       * @description
       *
       * Builds a user object from the auth payload and populates it on `LLAuth.currentUser`.
       *
       * @param {Object} data Corpus payload object or `User.login()` result
       *
       * @returns {Object} User object.
       */
      setCurrentUser: function(data) {
        // Check if it's a `User.login()` result
        if(data.ttl && data.user && data.userId) {
          LLAuth.currentUser = {
            id: data.userId,
            facebookAccessData: {},
            profile: data.user.profile,
            settings: data.user.settings,
            email: data.user.email
          };

        // Else expect it to be a Corpus payload
        } else {
          LLAuth.currentUser = {
            id: data.corpusAccessToken.userId,
            facebookAccessData: data.facebookAccessData,
            profile: data.userProfile,
            settings: data.settings,
            email: data.email
          };
        }
        return LLAuth.currentUser;
      },

      /**
       * @ngdoc method
       * @name LLServices.LLAuth#login
       * @methodOf LLServices.LLAuth
       *
       * @description
       *
       * Login user using LoopBack user credentials.
       * Current user object becomes available on `LLAuth.currentUser` in case of successful login.
       *
       * `auth:login` event is broadcasted in case of successful login.
       *
       * @param {String|Object} user Username or email or object like `{username: '', password: ''}`
       * or `{email: '', password: ''}`.
       *
       * @param {String=} password User password. Should be omitted if the first arg is object.
       *
       * @returns {Object} Login promise which is resolved with login data in case
       * of successful login.
       */
      login: function(user, password) {
        var username;
        if(typeof user === 'object') {
          username = user.username || user.email;
          password = user.password;
        } else {
          username = user;
        }

        var credentials = {
          password: password
        };

        // Basic email check
        if(user.email || /\S+@\S+\.\S+/.test(username)) {
          credentials.email = username;
        } else {
          credentials.username = username;
        }

        return User.login(credentials, function(data) {
          LLAuth.setCurrentUser(data);
          $rootScope.$broadcast('auth:login');
        }, function(err) {
          console.error('LL Auth: LB user login failed.', err);
        }).$promise;
      },

      /**
       * @ngdoc method
       * @name LLServices.LLAuth#socialLogin
       * @methodOf LLServices.LLAuth
       *
       * @description
       *
       * Login user via Facebook. Creates the login popup and starts the login process. Current user object becomes available
       * on `LLAuth.currentUser` in case of successful login.
       *
       * `auth:login` event is broadcasted in case of successful login.
       *
       * @param {String} authUrl Login popup url.
       *
       * @returns {Object} Login promise which is resolved with login data in case
       * of successful login.
       */
      socialLogin: function(authUrl) {
        LLAuth.initSocialHandler();

        if (loginDeferred) {
          console.warn('LL Auth: login() called during pending login...');
          if (loginPopup && !loginPopup.closed) {
            loginPopup.focus();
            return loginDeferred.promise;
          }
        }

        var left = (screen.width / 2) - 350;
        var top = (screen.height / 2) - 300;

        loginPopup = $window.open(authUrl , '_blank', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,copyhistory=no,width=580,height=400,top=' + top + ',left=' + left);

        loginDeferred = $q.defer();
        loginDeferred.promise.finally(function () {
          loginPopup = loginDeferred = null;
        });

        return loginDeferred.promise;
      },

      /**
       * @ngdoc method
       * @name LLServices.LLAuth#checkLogin
       * @methodOf LLServices.LLAuth
       * @broadcasts auth:login
       *
       * @description
       *
       * Restore user session using cached LB/Facebook auth data.
       *
       * This is something that is typically called in the `run` block of the app
       * to check if users have been logged in previous sessions and automatically log them in.
       * Current user data becomes available in `LLAuth.currentUser` in case of successful login.
       *
       * `auth:login` event is broadcasted in case of successful login.
       *
       * @returns {Object} Login promise which is resolved with current user instance in case
       * of successful login.
       */
      checkLogin: function() {
        if(User.isAuthenticated()) {
          return User.getCurrent(function (userData) {
            LLAuth.currentUser = {
              id: userData.id,
              profile: userData.profile,
              facebookAccessData: Facebook.loadAccessData(),
              settings: userData.settings,
              email: userData.email
            };
            Facebook.init();
            $rootScope.$broadcast('auth:login');
          }, function (err) {
            console.error('LL Auth: session restore failed.', err);
            LoopBackAuth.clearUser();
            LoopBackAuth.clearStorage();
            Facebook.clearStorage();
          }).$promise;
        } else {
          return $q(function(resolve, reject) {
            reject(new Error('Session data is missing or expired.'));
          });
        }
      },

      /**
       * @ngdoc method
       * @name LLServices.LLAuth#logout
       * @methodOf LLServices.LLAuth
       *
       * @description
       *
       * Logout user.
       *
       * @event auth:logout
       * @eventType broadcast
       */
      logout: function() {
        return User.logout().$promise.then(function () {
          Facebook.clearStorage();
          LLAuth.currentUser = null;
          /**
           * @ngdoc event
           * @name auth:logout
           * @eventOf LLServices.LLAuth
           * @eventType broadcast
           *
           * @description
           *
           * `auth:logout` is broadcasted when logout is done. Example subscription:
           *
           * `$scope.$on('auth:logout', function() {...});`
           */
          $rootScope.$broadcast('auth:logout');
        }).catch(function(err)  {
          console.error('LL Auth: logout error.', err);
        });
      }
    };

    return LLAuth;
  }
}());


/**
 * @ngdoc object
 * @name LLServices.LLFacebook
 * @header LLServices.LLFacebook
 * @object
 *
 * @description
 *
 * Facebook auth/posting helper.
 *
 * - Facebook app initialization
 * - Posting to the Facebook app
 * - Saving/retrieving facebook auth data
 */
(function() {
  angular
    .module('LLServices')
    .factory('LLFacebook', Facebook);

  Facebook.$inject = ['$q', '$window'];

  function Facebook($q, $window) {

    var props = ['accessToken', 'appId', 'namespace'];
    var propsPrefix = '$Facebook$';
    var accessData = {};

    return {
      init: init,
      postAction: postAction,
      getAppId: getAppId,
      getNamespace: getNamespace,
      getAccessToken: getAccessToken,

      saveAccessData: saveAccessData,
      loadAccessData: loadAccessData,
      clearStorage: clearStorage
    };

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#init
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Initialise Facebook app with FB.init()
     *
     * @param {Object=} config FB.init() config object
     *
     * @returns {=} FB.init() result.
     */
    function init(config) {
      if(!$window.FB || !$window.FB.init) {
        console.error('LL Facebook: missing Facebook SDK.');
        return;
      }

      accessData = loadAccessData();
      config = config || {};
      config.appId = config.appId || getAppId();
      config.cookie = false;
      config.xfbml = config.xfbml || true;
      config.version = config.version || 'v2.3';

      return $window.FB.init(config);
    }

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#postAction
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Post action to Facebook on user's behalf
     *
     * @param {String} action Facebook app action
     *
     * @param {Object} data Data to post
     */
    function postAction(action, data) {
      return $q(function(resolve, reject) {
        var namespace = getNamespace();
        var token = getAccessToken();

        if(!namespace) {
          console.error('LL Facebook: missing app namespace.');
          return reject('missing-app-namespace');
        }
        if(!token) {
          console.error('LL Facebook: missing Facebook access token.');
          return reject('missing-access-token');
        }
        /* jshint ignore:start */
        /* is not in came case */
        data.access_token = token;
        if(data['fb:explicitly_shared'] == null) {
          data['fb:explicitly_shared'] = true;
        }
        /* jshint ignore:end */

        $window.FB.api(
          'me/' + namespace + ':' + action,
          'post',
          data,
          function(res) {
            console.debug(res);
            if(res.error) {
              return reject('LL Facebook: ' + res.error.message);
            } else {
              return resolve(res);
            }
          }
        );
      });
    }

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#getAppId
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Get current Facebook app id
     *
     * @returns {String} Current app id or null
     */
    function getAppId() {
      return accessData.appId || null;
    }

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#getNamespace
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Get current Facebook app namespace
     *
     * @returns {String} Current app namespace or null
     */
    function getNamespace() {
      return accessData.namespace || null;
    }

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#getAccessToken
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Get current user's access token
     *
     * @returns {String} Current user's access token or null
     */
    function getAccessToken() {
      return accessData.accessToken || null;
    }

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#saveAccessData
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Save Facebook access data to storage to use in the future
     *
     * @param {Object} facebookData Access data to store.
     *
     * @param {Boolean=} remember If `true` - saves data for future sessions.
     *
     */
    function saveAccessData(facebookData, remember) {
      clearStorage();
      var storage = remember ? localStorage : sessionStorage;
      props.forEach(function(name) {
        storage[propsPrefix + name] = facebookData[name];
      });
    }

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#loadAccessData
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Get current Facebook access data
     *
     * @returns {Object} Object with following props
     *
     * - `appId` - Facebook app id
     * - `namespace` - Facebook app namespace
     * - `accessToken` - user access token
     */
    function loadAccessData() {
      if(!accessData.appId) {
        props.forEach(function (name) {
          var key = propsPrefix + name;
          accessData[name] = localStorage[key] || sessionStorage[key] || null;
        });
      }
      return accessData;
    }

    /**
     * @ngdoc method
     * @name LLServices.LLFacebook#clearStorage
     * @methodOf LLServices.LLFacebook
     *
     * @description
     *
     * Delete stored Facebook access data.
     */
    function clearStorage() {
      accessData = {};
      props.forEach(function(name) {
        var key = propsPrefix + name;
        localStorage[key] = null;
        sessionStorage[key] = null;
      });
    }
  }
})();


/**
 * @ngdoc object
 * @name LLServices.LLLocale
 * @header LLServices.LLLocale
 * @object
 *
 * @description
 *
 * Locale helper.
 *
 * Examples:
 *
 * - Get law title in the current locale:
 *
 * ```
 * LLLocale.property(law, 'title');
 * ```
 *
 * - Get law title in any available locale:
 *
 * ```
 * LLLocale.property(law, 'title', true);
 * ```
 *
 */
(function() {
  angular.module('LLServices')
    .factory('LLLocale', Locale);

  Locale.$inject = ['$rootScope', 'gettextCatalog'];

  function Locale($rootScope, gettextCatalog) {
    var DEFAULT_LOCALE_CODE = null;

    function LocaleInstance(code, name, dir) {
      this.code = code;
      this.name = name;
      this.dir = dir;

      return this;
    }

    function syncLocale(locale) {
      var oldCode = locale.code;

      locale.code = gettextCatalog.getCurrentLanguage();
      locale.name = gettextCatalog.getString('locale.name');
      locale.dir = gettextCatalog.getString('locale.direction');

      if (oldCode !== locale.code) {
        /**
         * @ngdoc event
         * @name locale:changed
         * @eventOf LLServices.LLLocale
         * @eventType broadcast
         *
         * @description
         *
         * `locale:changed` is broadcasted when current locale is changed. Example subscription:
         *
         * `$scope.$on('locale:changed', function() {...});`
         */
        $rootScope.$broadcast('locale:changed', locale);
      }

      return locale;
    }

    function determineLocaleCode(instance, localeCode, extendedLookup) {
      if (!instance || !instance.locales) {
        return null;
      }

      if(instance.locales[localeCode]) {
        return localeCode;
      } else {
        if(instance.defaultLocale) {
          return instance.defaultLocale;
        }

        var code = DEFAULT_LOCALE_CODE;
        if(extendedLookup && !instance.locales[code]) {
          code = Object.keys(instance.locales).shift();
        }
        if (!instance.locales[code]) {
          return null;
        } else {
          return code;
        }
      }
    }

    return {
      localeList: [],

      /**
       * @ngdoc property
       * @name LLServices.LLLocale#current
       * @propertyOf LLServices.LLLocale
       *
       * @description
       *
       * Current locale (object).
       *
       * ```
       * {
       *   code: <String>,
       *   name: <String>,
       *   dir: <String>
       * }
       * ```
       */
      current: syncLocale(new LocaleInstance()),

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#setCurrent
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Set current locale.
       *
       * @param {String} locale New locale code.
       *
       * @returns {Object} New locale object (name, dir, etc.).
       */
      setCurrent: function(locale) {
        gettextCatalog.setCurrentLanguage(locale);
        return syncLocale(this.current);
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#setDefault
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Set default locale. Typically, can be set in discussion
       * controller to the discussion defaulLocale
       *
       * @param {String} code Default locale code.
       */
      setDefault: function(code) {
        DEFAULT_LOCALE_CODE = code;
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#getString
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Get string translation.
       *
       * @return {*} `gettextCatalog.getString.apply(gettextCatalog, arguments)`
       */
      getString: function() {
        return gettextCatalog.getString.apply(gettextCatalog, arguments);
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#lookupString
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * -
       */
      lookupString: function (locale, string, n, context) {
        // Adapted from gettextCatalog.getStringForm(...)
        var stringTable = gettextCatalog.strings[locale] || {};
        var contexts = stringTable[string] || {};
        var plurals = contexts[context || '$$noContext'] || [];
        return plurals[n || 0];
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#locales
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Get list of available locales.
       *
       * @returns {Array.<Object>} Array of locales.
       */
      locales: function() {
        return this.localeList.length ? this.localeList : Object.keys(gettextCatalog.strings).sort().map(function (code) {
          var locale = new LocaleInstance(code);
          locale.name = this.lookupString(code, 'locale.name');
          locale.dir = this.lookupString(code, 'locale.direction');

          return locale;
        }, this);
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#isValid
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Check if locale code is valid (is in the list of available locales).
       *
       * @param {String} locale Locale code to check.
       *
       * @returns {Boolean} Valid/Invalid
       */
      isValid: function (locale) {
        return locale && gettextCatalog.strings.hasOwnProperty(locale);
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#extract
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Extract locale object from instance.
       *
       * @param {Object} target Instance to extract locale from.
       *
       * @returns {Object} Locale object.
       */
      extract: function(target) {
        if(!target || !target.locales) {
          return {};
        }

        var code = this.current.code;
        if (!target.locales[code]) {
          code = DEFAULT_LOCALE_CODE;
        }

        return target.locales[code];
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#property
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Get localised property from instance.
       *
       * @param {Object} instance Instance to extract locale from (law, discussion, etc.).
       *
       * @param {String} key Property to get translation of (title, text, etc.).
       *
       * @param {Boolean=} extendedLookup If false - only current locale code is checked. If true,
       * any available locale is returned.
       *
       * @returns {Object} Locale object.
       */
      property: function(instance, key, extendedLookup) {
        var localeCode = determineLocaleCode(instance, this.current.code, extendedLookup);
        return localeCode ? instance.locales[localeCode][key] : null;
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#localeDir
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Get locale direction.
       *
       * @param {Object} instance Instance to detect direction.
       *
       * @param {Boolean=} extendedLookup If false - only current locale code is checked. If true,
       * any available locale is returned.
       *
       * @returns {String} Locale direction.
       */
      localeDir: function(instance, extendedLookup) {
        var localeCode = determineLocaleCode(instance, this.current.code, extendedLookup);
        return localeCode ? this.lookupString(localeCode, 'locale.direction') : null;
      },

      /**
       * @ngdoc method
       * @name LLServices.LLLocale#setLocales
       * @methodOf LLServices.LLLocale
       *
       * @description
       *
       * Set new list of locales.
       *
       * @param {Array.<String>} codes Array of string locale codes.
       *
       * @returns {Array.<Object>} Array of new locales.
       */
      setLocales: function(codes) {
        var locales = [];
        Object.keys(gettextCatalog.strings).sort().map(function (code) {
          if(codes.indexOf(code) > -1) {
            var locale = new LocaleInstance(code);
            locale.name = this.lookupString(code, 'locale.name');
            locale.dir = this.lookupString(code, 'locale.direction');
            locales.push(locale);
          }
        }, this);
        this.localeList = locales;

        /**
         * @ngdoc event
         * @name locale:new-list
         * @eventOf LLServices.LLLocale
         * @eventType broadcast
         *
         * @description
         *
         * `locale:new-list` is broadcasted when locale list is changed. Example subscription:
         *
         * `$scope.$on('locale:new-list', function() {...});`
         */
        $rootScope.$broadcast('locale:new-list');

        return locales;
      }
    };
  }
}());
})();
