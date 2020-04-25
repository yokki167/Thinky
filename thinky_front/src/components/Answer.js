// Import Packages
import React from "react"

// Import Styles
import chatStyles from "../styles/ChatPage.module.scss"

export default function Answer(props) {
  return (
    <div>
      {props.answers.map((answer) => {
        return (
          <div>
            <div className={chatStyles.chatSpace}>
              <div className={chatStyles.chatRight}>
                <p className={chatStyles.chatText}>{answer.content}</p>
              </div>
            </div>
            <div className={chatStyles.chatSpace}>
              <div className={chatStyles.chatLeft}>
                <p className={chatStyles.chatText}>Why???</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
