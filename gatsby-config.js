module.exports = {
  siteMetadata: {
    title: "IDK INC.",
    titleTemplate: "%s | IDK.INC",
    description:
      "IDK INC. | We Build Brands",
    siteUrl: "https://idk.inc", // No trailing slash allowed!
    image: "/images/temp-og-image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@idkinc",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IDK.INC`,
        short_name: `idk.inc`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `static/newIDKLogo--temp.png`, // This path is relative to the root of the site.
      }
    },
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `portfolio`,
    //     path: `${__dirname}/content/portfolio`,
    //   },
    //   __key: "portfolio",

    // },    
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `team`,
    //     path: `${__dirname}/content/team`,
    //   },
    //   __key: "team",

    // },
  ],
};
