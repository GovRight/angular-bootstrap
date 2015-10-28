(function(){'use strict';

/**
 * @ngdoc overview
 * @name Legislation Lab Services
 * @module LLServices
 *
 * @description
 *
 * The `LLServices` module provides services that encapsulate
 * common techniques of interacting with the GovRight Corpus API
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
 * Handles login
 * - Making a login popup
 * - Handling API response and saving user data
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

    var loginDeferred;
    var loginPopup;

    var LLAuth = {
      currentUser: null,

      init: function() {
        $window.processAuthMessage = function(payload) {
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

          LLAuth.currentUser = LLAuth.buildUser(payload);

          // VM 2015-03-11: There may be some auth-sensitive data in other controllers
          // Should be broadcasted if login is really successful
          $rootScope.$broadcast('auth:login');

          if (loginDeferred) {
            loginDeferred.resolve(payload);
          }
        };
      },

      buildUser: function(payload) {
        return {
          id: payload.corpusAccessToken.userId,
          facebookAccessData: payload.facebookAccessData,
          profile: payload.userProfile,
          settings: payload.settings,
          email: payload.email
        };
      },

      login: function(authUrl) {
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

      logout: function() {
        User.logout();
        Facebook.clearStorage();
        LLAuth.currentUser = null;
        $rootScope.$broadcast('auth:logout');
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

    function init(config) {
      if(!$window.FB || !$window.FB.init) {
        console.error('LL Facebook: missing Facebook SDK.');
        return;
      }

      config = config || {};
      config.appId = config.appId || getAppId();
      config.cookie = false;
      config.xfbml = config.xfbml || true;
      config.version = config.version || 'v2.3';
      accessData = loadAccessData();

      return $window.FB.init(config);
    }

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

    function getAppId() {
      return accessData.appId || null;
    }

    function getNamespace() {
      return accessData.namespace || null;
    }

    function getAccessToken() {
      return accessData.accessToken || null;
    }

    function saveAccessData(facebookData, remember) {
      var storage = remember ? localStorage : sessionStorage;
      props.forEach(function(name) {
        storage[propsPrefix + name] = facebookData[name];
      });
    }

    function loadAccessData() {
      var res = {};
      props.forEach(function(name) {
        var key = propsPrefix + name;
        res[name] = localStorage[key] || sessionStorage[key] || null;
      });
      return res;
    }

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
})();