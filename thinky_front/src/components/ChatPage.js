// Import Packages
import React from "react"

// Import Styles
import chatStyles from "../styles/ChatPage.module.scss"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import SendIcon from "@material-ui/icons/Send"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"

// Import Components

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
  shareCheck: {
    margin: "0 0 0 2rem",
  },
  button: {
    position: "absolute",
    top: "28%",
    right: "8%",
  },
}))

export default function WhyModal() {
  const classes = useStyles()

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <div className={chatStyles.chatContainer}>
      <div className={chatStyles.chatBox}>
        <div className={chatStyles.topicSpace}>
          <p className={chatStyles.topic}>
            Why：「Why」の内容が入ります「Why」の内容が入りますWhy」の内容が入ります
          </p>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="この「Why」をみんなに共有する"
            className={classes.shareCheck}
          />
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
  )
}
