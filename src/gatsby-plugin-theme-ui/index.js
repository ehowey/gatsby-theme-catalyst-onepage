import merge from "lodash.merge"
import { baseTheme } from "gatsby-theme-catalyst-core"

export default merge({}, baseTheme, {
    //Updated theme options go here.
    catalystOptions: {
        headerPosition: "fixed",
    },
})