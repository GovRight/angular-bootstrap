'use strict';

(function() {
  angular
    .module('app')
    .controller('SiteController', SiteController);

  SiteController.$inject = ['$scope', 'State', 'grAuth', 'grLocale'];

  function SiteController($scope, State, Auth, Locale) {
    $scope.isEmbedded = State.embeddingParams.isEmbeddedMode;
    $scope.currentLocale = Locale.current;

    $scope.$on('auth:login', function () {
      $scope.currentUser = Auth.currentUser;
    });

    $scope.logout = function () {
      Auth.logout().then(function () {
        $scope.currentUser = null;
      });
    };

    $scope.login = function () {
      Auth.socialLogin(State.authUrl).then(function () {
        console.log(Auth.currentUser);
      });
    };
  }
}());
