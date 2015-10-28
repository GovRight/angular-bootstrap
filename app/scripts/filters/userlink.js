'use strict';

(function() {
  angular
    .module('app')
    .filter('userlink', [Userlink]);

  function Userlink() {
    return function(user) {
      if(!user) {
        return '';
      }
      if(user.profile && user.profile.id) {
        return 'http://facebook.com/app_scoped_user_id/' + user.profile.id;
      }
      return '';
    };
  }
}());
