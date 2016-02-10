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
    ]).config(['$mdThemingProvider',
      function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('red');
      }
    ]).config(['LoopBackResourceProvider', 'SiteConfig', '$httpProvider',
      function (LoopBackResourceProvider, SiteConfig, $httpProvider) {
        // Enable CORS
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // Configure backend URL
        LoopBackResourceProvider.setUrlBase(SiteConfig.corpusUrl);
      }
    ]).config(['$locationProvider', 'grEmbeddingParamsProvider',
      function($locationProvider, EmbeddingProvider) {
        // HTML5 mode is disabled in embedded mode to not screw up site urls.
        // For instance, if you try to reload page on something
        // like site.com/law/slug you're probably gonna get 404.
        // However, site.com/#!/law/slug will work fine.
        if(!EmbeddingProvider.getParams().isEmbeddedMode) {
          $locationProvider.html5Mode(true);
        } else {
          $locationProvider.html5Mode(false);
          $locationProvider.hashPrefix('!'); // Enable hashbang for social sharing
        }
      }
    ]).run(['$rootScope', '$window', '$location', 'grAuth',
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
