var process = require('child_process');
var Promise = require('bluebird');

exports.eval = parsePage;

function parsePage(url, base) {
  return new Promise(function(resolve, reject) {

    // VM 2015-05-06: this seems to be injection safe
    // https://blog.liftsecurity.io/2014/08/19/Avoid-Command-Injection-Node.js
    var phantomProcess = process.spawn('/usr/bin/phantomjs', [
      __dirname + '/phantomjs/runner.js', url, base
    ]);

    var html = '';

    phantomProcess.stdout.on('data', function(data) {
      html += data.toString();
    });

    phantomProcess.stdout.on('end', function() {
      phantomProcess.kill('SIGINT');
      resolve(html);
    });

    phantomProcess.stderr.on('data', function(data) {
      phantomProcess.kill('SIGINT');
      reject(data);
    });
  });
}
