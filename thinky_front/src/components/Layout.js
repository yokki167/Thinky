import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Header from "./Header";
import layoutStyles from "../styles/Layout.module.scss";

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
