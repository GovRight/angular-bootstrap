'use strict';

(function() {
  angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', 'grEmbeddingParamsProvider',
      function($stateProvider, $urlRouterProvider, grEmbeddingParamsProvider) {
        $stateProvider
          .state('site', {
            abstract: true,
            templateUrl: '/templates/site.html',
            controller: grEmbeddingParamsProvider.getParams().isEmbeddedMode ?
              'SiteController' : undefined
          }).state('site.laws', {
            url: '/',
            templateUrl: '/templates/law/index.html',
            controller: 'LawIndexController'
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
            console.error($location.path(), '404: route not found!');
            $injector.get('grMessage').error404();
          }
        });
      }
    ]);
})();
