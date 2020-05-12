// Import Packages
// import React from "react"
import { withRouter } from "react-router-dom"
import axios from "axios"
import React, { useState, useEffect } from "react"

// Import Styles
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components
import Like from "./Like"

function Question(props) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    getWhyCount(props.why.id)
    console.log(props.why.id)
  }, [])

  function getWhy(id) {
    // const id = props.why.id
    axios
      .get(`http://localhost:3001/whies/${id}`)
      .then((response) => {
        console.log(response.data)
        props.history.push({
          // Routerを介して<ChatPage/>にstateを渡す
          pathname: `/whies/${response.data.id}`,
          state: {
            why: response.data.question,
            whyId: response.data.id,
            pb: true,
            share: true,
          },
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function getWhyCount(id) {
    console.log(id)
    axios
      .get(`http://localhost:3001/whies/${id}/count`)
      .then((response) => {
        console.log(response.data)
        setCount(response.data)
      })
      .catch((err) => {
        console.error(err)
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
        <div className={EveryoneWhyStyle.count}>{count}</div>
      </div>
    </div>
  )
}

export default withRouter(Question)
