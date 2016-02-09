'use strict';

(function() {
  angular
    .module('app', [
      'app.templates',
      'app.config',
      'govright.platformServices',
      'govright.corpusServices',
      'ngMaterial',
      'ngAnimate',
      'ngLodash',
      'gettext',
      'ui.router'
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
      '$rootScope', '$window', '$location', 'grAuth',
      function($rootScope, $window, $location, Auth) {
        // Restore user session
        Auth.checkLogin();

        // Analytics & scrolling
        $rootScope.$on('$stateChangeSuccess', function() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          if ($window.ga) {
            $window.ga('send', 'pageview', { page: $location.path() });
          }
        });
      }
    ]);
})();
