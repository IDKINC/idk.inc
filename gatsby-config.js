module.exports = {
  siteMetadata: {
    title: "IDK INC.",
    titleTemplate: "%s | IDK.INC",
    description:
      "IDK INC. | We Build Brands",
    url: "https://idk.inc", // No trailing slash allowed!
    image: "/images/temp-og-image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@idkinc",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-1RY032QG7R",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
