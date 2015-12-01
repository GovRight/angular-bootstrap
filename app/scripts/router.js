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
            templateUrl: '/templates/site.html'
            // SiteController is set in ng-controller on html
            // to handle head meta, direction class and stuff
            // controller: 'SiteController'
          }).state('site.404', {
            params: { message: undefined },
            templateUrl: '/templates/site/404.html',
            controller: 'StaticPageController'
          }).state('site.message', {
            params: { title: undefined, message: undefined },
            templateUrl: '/templates/site/message.html',
            controller: 'StaticPageController'
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
