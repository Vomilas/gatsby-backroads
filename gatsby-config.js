require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description: `Explore awesome worldwide tours & 
      discover what makes each of them unique. 
      Forget your daily routine & say yes to adventure`,
    author: "@vomilas",
    twitterUsername: "@vomilas",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://vomilas-backroads.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://vomilas-backroads.netlify.com",
        sitemap: "https://vomilas-backroads.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}
