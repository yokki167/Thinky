// Import Packages
import React from "react"

// Import Styles
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components
import Question from "./Question"

export default function WhiesList(props) {
  return (
    <div className={EveryoneWhyStyle.lists}>
      {props.whiesData
        .filter((why) => why.question.includes(props.text))
        .map((why) => (
          <Question data={why} key={why.id} />
        ))}
    </div>
  )
}
