"use strict";

const gulp = require("gulp");
const sass = require("@selfisekai/gulp-sass");
sass.compiler = require("sass");
const postcss = require("gulp-postcss");
const presetenv = require("postcss-preset-env");
const short = require("postcss-short");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const browserSync = require("browser-sync").create();

gulp.task("sass", () => {
    return gulp
        .src("./src/resources/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([presetenv(), short()]))
        .pipe(autoprefixer)
        .pipe(cssnano)
        .pipe(gulp.dest("./css"));
});

gulp.task("dev-sass:watch", () => {
    gulp.watch("./src/resources/sass/**/*.scss", ["sass"]);
});

gulp.task("typescript", () => {});

gulp.task("typescript:watch", () => {
    gulp.watch("./src/resources/typescript/**/*.ts", ["ts"]);
});

gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "app",
        },
    });
});
