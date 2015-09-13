'use strict';

var banner = [
  '/*!',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * Version <%= pkg.version %>',
  ' * <%= pkg.homepage %>',
  ' * Author : <%= pkg.author %>',
  ' * License : <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var del = require('del');
var fs = require('fs');
var ghpages = require('gulp-gh-pages');
var gulp = require('gulp');
var pkg = require('./package.json');
var pagespeed = require('psi');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

var browserify = require('browserify');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

var csso = require('gulp-csso');
var cssnext = require('gulp-cssnext');
var header = require('gulp-header');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var fm = require('gulp-front-matter');
var sitemap = require('gulp-sitemap');
var hb = require('gulp-hb');
var htmlmin = require('gulp-htmlmin');
var htmlhint = require("gulp-htmlhint");
var yaml = require('js-yaml');

// ----------------------------------------------------------------

gulp.task('html', function() {
  return gulp
    .src(['src/**/*.hbs', '!src/{partials,partials/**}'])
    .pipe(fm({
      property: 'meta'
    }))
    .pipe(hb({
      bustCache: true,
      debug: true,
      data: {
        pkg: pkg,
        site: yaml.safeLoad(fs.readFileSync('./site.yml', 'utf8'))
      },
      helpers: './node_modules/site-boilerplate-helpers/index.js',
      partials: './src/partials/**/*.hbs'
    }))
    .pipe(rename(function(path) {
      if (path.basename == 'index') {
        path.extname = '.html';
      } else {
        path.dirname = (path.dirname ? path.dirname + '/' : '') + path.basename;
        path.basename = 'index';
        path.extname = '.html';
      }
    }))
    .pipe(gulp.dest('./gh-pages'));
});

gulp.task('htmlmin', function() {
  return gulp
    .src('./gh-pages/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./gh-pages'));
});

gulp.task('htmlhint', function() {
  return gulp
    .src('./gh-pages/**/*.html')
    .pipe(htmlhint())
    .pipe(htmlhint.reporter('htmlhint-stylish'));
});

gulp.task('sitemap', function() {
  return gulp
    .src('./gh-pages/**/*.html')
    .pipe(sitemap({
      siteUrl: pkg.homepage
    }))
    .pipe(gulp.dest('./gh-pages'));
});

// ----------------------------------------------------------------

gulp.task('js', function() {
  return browserify('./src/js/blivesta.js', {
      debug: true
    })
    .bundle()
    .on('error', function(err) {
      console.log('Error : ' + err.message);
      this.emit('end');
    })
    .pipe(source('blivesta.js'))
    .pipe(gulp.dest('./gh-pages/js'));
});

gulp.task('jsmin', function() {
  return gulp
    .src('./gh-pages/js/blivesta.js')
    .pipe(uglify())
    .pipe(gulp.dest('./gh-pages/js'));
});

gulp.task('jshint', function() {
  return gulp
    .src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// ----------------------------------------------------------------

gulp.task('css', function() {
  return gulp
    .src('./src/css/blivesta.css')
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(cssnext({
      browsers: ['last 2 versions'],
      sourcemap: true
    }))
    .pipe(gulp.dest('./gh-pages/css'));
});

gulp.task('cssmin', function() {
  return gulp
    .src('./gh-pages/css/blivesta.css')
    .pipe(csso())
    .pipe(gulp.dest('./gh-pages/css'));
});

// ----------------------------------------------------------------

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './gh-pages',
      open: 'external'
    }
  });
  gulp.watch(['./src/css/**/*.css'], ['css']);
  gulp.watch(['./src/js/**/*.js'], ['js']);
  gulp.watch(['./src/**/*.hbs'], ['html']);
  gulp.watch(['./gh-pages/{css,js}/*.{css,js}']).on('change', reload);
  gulp.watch(['./gh-pages/*.html']).on('change', reload);
});

// ----------------------------------------------------------------

gulp.task('pagespeed', function() {
  return pagespeed(pkg.homepage, {
    nokey: 'true',
    strategy: 'desktop',
  }, function(err, data) {
    console.log('Score: ' + data.score);
    console.log('Page stats');
    console.log(data.pageStats);
  });
});


gulp.task('copy', function() {
  return gulp
    .src([
      './src/webfonts/**',
      './src/ico/**'
    ],{
      base:"./src"
    })
    .pipe(gulp.dest('./gh-pages/'));
});


gulp.task('copy-cname', function() {
  return gulp
    .src([
      './src/CNAME'
    ],{
      base:"./src"
    })
    .pipe(gulp.dest('./gh-pages/'));
});



// ----------------------------------------------------------------

gulp.task('cleanup', function(cb) {
  return del(['./gh-pages'], cb);
});

// ----------------------------------------------------------------

gulp.task('ghpages', function() {
  return gulp
    .src('./gh-pages/**/*')
    .pipe(ghpages({
      remoteUrl: 'git@github.com:blivesta-com/blivesta-com.github.io.git',
      branch: 'master',
      push: true
    }));
});

gulp.task('ghpages-staging', function() {
  return gulp
    .src('./gh-pages/**/*')
    .pipe(ghpages({
      remoteUrl: 'git@github.com:blivesta/staging.git',
      branch: 'gh-pages'
    }));
});


// ----------------------------------------------------------------

gulp.task('minify', ['cssmin', 'jsmin', 'htmlmin']);

// ----------------------------------------------------------------

gulp.task('default', ['build'], function(cb) {
  runSequence(
    ['serve'],
    cb
  );
});

// ----------------------------------------------------------------

gulp.task('build', ['cleanup'], function(cb) {
  runSequence(
    'js', 'css', 'html', 'copy',
    ['sitemap', 'jshint', 'htmlhint'],
    cb
  );
});

// ----------------------------------------------------------------

gulp.task('deploy', ['build'], function(cb) {
  runSequence(
    ['minify','copy-cname'],
    'ghpages',
    ['pagespeed'],
    cb
  );
});

// ----------------------------------------------------------------

gulp.task('staging', ['build'], function(cb) {
  runSequence(
    ['minify'],
    'ghpages-staging',
    ['pagespeed'],
    cb
  );
});
