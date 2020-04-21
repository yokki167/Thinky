import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/Footer";
import Header from "./Header";
import layoutStyles from "../styles/Layout.module.scss";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { light: grey[300], main: grey[800], dark: grey[700] },
  },
});

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <MuiThemeProvider theme={theme}>
        <Header />
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </MuiThemeProvider>
    </div>
  );
}
