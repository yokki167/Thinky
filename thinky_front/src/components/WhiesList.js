// Import Packages
import React from "react"

// Import Styles
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components
import Question from "./Question"
import Like from "./Like"

function InGenreId(props) {
  return (
    <div className={EveryoneWhyStyle.lists}>
      {props.whiesData
        .filter((why) => why.question.includes(props.text))
        .filter((why) => why.genre_id === props.genreId)
        .map((why) => (
          <>
            <Question why={why} key={why.id} />
            <div className={EveryoneWhyStyle.like}>
              <Like why={why} key={why.id} user={props.user} />
            </div>
          </>
        ))}
    </div>
  )
}

function OutGenreId(props) {
  return (
    <div className={EveryoneWhyStyle.lists}>
      {props.whiesData
        .filter((why) => why.question.includes(props.text))
        .map((why) => (
          <>
            <Question why={why} key={why.id} />
            <div className={EveryoneWhyStyle.like}>
              <Like why={why} key={why.id} user={props.user} />
            </div>
          </>
        ))}
    </div>
  )
}

export default function WhiesList(props) {
  return (
    <>{props.genreId ? <InGenreId {...props} /> : <OutGenreId {...props} />}</>
  )
}
