/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "react-scroll";

const siteNav = props => {
  const { theme } = useThemeUI();
  let navoffset = parseInt(theme.sizes.headerHeight);
  const headOpen = () => {
    return window.innerHeight - parseInt(theme.sizes.headerHeight) + "px";
  };

  if (typeof window !== "undefined") {
    let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth;
    var screenWidth = x;
  }

  if (screenWidth >= parseInt(theme.breakpoints[0])) {
    navoffset = parseInt(theme.sizes.headerHeightTablet);
  } else if (screenWidth >= parseInt(theme.breakpoints[1])) {
    navoffset = parseInt(theme.sizes.headerHeightLaptop);
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
  `);
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", "2 / 3", null],
        gridRow: ["2 / 3", "1 / 2", null],
        justifySelf: ["center", "end", null],
        alignSelf: "center",
        height: [props.open ? headOpen() : 0, "auto", null],
        mt: [props.open ? 2 : 0, 0, null],
        mr: [0, 3, null]
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

          ".active::after": {
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            height: "5px",
            backgroundColor: "secondary",
            content: "''",
            opacity: "1",
            transform: "translateY(0px)"
          }
        }}
        aria-label="menu-bar"
        role="menubar"
      >
        {data.site.siteMetadata.anchorLinks.map(link => (
          <li
            sx={{
              my: [2, 0, null],
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
                mr: [0, 3, null],
                cursor: "pointer",
                position: "relative",
                fontWeight: "bold",
                letterSpacing: "1px",

                "::after": {
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "secondary",
                  content: "''",
                  opacity: "0",
                  transition: "height 0.3s, opacity 0.3s, transform 0.3s",
                  transform: "translateY(-10px)"
                },

                ":hover::after, :focus::after": {
                  height: "5px",
                  opacity: "1",
                  transform: "translateY(0px)"
                }
              }}
              to={link.link.replace(/#/g, "").toLowerCase()}
              onClick={e => {
                props.action(e);
              }}
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
  );
};

export default siteNav;
