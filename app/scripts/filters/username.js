'use strict';

(function() {
  angular
    .module('app')
    .filter('username', [Username]);

  function Username() {
    return function(user) {
      if(!user) {
        return '';
      }
      if(user.profile && user.profile.displayName) {
        return user.profile.displayName;
      }
      if(user.username) {
        return user.username;
      }
      return 'User-' + user.id;
    };
  }
}());
