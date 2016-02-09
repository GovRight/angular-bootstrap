'use strict';

(function() {
  angular
    .module('app')
    .controller('SiteController', SiteController);

  SiteController.$inject = ['$scope', 'Law', 'SiteConfig', 'grAuth', 'grLocale'];

  function SiteController($scope, Law, SiteConfig, Auth, Locale) {
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
      var authUrl = SiteConfig.authUrl + '/' + window.location.hostname;
      if (window.location.port !== '') {
        authUrl += ':' + window.location.port;
      }
      Auth.socialLogin(authUrl).then(function () {
        console.log(Auth.currentUser);
      });
    };

    // Example
    Law.find(function(laws) {
      $scope.laws = laws;
    });
  }
}());
