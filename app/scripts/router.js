'use strict';

(function() {
  angular
    .module('app')
    .config([
      '$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('site', {
            url: '/',
            controller: 'SiteController',
            templateUrl: '/templates/site.html'
          });

        $urlRouterProvider.otherwise( function($injector, $location) {
          if ($location.path() === '') {
            $location.replace().path('/');
          } else {
            console.error('404: route not found!');
            // Handle 404 here
          }
        });
      }
    ]);
})();
