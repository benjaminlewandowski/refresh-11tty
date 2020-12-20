"use strict";
const { watch, src, dest, parallel } = require("gulp");
const sass = require("@selfisekai/gulp-sass");
const postcss = require("gulp-postcss");
const presetenv = require("postcss-preset-env");
const short = require("postcss-short");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function cssTask() {
    return src("./src/sass/**/*.scss", { allowEmpty: true })
        .pipe(sass({ outputStyle: "extended" }))
        .on("error", sass.logError)
        .pipe(postcss([presetenv(), short(), autoprefixer(), cssnano()]))
        .pipe(dest("./css"));
}

function watchFiles() {
    watch("./src/sass/**/*.scss", parallel(cssTask));
}

exports.default = parallel(cssTask);
