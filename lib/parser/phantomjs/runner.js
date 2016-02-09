var system = require('system');

var parseUrl = system.args[1] || '';
var baseUrl = system.args[2] || '';

if(parseUrl.length > 0) {
  var MAX_LOOPS = 100;
  var page = require('webpage').create();
  // Show desktop version
  page.viewportSize = {
    width: 1280,
    height: 800
  };

  page.open(parseUrl, function (status) {
    if (status == 'success') {
      var i = 0;
      var delay, checker = (function() {
        var html = page.evaluate(function () {
          var title = document.querySelector('[property="og:title"]');
          var bodyLoaded = document.querySelector('body.app-loaded');
          if(bodyLoaded && title && title.content) {
            return document.getElementsByTagName('html')[0].outerHTML;
          }
        });
        if(html) {
          // Stripping script tags to avoid js errors in parsed content
          // Basically all we need is just a static html
          html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

          // Add absolute urls to style links
          html = html.replace(/href=.+?\.css/gm, function(match) {
            if(match.indexOf('http') !== 0 && match.indexOf('//') !== 0) {
              return match.replace(/^href=("?)/, 'href=$1' + baseUrl);
            }
          });

          console.log(html);
          clearTimeout(delay);
          doExit();
        }
        // Prevent zombies hanging in memory forever
        if(i === MAX_LOOPS) {
          clearTimeout(delay);
          doExit();
        }
        i++;
      });
      delay = setInterval(checker, 100);
    }
  });
}

function doExit() {
  setTimeout(function() {
    phantom.exit(0);
  }, 0);
}
