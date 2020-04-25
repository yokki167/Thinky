// Import Packages
import React from "react"

// Import Styles
import chatStyles from "../styles/ChatPage.module.scss"

// function ShowAnswer(answer) {
//   return (
//     <div className={chatStyles.chatSpace}>
//       <div className={chatStyles.chatRight}>
//         <p className={chatStyles.chatText}>{answer}</p>
//       </div>
//     </div>
//   )
// }

export default function Answer(props) {
  return (
    <div>
      {props.answers.map((answer) => {
        return (
          <div className={chatStyles.chatSpace}>
            <div className={chatStyles.chatRight}>
              <p className={chatStyles.chatText}>{answer.content}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
