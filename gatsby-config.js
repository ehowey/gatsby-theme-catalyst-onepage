module.exports = {
  siteMetadata: {
    title: `Catalyst Onepage`,
    description: `Extends the base catalyst core theme to create a one page Gatsby theme`,
    author: `Eric Howey`
  },
  plugins: [
    `gatsby-theme-catalyst-core`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
};
