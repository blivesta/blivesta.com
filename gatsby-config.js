require('dotenv').config();

const SITE_URL = `https://www.blivesta.com`;

module.exports = {
  siteMetadata: {
    title: `blivesta`,
    description: `Design engineering and Content storategy.`,
    author: `@blivesta`,
    siteUrl: SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto`],
        },
        typekit: {
          id: `iql2ukf`,
          families: [`ITC Avant Garde Gothic Pro Bold`, `vinyl`],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        siteUrl: SITE_URL,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blivesta`,
        short_name: `blivesta`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: `GitHub`,
    //     fieldName: `github`,
    //     url: `https://api.github.com/graphql`,
    //     headers: {
    //       Authorization: `bearer db590ccbc7ff5c9b07e0c5230983bdcd882e8246`,
    //     },
    //     fetchOptions: {},
    //   },
    // },
  ],
};
