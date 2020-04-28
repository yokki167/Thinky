// Import Packages
import React, { useState, useEffect } from "react"

// Import Styles
import chatStyles from "../styles/PrivateChat.module.scss"

function PvAnswer(props) {
  return (
    <div>
      <div className={chatStyles.chatSpace}>
        <div className={chatStyles.chatRight}>
          <p className={chatStyles.chatText}>{props.answer.content}</p>
        </div>
      </div>
      <div className={chatStyles.chatSpace}>
        <div className={chatStyles.chatLeft}>
          <p className={chatStyles.chatText}>Why???</p>
        </div>
      </div>
    </div>
  )
}

function PbAnswer(props) {
  return (
    <div>
      <div className={chatStyles.chatSpace}>
        <div className={chatStyles.chatRight}>
          <p className={chatStyles.chatText}>自分が送信したAnswersが入ります</p>
        </div>
      </div>
      <div className={chatStyles.chatSpace}>
        <div className={chatStyles.chatLeft}>
          <p className={chatStyles.chatText}>
            他ユーザーからのAnswersが入ります
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Answer(props) {
  const [pv, setPv] = useState(false)

  useEffect(() => {
    setPv(props.pv)
  }, [])

  return <div>{pv ? <PvAnswer {...props} /> : <PbAnswer {...props} />}</div>
}
