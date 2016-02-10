'use strict';

(function() {
  angular
    .module('app')
    .controller('LawIndexController', LawIndexController);

  LawIndexController.$inject = ['$scope', 'Law'];

  function LawIndexController($scope, Law) {
    $scope.laws = Law.find();
  }
}());
