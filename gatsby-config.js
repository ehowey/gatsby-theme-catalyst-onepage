module.exports = {
  siteMetadata: {
    title: `Catalyst Onepage`,
    description: `Extends the base catalyst core theme to create a one page Gatsby theme`,
    author: `Eric Howey`,
    menuLinks:[
          {
            name:'Home',
            link:'/'
          }
        ],
    anchorLinks:[
          {
            name:'Anchor 1',
            link:'#anchor1'
          },
          {
            name:'Anchor 2',
            link:'#anchor2'
          },
          {
            name:'Anchor 3',
            link:'#anchor3'
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
          modules: ["gatsby-theme-catalyst-onepage"],
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
      }
    ]
}