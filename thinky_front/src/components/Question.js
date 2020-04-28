// Import Packages
import React from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"

// Import Styles
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components

function Question(props) {
  function getWhy(id) {
    // const id = props.why.id
    axios
      .get(`http://localhost:3001/whies/${id}`, {
        id: id,
      })
      .then((response) => {
        console.log(response.data)
        props.history.push({
          // Routerを介して<PrivateChat/>にstateを渡す
          pathname: `/whies/${response.data.id}`,
          state: {
            why: response.data.question,
            whyId: response.data.id,
          },
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div
      className={EveryoneWhyStyle.list}
      onClick={() => {
        getWhy(props.why.id)
        console.log(props.why.id)
      }}
    >
      <div className={EveryoneWhyStyle.title}>{props.why.question}</div>
      <div className={EveryoneWhyStyle.answer}>
        <div className={EveryoneWhyStyle.index}>Answer:</div>
        <div className={EveryoneWhyStyle.count}>20</div>
      </div>
    </div>
  )
}

export default withRouter(Question)
