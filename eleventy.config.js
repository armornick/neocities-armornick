export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*.css");
    eleventyConfig.addPassthroughCopy("tracker/*.js");

    eleventyConfig.addPassthroughCopy("regex-tester/*.css");
    eleventyConfig.addPassthroughCopy("regex-tester/*.js");
};