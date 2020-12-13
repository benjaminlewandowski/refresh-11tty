module.exports = {
    syntax: "postcss-scss",
    extends: ["stylelint-config-prettier", "stylelint-config-rational-order"],
    plugins: [
        require("postcss-preset-env"),
        require("postcss-short"),
        require("@csstools/postcss-sass")({
            syntax: "postcss-scss",
            includePaths: [
                "./**/",
                "./1-abstracts",
                "./2-base",
                "./3-components",
                "./4-layout",
                "./5-pages",
                "./../../node_modules",
            ],
        })
    ],
};
