// Import Packages
import React from "react"

// Import Styles
import chatStyles from "../styles/PrivateChat.module.scss"

export default function Answer(props) {
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
