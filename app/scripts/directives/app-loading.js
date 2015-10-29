'use strict';

(function() {
  angular
    .module('app')
    .directive('appLoading', ['$animate', '$timeout', function ($animate, $timeout) {
      return {
        restrict: 'E',
        link: function (scope, element, attributes) {
          var unbindHandler = scope.$on('$viewContentLoaded', function () {
            unbindHandler();
            $timeout(function() {
              $animate.leave(element.children().eq(0)).then(function () {
                element.remove();
                scope = element = attributes = null;
                angular.element('body').addClass('app-loaded');
              });
            });
          });
        }
      };
  }]);
}());
