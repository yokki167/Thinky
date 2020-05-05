// Import Packages
import React from "react"

// Import Styles
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components
import Question from "./Question"

function InGenreId(props) {
  return (
    <div className={EveryoneWhyStyle.lists}>
      {props.whiesData
        // .filter((why) => why.question.includes(props.text))
        .filter((why) => why.genre_id === props.genreId)
        .map((why) => (
          <Question why={why} key={why.id} />
        ))}
    </div>
  )
}

function OutGenreId(props) {
  return (
    <div className={EveryoneWhyStyle.lists}>
      {props.whiesData
        // .filter((why) => why.question.includes(props.text))
        .map((why) => (
          <Question why={why} key={why.id} />
        ))}
    </div>
  )
}

export default function WhiesList(props) {
  return (
    <>{props.genreId ? <InGenreId {...props} /> : <OutGenreId {...props} />}</>
  )
}
