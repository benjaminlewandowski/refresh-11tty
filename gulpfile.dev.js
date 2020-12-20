"use strict";

const gulp = require("gulp");
const sass = require("@selfisekai/gulp-sass");

sass.compiler = require("sass");

const postcss = require("gulp-postcss");
const presetenv = require("postcss-preset-env");
const short = require("postcss-short");
const prettier = require("prettier");

gulp.task("sass", () => {
    return gulp
        .src("./src/resources/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([presetenv(), short()]))
        .pipe(prettier)
        .pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", () => {
    gulp.watch("./src/resources/sass/**/*.scss", ["sass"]);
});
