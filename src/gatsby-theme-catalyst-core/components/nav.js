/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "react-scroll"

const siteNav = props => {
  if (typeof window !== 'undefined') {
    let w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth
    var screenWidth = x
  }
  const {theme} = useThemeUI()

  let navoffset = parseInt(theme.sizes.headerHeight)

  if (screenWidth >= parseInt(theme.breakpoints[0])) {
    navoffset = parseInt(theme.sizes.headerHeightTablet)
  } else if (screenWidth >= parseInt(theme.breakpoints[1])) {
    navoffset = parseInt(theme.sizes.headerHeightLaptop)
  }

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
      const {theme} = useThemeUI()
      const headOpen = () => {
        return (
          window.innerHeight - parseInt(theme.sizes.headerHeight) + "px"
        )
      }
      return(
        <nav
          sx={{
            gridColumn: ["1 / -1", "2 / 3", null],
            gridRow: ["2 / 3", "1 / 2", null],
            justifySelf: ["center", "end", null],
            alignSelf: "center",
            height: [props.open ? headOpen() : 0, "auto", null],
            mt: [props.open ? 2 : 0, 0, null],
          }}
          role="navigation"
          aria-label="main-navigation"
        >
          <ul
            sx={{
              display: [props.open ? "flex" : "none", "flex", null],
              flexDirection: ["column", "row", null],
              listStyle: "none",
              margin: 0,

              ".active": {
                fontWeight: "bold"
              }
            }}
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
              <Link
                sx={{
                  color: props.open ? "header.textOpen" : "header.text",
                  textDecoration: "none",
                  py: 2,
                  px: 1,
                  mr: 2,
                  cursor: "pointer"
                }}
                to={link.link.replace(/#/g,"").toLowerCase()}
                onClick={(e) => {props.action(e)}}
                role="menuitem"
                spy={true}
                smooth={true}
                activeClass="active"
                duration={500}
                offset={-Math.abs(navoffset)}
              >
                {link.name}
              </Link>
            </li>
            ))}
          </ul>
      </nav>
    )
  }

export default siteNav;
