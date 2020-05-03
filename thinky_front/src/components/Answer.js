// Import Packages
import React, { useState, useEffect } from "react"

// Import Styles
import chatStyles from "../styles/ChatPage.module.scss"

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
      {props.userId === props.answer.user_id ? (
        <div className={chatStyles.chatSpace}>
          <div className={chatStyles.chatRight}>
            <p className={chatStyles.chatText}>{props.answer.content}</p>
          </div>
        </div>
      ) : (
        <div className={chatStyles.chatSpace}>
          <div className={chatStyles.chatLeft}>
            <p className={chatStyles.chatText}>{props.answer.content}</p>
          </div>
        </div>
      )}
    </div>
  )
}

function scrollDown() {
  // ブラウザ間の差異をカバーする
  // ページ全体の高さを取得する
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
  // 一番下までスクロールした時の数値を取得(window.innerHeight分(画面表示領域分)はスクロールをしないため引く)
  const pageMostBottom = scrollHeight - window.innerHeight
  window.scroll(0, pageMostBottom)
}

export default function Answer(props) {
  const [pv, setPv] = useState(false)

  useEffect(() => {
    setPv(props.pv)
    scrollDown()
  }, [])

  return <div>{pv ? <PvAnswer {...props} /> : <PbAnswer {...props} />}</div>
}
