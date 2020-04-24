import React from "react"
import Question from "./Question"
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

export default class WhiesList extends React.Component {
  render() {
    return (
      <div className={EveryoneWhyStyle.lists}>
        {this.props.whiesData.map((data) => {
          return <Question data={data} />
        })}
      </div>
    )
  }
}
