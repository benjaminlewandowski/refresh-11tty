const eleventyPluginNavigation = require("@11ty/eleventy-navigation");
const eleventyPluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const eleventyPluginRSS = require("@11ty/eleventy-plugin-rss");
const eleventyPluginSEO = require("eleventy-plugin-seo");
const eleventyPluginBlogTools = require("eleventy-plugin-blog-tools");
const eleventyPluginLazyImages = require("eleventy-plugin-lazyimages");

module.exports = function (eleventyConfig) {
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addPlugin(eleventyPluginNavigation);
    eleventyConfig.addPlugin(eleventyPluginSyntaxHighlight);
    eleventyConfig.addPlugin(eleventyPluginRSS);
    eleventyConfig.addPlugin(eleventyPluginBlogTools);
    eleventyConfig.addPlugin(
        eleventyPluginSEO,
        require("./../../../site/_data/site.json")
    );

    eleventyConfig.addFilter(
        "dateDisplay",
        require("./../../../site/filters/dates.js")
    );

    eleventyConfig.addFilter(
        "htmlDateDisplay",
        require("./../../../site/filters/timestamp.js")
    );

    // Collections
    eleventyConfig.addCollection("blog", (collection) => {
        const blogs = collection.getFilteredByTag("blog");

        for (let i = 0; i < blogs.length; i++) {
            const prevPost = blogs[i - 1];
            const nextPost = blogs[i + 1];

            blogs[i].data.prevPost = prevPost;
            blogs[i].data.nextPost = nextPost;
        }

        return blogs.reverse();
    });

    eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
    eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
    eleventyConfig.addLayoutAlias("feed", "layouts/feed.njk");
    eleventyConfig.addLayoutAlias("index", "layouts/special/index.njk");
    eleventyConfig.addLayoutAlias("listing", "layouts/listing.njk");

    eleventyConfig.addWatchTarget("./../../images");
    eleventyConfig.addWatchTarget("./../../static/icons");

    eleventyConfig.addPassthroughCopy({
        "src/resources/images": "/images",
    });
    eleventyConfig.addPassthroughCopy({
        "src/resources/static/icons": "/",
    });
    eleventyConfig.addPassthroughCopy({
        "src/resources/static/robots.txt": "robots.txt",
    });

    eleventyConfig.addPassthroughCopy({
        "src/resources/static/forestry/index.html": "/forestry/index.html",
    });

    eleventyConfig.addPlugin(eleventyPluginLazyImages);

    eleventyConfig.setTemplateFormats([
        // Templates:
        "html",
        "njk",
        "md",

        // Static Assets:
        "jpeg",
        "jpg",
        "png",
        "svg",
        "woff",
        "woff2",
    ]);

    return {
        passthroughFileCopy: true,

        dir: {
            input: "src/site",
            output: "build",
            includes: "_includes",
            data: "_data",
        },
    };
};
