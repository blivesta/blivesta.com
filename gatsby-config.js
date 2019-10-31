require('dotenv').config();
const pkg = require('./package.json');

module.exports = {
  siteMetadata: {
    title: `blivesta`,
    description: pkg.description,
    author: `@blivesta`,
    siteUrl: pkg.homepage,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [`Roboto`],
        },
        typekit: {
          id: process.env.GATSBY_TYPE_KIT_ID,
          families: [`ITC Avant Garde Gothic Pro Bold`],
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: pkg.homepage,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blivesta`,
        short_name: `blivesta`,
        start_url: `/`,
        background_color: `#111`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: `src/assets/icon/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
