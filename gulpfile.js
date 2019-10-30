"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var del = require("del");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var cheerio = require('gulp-cheerio');
var webp = require("gulp-webp");

gulp.task("sprite", function() {
  return gulp.src("src/img/icons/*.svg")
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
      }))
    .pipe(svgstore({inlineSvg: true}))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("src/img"));
});

gulp.task("clean-sprite", function() {
  return del("src/img/sprite.svg");
});

gulp.task("clean-webp", function() {
  return del("src/img/*.webp");
});

gulp.task("webp", function () {
  return gulp.src("src/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("src/img"));
});

gulp.task("watch-svg", function () {
  gulp.watch("src/img/icons/*.svg", gulp.series("clean-sprite", "sprite"));
  gulp.watch("src/img/*.{png,jpg}", gulp.series("clean-webp", "webp"));
});

gulp.task("svg", gulp.series("clean-sprite", "clean-webp","webp", "sprite", "watch-svg"));
