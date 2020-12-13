const presetenv = require("postcss-preset-env");
const short = require("postcss-short");
const sass = require("@csstools/postcss-sass");

module.exports = {
    syntax: "postcss-scss",
    extends: ["stylelint-config-prettier", "stylelint-config-rational-order"],
    plugins: [
        sass({
            includePaths: ["./src/resources/sass/**", "./node_modules"],
        }),
        presetenv,
        short,
    ],
};
