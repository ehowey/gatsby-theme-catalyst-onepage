# \[WIP\] Gatsby Theme Catalyst Onepage

**Smarter, Faster, Easier**

**Currently a work in progress - please be aware that there are rapid breaking changes at this point in the development. Not currerntly recommended for use.**

The Catalyst series of themes and starters for [GatsbyJS](https://www.gatsbyjs.org/) were designed to provide an opinoinated set of progressive themes and starters that can be used to accelerate web development. I built this to meet my own needs and imagine that others would also have similar needs. 

## Catalyst Themes and Starters

* [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core)
  * [Gatsby-Starter-Catalyst-Basic](https://github.com/ehowey/gatsby-starter-catalyst-basic) - implements the core theme in a starter site to make installation and customization easier.
* [Gatsby-Theme-Catalyst-Onepage](https://github.com/ehowey/gatsby-theme-catalyst-onepage)
  * [Gatsby-Starter-Catalyst-Onepage](https://github.com/ehowey/gatsby-starter-catalyst-onepage) - implements the onepage theme in a starter site to make installation and customization easier.

## Dependencies

* [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core)

### Shadowed Components

The following components (other than theme-ui) are modified from gatsby-theme-catalyst-core:

**src/gatsby-theme-catalyst-core/components/nav.js**

The main change in this theme is modification of the navigation element to provide built in support for single page scrolling navigation use `react-anchor-link-smooth-scroll` and `react-scrollspy`.  This allows the theme to track where the user is on the page and also to provide a smooth scrolling experience.  The navigation menu is automatically created from the `gatsby-config.js` file using the `anchorLinks` array.  There is not currently support for blended anchor links and standard internal links in the Nav menu however this is a planned feature.

## Installation and Use

### Quick Start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying a catalyst based starter, the themes will be included by deafult in the dependencies.

    ```sh
    # create a new Gatsby site using the catalyst onepage starter site
    gatsby new my-catalyst-starter-onepage https://github.com/ehowey/gatsby-starter-catalyst-onepage
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-catalyst-starter-onepage/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-catalyst-starter` directory in your code editor of choice and edit `src/pages/index.mdx`. Save your changes and the browser will update in real time!
    
You can read more about [using starters in the official documentation.](https://www.gatsbyjs.org/docs/starters/)

### Custom Starter Development Using Catalyst Themes and Yarn Workspaces

For more advanced users who want to dig into the guts of the themes and create their own starters the easiest way to do this is via [Yarn workspaces](https://www.gatsbyjs.org/blog/2019-05-22-setting-up-yarn-workspaces-for-theme-development/). You will also want to read through the [themes documentation.](https://www.gatsbyjs.org/docs/themes/)

## Next Steps

This is a passion project for me.  I would love any additional feedback, suggestions and pull requests.  I can be contacted via email at: <eric@erichowey.dev>
