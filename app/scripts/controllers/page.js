'use strict';

(function() {
  angular
    .module('app')
    .controller('StaticPageController', StaticPageController);

  StaticPageController.$inject = ['$scope', '$stateParams'];

  function StaticPageController($scope, $stateParams) {
    $scope.title = $stateParams.title;
    $scope.message = $stateParams.message;
  }
}());
