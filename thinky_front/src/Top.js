import React from "react"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

// import topImg from "./thinky-demo.svg"
import topStyles from "./styles/Top.module.scss"
const topImg = require("./top-page.svg")

export default function Top() {
  return (
    <div className={topStyles.topPage}>
      <img src={topImg} alt="thinky-top" />
      <div className={topStyles.header}>
        <p className={topStyles.title}>
          <Link to="/">Thinky</Link>
        </p>
        <nav className={topStyles.nav}>
          <Link to="/signin">LOG IN</Link>
          <Link to="/signup">SIGN UP</Link>
        </nav>
      </div>
      <div className={topStyles.main}>
        <h1>Think "Why".</h1>
        <p className={topStyles.message}>
          「Why（なぜ）」をとことん考える場所。
        </p>
        <Button
          className={topStyles.btn}
          variant="contained"
          color="primary"
          href="/signup"
        >
          Explore（Thinkyを使ってみる）
        </Button>
      </div>
    </div>
  )
}
