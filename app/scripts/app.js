'use strict';

(function() {
  var ANGULAR_MODULE = '';

  angular
    .module(ANGULAR_MODULE, [
      ANGULAR_MODULE + '.config',
      'govrightCorpusServices',
      'LLServices',
      'ngMaterial',
      'ngAnimate'
    ]).config([
      '$mdThemingProvider',
      function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('light-blue')
          .accentPalette('amber');
      }
    ]).config([
      'LoopBackResourceProvider', 'SiteConfig', '$httpProvider',
      function (LoopBackResourceProvider, SiteConfig, $httpProvider) {
        // Enable CORS
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // Configure backend URL
        LoopBackResourceProvider.setUrlBase(SiteConfig.corpusUrl);
      }
    ]).config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);
    }])
    .run([
      '$rootScope', '$window', '$location', 'User', 'LoopBackAuth', 'LLFacebook', 'LLAuth',
      function($rootScope, $window, $location, User, LoopBackAuth, LLFacebook, LLAuth) {
        // Analytics & scrolling
        $rootScope.$on('$stateChangeSuccess', function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;

          // Get user data if previously logged in
          if(User.isAuthenticated()) {
            User.getCurrent(function (userData) {
              LLAuth.currentUser = {
                id: userData.id,
                profile: userData.profile,
                facebookAccessData: LLFacebook.loadAccessData(),
                settings: userData.settings,
                email: userData.email
              };
              LLFacebook.init();
            }, function (err) {
              console.log(err);
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              LLFacebook.clearStorage();
            });
          }

          if ($window.ga) {
            $window.ga('send', 'pageview', { page: $location.path() });
          }
        });
      }
    ]);
})();
