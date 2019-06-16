module.exports = {
  siteMetadata: {
    title: `Catalyst Onepage`,
    description: `Extends the base catalyst core theme to create a one page Gatsby theme`,
    author: `Eric Howey`,
    menuLinks:[
          {
            name:'Page 1',
            link:'/page-1'
          },
          {
            name:'Page 2',
            link:'/page-2'
          },
          {
            name:'Page 3',
            link:'/page-3'
          }
            ]
  },
    __experimentalThemes: [
        'gatsby-theme-catalyst-core'
    ],
    plugins: [ 
      {
        resolve: "gatsby-plugin-compile-es6-packages",
        options: {
          modules: ["gatsby-theme-catalyst-core"],
        },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ]
}