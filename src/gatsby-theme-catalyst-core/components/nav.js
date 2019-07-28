/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui";
import NavLinks from "./navLinks";
import { SocialHeader } from "gatsby-theme-catalyst-core";

const siteNav = props => {
  const { theme } = useThemeUI();
  const headOpen = () => {
    return window.innerHeight - parseInt(theme.sizes.headerHeight) + "px";
  }; //Used to calculate the height of the nav so it is exactly the height of the window
  return (
    <nav
      sx={{
        gridColumn: ["1 / -1", "2 / 3", null],
        gridRow: ["2 / 3", "1 / 2", null],
        justifySelf: ["center", "end", null],
        alignSelf: "center",
        height: [props.open ? headOpen() : 0, "auto", null],
        mt: [props.open ? 2 : 0, 0, null],
        display: "flex",
        flexDirection: ["column", "row", null]
      }}
      role="navigation"
      aria-label="main-navigation"
    >
      <div
        sx={{
          display: [props.open ? "flex" : "none", "flex", null],
          mr: ["auto", 3, null],
          ml: "auto",
          mt: "0.25rem",
          mb: [3, 0, null],

          a: {
            color: props.open ? "header.iconsOpen" : "header.icons",
            mr: [3, 2, null],
            height: theme => theme.sizes.iconsHeader,
            textDecoration: "none"
          },
          "a:last-of-type": {
            mr: 0
          },
          "a:hover": {
            color: "header.iconsHover"
          }
        }}
      >
        <SocialHeader />
      </div>
      <NavLinks {...props} />
    </nav>
  );
};

export default siteNav;
