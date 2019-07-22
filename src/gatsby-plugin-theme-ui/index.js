import merge from "lodash.merge"
import { baseTheme } from "gatsby-theme-catalyst-core"

export default merge({}, baseTheme, {
    //Updated theme options go here.
    sizes: {
        mainMarginTop: "60px",
        mainMarginTopTablet: "80px",
        mainMarginTopLaptop: "80px"
    },
    catalystOptions: {
        headerPosition: "fixed",
    },
})