'use strict';

(function() {
  angular
    .module('app')
    .provider('EmbeddingParams', function() {
      var embeddingParams;

      this.getParams = function() {
        if(!embeddingParams) {
          var appElement = document.getElementById('govright-app-root');
          embeddingParams = {
            isEmbeddedMode: appElement.tagName !== 'HTML'
          };
          if(embeddingParams.isEmbeddedMode) {
            var data = angular.element(appElement).data();
            for (var prop in data) {
              if(data.hasOwnProperty(prop)) {
                embeddingParams[prop] = data[prop];
              }
            }
          }
        }
        return embeddingParams;
      };
      this.$get = this.getParams;
    });
}());
