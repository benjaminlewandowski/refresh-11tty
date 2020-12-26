const presetenv = require("postcss-preset-env");
const short = require("postcss-short");

module.exports = {
    extends: ["stylelint-config-prettier", "stylelint-config-rational-order"],
    plugins: [presetenv, short],
};
