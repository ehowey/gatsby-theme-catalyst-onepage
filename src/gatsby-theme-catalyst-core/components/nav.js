/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';

const siteNav = props => {
  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            anchorLinks {
              name
              link
            }
          }
        }
      }
      `)
      return(
        <nav
          {...props}
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null],
            gridRow: ["2 / 3", "1 / 2", null],
            justifySelf: ["center", "end", null],
            alignSelf: "center",
            height: [props.open ? "calc(100vh - 60px)" : 0, "auto", null],
            marginTop: [props.open ? "1rem": 0, 0, null],
          }}
          role="navigation"
          aria-label="main-navigation"
        >
          <Scrollspy
            {...props}
            sx={{
              display: [props.open ? "flex" : "none", "flex", null],
              flexDirection: ["column", "row", null],
              listStyle: "none",
              margin: 0,

              ".active": {
                fontWeight: "bold"
              }
            }}
            items={data.site.siteMetadata.anchorLinks.map(spy => {return spy.link.replace(/#/g,"")})}
            currentClassName={'active'}
            offset={-40}
            aria-label="menu-bar"
            role="menubar"
            >
            {data.site.siteMetadata.anchorLinks.map(link => (
            <li
            sx={{
              my: 0,
              mx: 1
            }}
            key={link.name}
            role="none"
            >
              <AnchorLink
                {...props}
                sx={{
                  color: props.open ? "header.textOpen" : "header.text",
                  textDecoration: "none",
                  py: 2,
                  px: 1
                }}
                href={link.link}
                onClick={props.action}
                offset='80'
                role="menuitem"
              >
                {link.name}
              </AnchorLink>
            </li>
            ))}
          </Scrollspy>
      </nav>
    )
  }

export default siteNav;
