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
      whyId: 0,
      whyContent: "",
      answer: "",
      answers: [],
      checkShare: true,
    }

    // binding "this"
    this.sendAnswer = this.sendAnswer.bind(this)
    this.createAnswer = this.createAnswer.bind(this)
  }

  componentDidMount() {
    // const question = this.props.location.state.why
    const id = this.props.location.state.whyId
    axios
      .get(`http://localhost:3001/whies/${id}`, {
        id: id,
      })
      .then((response) => {
        console.log(response.data)
        this.setState({ whyId: response.data.id })
        this.setState({ whyContent: response.data.question })
        this.setState({ checkShare: response.data.share })
      })
      .catch((data) => {
        console.log(data)
      })
    // answerを保存時に必要なwhy_idを取得するために
    // 上記のwhies/showのaxios処理を書き足す
    // console.log(this.props.location.state.whyId)
  }

  // whies/showの処理が成功したら、以下でwhyテーブルのshareカラムを更新できるようにする
  // （おそらくshareだけではvalidationに引っかかるのでwhy１つの丸ごと更新？）
  // shareOrNot = (share) => {
  //   axios
  //     .patch("http://localhost:3001/whies/update", { share: share })
  //     .then((response) => {
  //       console.log(response.data)
  //       console.log("success!")
  //     })
  //     .catch((data) => {
  //       console.log(data)
  //     })
  // }

  sendAnswer(e) {
    e.preventDefault()
    const newAnswer = this.state.answer
    const whyId = this.state.whyId
    this.createAnswer(newAnswer, whyId)
    this.setState({ answer: "" })
    e.target.elements.textarea.value = ""
  }

  createAnswer = (answer, whyId) => {
    axios
      .post("http://localhost:3001/answers/post_pv", {
        answer: answer,
        id: whyId,
      })
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
                  onChange={(e) => {
                    this.setState({ [e.target.name]: e.target.checked })
                  }}
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
                onChange={(e) => {
                  this.setState({ answer: e.target.value })
                }}
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
