import React from "react";
import chatStyles from "../styles/ChatPage.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(3, 0),
      position: "absolute",
      top: "8%",
      left: "8%",
      width: "70%",
      minHeight: "3rem",
      fontSize: "2rem",
    },
  },
}));

export default function WhyModal() {
  const classes = useStyles();

  return (
    <div className={chatStyles.chatContainer}>
      <div className={chatStyles.chatBox}>
        <div className={chatStyles.topicSpace}>
          <p className={chatStyles.topic}>
            Why：「Why」の内容が入ります「Why」の内容が入りますWhy」の内容が入ります
          </p>
        </div>
        <div className={chatStyles.communication}></div>
        <div className={chatStyles.formBox}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextareaAutosize
              rowsMax={1}
              aria-label="maximum height"
              placeholder="Answerを入力してください。"
            />
          </form>
          <button className={chatStyles.button}>SEND</button>
        </div>
      </div>
    </div>
  );
}
