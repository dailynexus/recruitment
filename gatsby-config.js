module.exports = {
  siteMetadata: {
    title: "Daily Nexus Recruitment",
    description: "Learn more about the sections of the Daily Nexus and how to join.",
    author: "web@dailynexus.com",
    siteUrl: "https://dailynexus.com/interactives/recruitment"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `teams`,
        path: `${__dirname}/src/pages/teams`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: null
            }
          }
        ]
      }
    },
    `gatsby-plugin-linaria`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daily Nexus Recruitment`,
        short_name: `Recruitment`,
        start_url: `/`,
        background_color: `#393e75`,
        theme_color: `#393e75`,
        display: `minimal-ui`,
        icon: "src/images/nexus-logo-icon.png"
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
