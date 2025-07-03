/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Portfolio",
    description: "Nice and clean portfolio website",
    author: "@Pawel Daniszewski",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `li7ominkxwu4`,
        accessToken: process.env.MYPAGE_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `inter`,
          `source sans pro\:100,300,400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
