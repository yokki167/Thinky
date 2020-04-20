import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import layoutStyles from "../styles/Layout.module.scss";

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer />
    </div>
  );
}
