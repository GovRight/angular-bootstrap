'use strict';

(function() {
  angular
    .module('app')
    .factory('State', ['grEmbeddingParams', 'SiteConfig', '$location', State]);

  function State(EmbeddingParams, SiteConfig, $location) {
    var appPort = EmbeddingParams.appPort || ($location.port() === 80 ? '' : $location.port());
    var authUrl = SiteConfig.authUrl + '/' + window.location.hostname;
    if (window.location.port !== '') {
      authUrl += ':' + window.location.port;
    }
    return {
      baseUrl: $location.protocol() + '://' + SiteConfig.siteDomain +
        (appPort ? ':' + appPort : '') + '/',
      authUrl: authUrl,
      embeddingParams: EmbeddingParams
    };
  }
}());
