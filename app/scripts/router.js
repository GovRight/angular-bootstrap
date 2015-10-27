'use strict';

(function() {
  var ANGULAR_MODULE = '';

  angular
    .module(ANGULAR_MODULE)
    .config([
      '$stateProvider', '$urlRouterProvider', 'gettext',
      function($stateProvider, $urlRouterProvider, gettext) {
        $stateProvider
          .state('', {});

        $urlRouterProvider.otherwise( function($injector, $location) {
          if ($location.path() === '') {
            $location.replace().path('/');
          } else {
            var $state = $injector.get('$state');
            var SiteConfig = $injector.get('SiteConfig');
            var Locale = $injector.get('Locale');

            // State params are empty even if locale is valid
            var locale = $location.path().split('/')[1];

            // Change state to 404 without losing current URL
            $state.transitionTo('site.404',
              {
                locale: Locale.isValid(locale) ? locale : SiteConfig.defaultLocale,
                message: gettext('site.message.404')
              },
              { location: false, inherit: true });
          }
        });
      }
    ]);
})();
