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
      '$rootScope', '$window', '$location',
      function($rootScope, $window, $location) {
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
