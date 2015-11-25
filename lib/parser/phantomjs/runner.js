var system = require('system');
var url = system.args[1] || '';
if(url.length > 0) {
  var MAX_LOOPS = 100;
  var page = require('webpage').create();
  page.open(url, function (status) {
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
          clearTimeout(delay);
          phantom.exit();
        }
        // Prevent zombies hanging in memory forever
        if(i === MAX_LOOPS) {
          clearTimeout(delay);
          phantom.exit();
        }
        i++;
      });
      delay = setInterval(checker, 100);
    }
  });
}
