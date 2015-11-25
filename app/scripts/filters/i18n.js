'use strict';

(function() {
  angular
    .module('app')
    .filter('i18n', ['LLLocale', i18n]);

  function i18n(Locale) {
    return function(instance, key, extended) {
      if(!instance || !key) {
        return '';
      }
      return Locale.property(instance, key, extended);
    };
  }
}());
