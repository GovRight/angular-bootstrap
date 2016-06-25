/* global describe, expect, it */
'use strict';

describe('Main app module and it\'s dependencies', function() {
  [
    'app',
    'govright.platformServices',
    'govright.corpusServices',
    'ngMaterial',
    'ui.router',
    'gettext'
  ].forEach(function(module) {
      it(module + ' module should be registered', function() {
        expect(angular.module(module)).to.be.ok;
      });
    });
});
