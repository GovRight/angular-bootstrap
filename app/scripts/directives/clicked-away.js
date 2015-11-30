'use strict';

/**
 * Used to trigger an event when a click occurs anywhere else
 * Source: http://stackoverflow.com/questions/12931369/click-everywhere-but-here-event
 */
(function () {
  angular
    .module('app')
    .directive('clickedAway', clickedAway);

  clickedAway.$inject = ['$document'];

  function clickedAway($document) {
    return {
      restrict: 'A',
      link: function (scope, elem, attr) {
        elem.bind('click', function (e) {
          // this part keeps it from firing the click on the document.
          e.stopPropagation();
        });
        $document.bind('click', function () {
          scope.$apply(attr.clickedAway);
        });
      }
    };
  }
}());
