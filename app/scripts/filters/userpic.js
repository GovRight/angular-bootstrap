'use strict';

(function() {
  angular
    .module('app')
    .filter('userpic', [Userpic]);

  function Userpic() {
    return function(user) {
      if(!user) {
        return '';
      }
      if(user.profile && user.profile.id) {
        return 'http://graph.facebook.com/' + user.profile.id + '/picture?type=square';
      }
      // FIXME: return some default image if there's no fb id
    };
  }
}());
