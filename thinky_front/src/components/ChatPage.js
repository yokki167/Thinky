// Import Packages
import React from "react"
import axios from "axios"
import update from "immutability-helper"

// Import Styles
import chatStyles from "../styles/ChatPage.module.scss"
import Button from "@material-ui/core/Button"
import SendIcon from "@material-ui/icons/Send"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"

// Import Components
import Answer from "./Answer"

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whyContent: "",
      answer: "",
      answers: [],
      checkShare: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.typeAnswer = this.typeAnswer.bind(this)
    this.sendAnswer = this.sendAnswer.bind(this)
    this.createAnswer = this.createAnswer.bind(this)
  }

  componentDidMount() {
    let question = this.props.location.state.why
    this.setState({ whyContent: question })
    console.log(this.props.location.state.whyId)
  }

  createAnswer = (answer) => {
    axios
      .post("http://localhost:3001/answers/post_pv", { answer: answer })
      .then((response) => {
        console.log(response.data)
        const newAnswers = update(this.state.answers, {
          $push: [response.data],
        })
        this.setState({ answers: newAnswers })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.checked })
  }

  typeAnswer(e) {
    this.setState({ answer: e.target.value })
  }

  sendAnswer(e) {
    e.preventDefault()
    const newAnswer = this.state.answer
    this.createAnswer(newAnswer)
    this.setState({ answer: "" })
    e.target.elements.textarea.value = ""
  }

  render() {
    return (
      <div className={chatStyles.chatContainer}>
        <div className={chatStyles.chatBox}>
          <div className={chatStyles.topicSpace}>
            <p className={chatStyles.topic}>Why：{this.state.whyContent}</p>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkShare}
                  onChange={this.handleChange}
                  name="checkShare"
                  color="primary"
                />
              }
              label="この「Why」をみんなに共有する"
              style={this.useStyles.shareCheck}
            />
          </div>

          <div className={chatStyles.communication}>
            {this.state.answers.map((answer) => {
              return <Answer answer={answer} key={answer.id} />
            })}
          </div>
          <div className={chatStyles.formBox}>
            <form noValidate autoComplete="off" onSubmit={this.sendAnswer}>
              <TextareaAutosize
                rowsMax={1}
                aria-label="maximum height"
                placeholder="Answerを入力してください。"
                style={this.useStyles.form}
                name="textarea"
                onChange={this.typeAnswer}
              />
              <Button
                variant="contained"
                color="primary"
                style={this.useStyles.button}
                endIcon={<SendIcon />}
                type="submit"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
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
      position: "absolute",
      right: "2rem",
    },
    button: {
      position: "absolute",
      top: "28%",
      right: "8%",
    },
  }
}
