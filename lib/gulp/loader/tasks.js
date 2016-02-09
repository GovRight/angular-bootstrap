/**
 * Additional gulp task to build external application loader.
 * Loading this module, the angular app name must be passed.
 *
 * Example:
 * require('lib/gulp/loader/tasks')('app');
 *
 * Or:
 * appRoot.require('lib/gulp/loader/tasks')(ANGULAR_MODULE);
 *
 * After module is loaded, tasks become available in the gulpfile.
 *
 * Build development version of loader:
 * gulp.start('loader:app');
 *
 * Build production version (minified, bundled files):
 * gulp.start('loader:dist');
 */

var ANGULAR_MODULE;

module.exports = function(angularModule) {
  if(!angularModule) {
    throw new Error('Application loader gulp task: angular app name is not passed.');
  }
  ANGULAR_MODULE = angularModule;
};

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var fs = require('fs');
var appRoot = require('app-root-path');

gulp.task('loader:app', function() {
  return recompileExternalLoader('app');
});

gulp.task('loader:dist', function() {
  return recompileExternalLoader('dist', true);
});

function recompileExternalLoader(path, uglify) {
  var styles = [];
  var scripts = [];

  // Lame implementation via index.html parsing
  var html = fs.readFileSync(appRoot + '/' + path + '/index.html', 'utf8');
  var styleRegexp = /href="?([a-z0-9-_\/\.]+\.css)"?/gi;
  var style = styleRegexp.exec(html);
  while(style != null) {
    // Rough check, exclude this so the host decides
    // what fonts to use
    if(style[1] !== 'styles/fonts.css') {
      styles.push(style[1]);
    }
    style = styleRegexp.exec(html);
  }
  var scriptRegexp = /src="?([a-z0-9-_\/\.]+\.js)"?/gi;
  var script = scriptRegexp.exec(html);
  while(script != null) {
    scripts.push(script[1]);
    script = scriptRegexp.exec(html);
  }

  var stream = gulp.src(__dirname + '/loader.js.tmpl')
    .pipe($.consolidate('lodash', {
      appName: ANGULAR_MODULE,
      styles: JSON.stringify(styles, null, 2),
      scripts: JSON.stringify(scripts, null ,2)
    }));

  if(uglify) {
    stream.pipe($.uglify());
  }

  return stream.pipe($.rename('loader.js'))
    .pipe(gulp.dest(appRoot + '/' + path));
}
