("use strict");
const gulp = require("gulp");
const sass = require("@selfisekai/gulp-sass");
sass.compiler = require("sass");
const postcss = require("gulp-postcss");
const presetenv = require("postcss-preset-env");
const short = require("postcss-short");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const prettier = require("prettier");
const rollup = require("rollup");
const browserSync = require("browser-sync").create();
const rts = require("rollup-plugin-typescript");
const run = require("gulp-run-command").default;
const terser = require("gulp-terser");

gulp.task("dist:sass", () => {
    return gulp
        .src("./src/resources/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([presetenv(), short()]))
        .pipe(autoprefixer)
        .pipe(cssnano)
        .pipe(gulp.dest("./css"));
});

gulp.task("dev:sass", () => {
    return gulp
        .src("./src/resources/sass/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss([presetenv(), short()]))
        .pipe(prettier)
        .pipe(gulp.dest("./dev/css"));
});

gulp.task("dev:sass:watch", () => {
    gulp.watch("./src/resources/sass/**/*.scss", ["dev:sass"]);
});

gulp.task("dev:typescript", () => {
    return gulp.src("./src/resources/typescript/**/*.ts").pipe(
        rollup.rollup({
            input: "src/resources/typescript/index.ts",
            cache: true,
            output: [
                {
                    file: "build/js/index.js",
                    format: "cjs",
                },
            ],
            plugins: [
                rts({
                    typescript: require("typescript"),
                }),
            ],
        })
    );
});

gulp.task("typescript:watch", () => {
    gulp.watch("./src/resources/typescript/**/*.ts", ["ts"]);
});

gulp.task(
    "dist:eleventy",
    run("eleventy --config=src/resources/config/dist/eleventy.config.js")
);

gulp.task(
    "dev:eleventy",
    run(
        "eleventy  --config=src/resources/config/dev/eleventy.config.js --watch"
    )
);

gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "build",
        },
    });
});
