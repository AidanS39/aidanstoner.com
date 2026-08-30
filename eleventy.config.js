export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/css")
  eleventyConfig.addPassthroughCopy("src/assets/fonts")
  eleventyConfig.addPassthroughCopy("src/assets/images")

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
    }
  }
};
