import React from "react"
import chatStyles from "../styles/ChatPage.module.scss"
import Button from "@material-ui/core/Button"
import SendIcon from "@material-ui/icons/Send"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whyContent: "",
      checkedA: true,
      checkedB: true,
      checkedF: true,
      checkedG: true,
    }
  }

  useStyles = {
    form: {
      margin: "24px 0",
      position: "absolute",
      top: "8%",
      left: "8%",
      width: "70%",
      minHeight: "3rem",
      fontSize: "2rem",
    },
    shareCheck: {
      margin: "0 0 0 2rem",
    },
    button: {
      position: "absolute",
      top: "28%",
      right: "8%",
    },
  }

  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked })
  // }

  render() {
    return (
      <div className={chatStyles.chatContainer}>
        <div className={chatStyles.chatBox}>
          <div className={chatStyles.topicSpace}>
            <p className={chatStyles.topic}>
              Why：{this.props.location.state.why3}
            </p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChange}
                  name="checkedB"
                  color="primary"
                />
              }
              label="この「Why」をみんなに共有する"
              className={this.useStyles.shareCheck}
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
            <form className={this.useStyles.form} noValidate autoComplete="off">
              <TextareaAutosize
                rowsMax={1}
                aria-label="maximum height"
                placeholder="Answerを入力してください。"
              />
            </form>
            <Button
              variant="contained"
              color="primary"
              className={this.useStyles.button}
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
