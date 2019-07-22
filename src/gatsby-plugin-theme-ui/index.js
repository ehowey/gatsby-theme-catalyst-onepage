import merge from "lodash.merge"
import { baseTheme } from "gatsby-theme-catalyst-core"

export default merge({}, baseTheme, {
    //Updated theme options go here.
    sizes: {
        mainMarginTop: "60px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
        mainMarginTopTablet: "80px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
        mainMarginTopLaptop: "80px", // Makes sure the content comes below the fixed header, should be the same values as headerHeight
      },
    catalystOptions: {
        headerPosition: "fixed",
    },
})