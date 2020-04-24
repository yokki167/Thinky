import React from "react"
import Question from "./Question"
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

export default function WhiesList(props) {
  return (
    <div className={EveryoneWhyStyle.lists}>
      {props.whiesData.map((data) => {
        return <Question data={data} />
      })}
    </div>
  )
}
