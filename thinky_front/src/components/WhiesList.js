// Import Packages
import React from "react"

// Import Styles
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components
import Question from "./Question"

export default function WhiesList(props) {
  return (
    <div className={EveryoneWhyStyle.lists}>
      {props.whiesData.map((data) => {
        return <Question data={data} key={data.id} />
      })}
    </div>
  )
}
