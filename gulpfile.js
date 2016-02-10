/*global -$ */
'use strict';

var ANGULAR_MODULE = 'app';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var modRewrite  = require('connect-modrewrite');
var reload = browserSync.reload;
var seq = require('run-sequence');
var path = require('path');
var appRoot = require('app-root-path');

// External tasks
// Build external app loader
// appRoot.require('lib/gulp/loader/tasks')(ANGULAR_MODULE);

gulp.task('styles', ['iconfont'], function () {
  return gulp.src('app/styles/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'nested', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer')({browsers: ['last 1 version']})
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .on('end', function() {
      reload();
    });
});

gulp.task('jshint', function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

gulp.task('templates', function () {
    return gulp.src('app/templates/**/*')
      .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
      .pipe($.if('*.html', $.angularTemplatecache({
        root: '/templates/',
        module: ANGULAR_MODULE + '.templates',
        standalone: true
      })))
      .pipe(gulp.dest('.tmp/js'));
});

gulp.task('html', ['inject', 'templates', 'styles'], function () {
  var assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});
  var timestamp = Date.now();

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe($.if('*.html', $.replace('scripts/vendor.js', 'scripts/vendor.js?' + timestamp)))
    .pipe($.if('*.html', $.replace('scripts/app.js', 'scripts/app.js?' + timestamp)))
    .pipe($.if('*.html', $.replace('styles/vendor.css', 'styles/vendor.css?' + timestamp)))
    .pipe($.if('*.html', $.replace('styles/app.css', 'styles/app.css?' + timestamp)))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
  return gulp.src('app/images/**/*.{jpg,png,gif,svg}')
    .pipe($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function () {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('iconfont', function() {
  return gulp.src(['app/images/icons/*.svg'])
    .pipe($.iconfont({
      fontName: ANGULAR_MODULE + '-icons',
      appendCodepoints: true,
      centerHorizontally: true,
      normalize: true,
      fontHeight: 448,
      descent: 64
    }))
    .on('glyphs', function(glyphs) {
      gulp.src('app/styles/icon-font.css.tmpl')
        .pipe($.consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'AppIconFont',
          fontFilename: ANGULAR_MODULE + '-icons',
          fontPath: '/fonts',
          className: 'ico'
        }))
        .pipe($.rename(ANGULAR_MODULE + '-icons.css'))
        .pipe(gulp.dest('.tmp/styles'));
    })
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function () {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['env:development', 'templates', 'styles', 'fonts', 'inject'], function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      },
      middleware: [
        // Fonts and svgs are blocked by default for some reason
        function (req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*');
          next();
        },
        modRewrite([
          '^/(auth/success.*)$ http://localhost:1551/$1 [P,L]',
          '!\\.\\w+$ /index.html [L]'
        ])
      ]
    }
  });

  // watch for changes
  gulp.watch([
    'app/*.html',
    'app/templates/**/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/images/icons/**/*.svg', ['iconfont']);
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('po/**/*.po', ['translations']);
  gulp.watch('app/translations/**/*', ['inject']);
  gulp.watch('app/templates/**/*.html', ['templates']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./,
      exclude: [/bower_components\/bootstrap\/dist\/css/]
    }))
    .pipe(gulp.dest('app'));
});

// Inject file references into index.html
gulp.task('inject', ['templates', 'styles'], function () {
  var injectStyles = gulp.src([
    '.tmp/styles/'+'**'+'/'+'*.css',
    '!.tmp/styles/vendor.css'
  ], { read: false });

  var injectScripts = gulp.src([
    'app/scripts/'+'**'+'/'+'*.js',
    'app/translations/'+'**'+'/'+'*.js',
    '.tmp/js/'+'**'+'/'+'*.js',
    '!app/scripts/'+'**'+'/'+'*.spec.js',
    '!app/scripts/'+'**'+'/'+'*.mock.js'])
    .pipe($.naturalSort())
    .pipe($.angularFilesort());

  var injectOptions = {
    ignorePath: ['app', '.tmp'],
    addRootSlash: false
  };

  return gulp.src('app/*.html')
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(gulp.dest('app'));
});

gulp.task('pot', function () {
    var Po = require('pofile');

    return gulp.src(['app/templates/**/*.html', 'app/scripts/**/*.js'])
        .pipe($.angularGettext.extract('Terms.pot', {
          postProcess: function (catalog) {
            // Inject some convenience keys that must be present in the
            // translations
            var localeName = new Po.Item();
            localeName.msgid = 'locale.name';
            localeName.comments = [ 'The display name of this locale' ];

            var rtl = new Po.Item();
            rtl.msgid = 'locale.direction';
            rtl.comments = [ 'Locale is RTL or LTR? Enter only \'rtl\' or \'ltr\'' ];

            catalog.items.unshift(localeName, rtl);
            catalog.items.forEach(function (item) {
              item.references = item.references.map(function (ref) {
                return path.join(path.dirname(ref), path.basename(ref))
                  .replace(/\\/g, '/'); // replace any Windows-style paths
              });
            });
          }
        }))
        .pipe(gulp.dest('po/'));
});

gulp.task('translations', function () {
    return gulp.src('po/**/*.po')
        .pipe($.angularGettext.compile())
        .pipe(gulp.dest('app/translations/'));
});


// ENV SPECIFIC FUNCTIONS

function configTask(env) {
  return gulp.src('config/' + env + '.json')
    .pipe($.ngConfig(ANGULAR_MODULE + '.config', {
      wrap: '// THIS FILE IS AUTO GENERATED BY GULP. DO NOT EDIT.\n' +
            '(function () {\n' +
            '  \'use strict\';\n' +
            '  /*jshint ignore:start*/\n' +
            '  return <%= module %>' +
            '  /*jshint ignore:end*/\n' +
            '})();\n'
    }))
    .pipe($.rename('config.js'))
    .pipe(gulp.dest('app/scripts/services'));
}

function robotsTask(env) {
  // we don't even have a dist in dev mode
  if(env === 'development') {
    return;
  }
  var robotsContent = (function() {
    switch(env) {
      case 'production':
      default:
            return '';
      case 'stage':
            return 'User-agent: *\nDisallow: /';
    }
  })();
  return $.file('robots.txt', robotsContent)
    .pipe(gulp.dest('dist'));
}


// ENV TASKS

gulp.task('config:production', configTask.bind(null, 'production'));
gulp.task('config:stage', configTask.bind(null, 'stage'));
gulp.task('config:development', configTask.bind(null, 'development'));

gulp.task('robots:production', robotsTask.bind(null, 'production'));
gulp.task('robots:stage', robotsTask.bind(null, 'stage'));

// Make sure clean runs first and everything is handled by gulp api
gulp.task('env:production', ['clean'], function() {
  return gulp.start('config:production');
});
gulp.task('env:stage', ['clean'], function() {
  return gulp.start('config:stage');
});
gulp.task('env:development', function() {
  return gulp.start('config:development');
});


// BUILD TASKS

gulp.task('build', ['jshint', 'html', 'images', 'fonts', 'extras'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('build:stage', ['clean', 'env:stage'], function() {
  return seq('build', [/*'sitemap:stage', */'robots:stage']);
});
gulp.task('build:production', ['clean', 'env:production'], function() {
  return seq('build', [/*'sitemap:production', */'robots:production']);
});
// Quick alias for production
gulp.task('default', function () {
  return gulp.start('build:production');
});
