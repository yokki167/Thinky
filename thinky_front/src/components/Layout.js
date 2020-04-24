// Import Packages
import React from "react"

// Import Styles
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import layoutStyles from "../styles/Layout.module.scss"
import { grey } from "@material-ui/core/colors"

// Import Components
import Footer from "../components/Footer"
import Header from "./Header"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { light: grey[300], main: grey[800], dark: grey[700] },
  },
})

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <MuiThemeProvider theme={theme}>
        <Header />
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </MuiThemeProvider>
    </div>
  )
}
