// Import Packages
import React from "react"

// Import Styles
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
import layoutStyles from "../styles/Layout.module.scss"

// Import Components
import Footer from "./Footer"
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
        <Header handleLogoutClick={props.handleLogoutClick} />
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </MuiThemeProvider>
    </div>
  )
}
