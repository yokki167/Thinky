// Import Packages
import React from "react"

// Import Styles
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components

export default function Question(props) {
  return (
    <div className={EveryoneWhyStyle.list}>
      <div className={EveryoneWhyStyle.title}>{props.why.question}</div>
      <div className={EveryoneWhyStyle.answer}>
        <div className={EveryoneWhyStyle.index}>Answer:</div>
        <div className={EveryoneWhyStyle.count}>20</div>
      </div>
    </div>
  )
}
