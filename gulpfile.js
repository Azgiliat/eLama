"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var del = require("del");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var cheerio = require('gulp-cheerio');

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

gulp.task("clean", function() {
  return del("build/img/sprite.svg");
});

gulp.task("watch-svg", function () {
  gulp.watch("src/img/icons/*.svg", gulp.series("clean", "sprite"));
});

gulp.task("svg", gulp.series("clean", "sprite", "watch-svg"));
