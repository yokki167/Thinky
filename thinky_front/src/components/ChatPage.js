import React from "react";
import chatStyles from "../styles/ChatPage.module.scss";

export default function WhyModal() {
  return (
    <div className={chatStyles.chatBox}>
      <div className={chatStyles.topicSpace}></div>
      <div className={chatStyles.communication}></div>
      <div className={chatStyles.formBox}></div>
    </div>
  );
}
