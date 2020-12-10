module.exports = {
    syntax: "postcss-scss",
    extends: ["stylelint-config-prettier", "stylelint-config-rational-order"],
    plugins: [
        require("postcss-preset-env"),
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
        }),
        require("postcss-short"),
        require("postcss-utilities"),
        require("postcss-preset-env")({
            stage: 0,
        }),
        require("postcss-combine-media-query"),
        require("cssnano")({
            preset: [
                "default",
                {
                    discardComments: {
                        removeAll: true,
                        mergeLonghand: false,
                    },
                },
            ],
        }),
    ],
};
