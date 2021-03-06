'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const svgstore = require('gulp-svgstore');
const rename = require("gulp-rename");

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write('.'))
    .pipe(gulp.dest('source/css'))
    .pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: 'source/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
  gulp.watch('source/*.html').on('change', server.reload);
});

gulp.task('sprite', function () {
  return gulp.src('source/img/icon/icon-*.svg')
    .pipe(svgstore({
      inlineSvg: true,

    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('source/img'));
});

gulp.task('start', gulp.series('css', 'server'));
