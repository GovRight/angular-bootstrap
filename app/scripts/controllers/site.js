'use strict';

(function() {
  angular
    .module('app')
    .controller('SiteController', ['$scope', 'Law', SiteController]);

  function SiteController($scope, Law) {
    Law.find(function(laws) {
      $scope.laws = laws;
    });
  }
}());
