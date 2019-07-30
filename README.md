# Gatsby Theme Catalyst Onepage

**Blazing Start**
```sh
# create a new Gatsby site using the catalyst core starter site
gatsby new my-catalyst-starter-onepage https://github.com/ehowey/gatsby-starter-catalyst-onepage
```
[Read the Gatsby Quick Start Guide](https://www.gatsbyjs.org/docs/quick-start)

**Overview**

This is a child theme for `gatsby-theme-catalyst-core` which adds anchor link navigation and "onepage" functionality to the core theme. This would be ideal for a portfolio site or small brochure site. [Documentation for the core theme](https://github.com/ehowey/gatsby-theme-catalyst-core) will be helpful in understanding the customization options that apply to all Catalyst themes and starters.

## Catalyst Themes and Starters

* [Gatsby-Theme-Catalyst-Core](https://github.com/ehowey/gatsby-theme-catalyst-core): *This acts as the core theme on which all other themes are based. It houses a basic, unstyled, site architecture along with most commonly needed dependencies. Uses theme-ui under the hood for styling changes and MDX for pages.*
  * [Gatsby-Theme-Catalyst-Onepage](https://github.com/ehowey/gatsby-theme-catalyst-onepage): *Child theme of the core theme. Allows for a single page website with anchor links and smooth scrolling in lieu of a traditional nav menu which would link to different pages*
  * [Gatsby-Starter-Catalyst-Core](https://github.com/ehowey/gatsby-starter-catalyst-core): *Starter for the core theme to make installation and customization easier*
  * [Gatsby-Starter-Catalyst-Onepage](https://github.com/ehowey/gatsby-starter-catalyst-onepage): *Starter for the onepage theme to make installation and customization easier*

## Shadowed Components

The following components (other than theme-ui settings) are modified from `gatsby-theme-catalyst-core`:

`src/gatsby-theme-catalyst-core/components/nav.js`

The main change in this theme is modification of the navigation element to provide built in support for single page scrolling navigation using `react-scroll` and `react-scrollspy`.  This allows the theme to track where the user is on the page and also to provide a smooth scrolling experience.  The navigation menu is automatically created from the `gatsby-config.js` file using the `anchorLinks` array.  There is not currently support for blended anchor links and standard internal links in the Nav menu however this is a planned feature. Links to other pages on site do work, just not in the navigation menu at this time.

`src/gatsby-theme-catalyst-core/components/branding.js`

The branding element had to be modified to provide scroll to top functionality on the main index page and link functionality on other pages in the site.  All settings remain the same as those used in `gatsby-theme-catalyst-core`

## Next Steps

This is a passion project for me.  I would love any additional feedback, suggestions and pull requests.  I can be contacted via email at: <eric@erichowey.dev>
