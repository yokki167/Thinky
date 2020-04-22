import React from "react";
import chatStyles from "../styles/ChatPage.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import SendIcon from "@material-ui/icons/Send";
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
  button: {
    position: "absolute",
    top: "28%",
    right: "8%",
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

        <div className={chatStyles.communication}>
          <div className={chatStyles.chatSpace}>
            <div className={chatStyles.chatLeft}>
              <p className={chatStyles.chatText}>Why???</p>
            </div>
          </div>
          <div className={chatStyles.chatSpace}>
            <div className={chatStyles.chatRight}>
              <p className={chatStyles.chatText}>
                送信された「Answer」が入ります送信された「Answer」が入ります
              </p>
            </div>
          </div>
        </div>
        <div className={chatStyles.formBox}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextareaAutosize
              rowsMax={1}
              aria-label="maximum height"
              placeholder="Answerを入力してください。"
            />
          </form>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
