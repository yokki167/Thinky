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
import ThumbUpIcon from "@material-ui/icons/ThumbUp"

// Import Components
import ChatHeader from "./ChatHeader"
import Answer from "./Answer"
import Like from "./Like"

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whyId: 0,
      whyContent: "",
      answer: "",
      checkShare: true,
      answers: [],
      // answerUserId: 0,
      errorText: "",
      likeStatus: "",
      likeCount: 0,
      like: false,
    }

    // binding "this"
    this.sendAnswer = this.sendAnswer.bind(this)
    this.createAnswer = this.createAnswer.bind(this)
    this.getAnswers = this.getAnswers.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.getLikesData = this.getLikesData.bind(this)
    this.handleLike = this.handleLike.bind(this)
  }

  componentDidMount() {
    const id = this.props.location.state.whyId
    axios
      .get(`http://localhost:3001/whies/${id}`)
      .then((response) => {
        console.log(response.data)
        this.setState({ whyId: response.data.id })
        this.setState({ whyContent: response.data.question })
        this.setState({ checkShare: response.data.share })
        this.setState({ likeCount: response.data.likes_count })
        this.getLikesData(response.data.id, this.props.user.id)
        this.getAnswers(response.data.id)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // いいねボタン押したとき
  handleLike() {
    console.log("like button pushed")
    console.log("user_id", userId)
    const userId = this.props.user.id
    const whyId = this.state.whyId

    // likeのstateがtrue(押されている)か、false(押されていない)で条件分岐
    return this.state.like
      ? axios
          .delete(
            `http://localhost:3001/whies/${whyId}/like/${whyId}`,
            { data: { user_id: userId } },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res)
            this.setState({ like: false })
            this.setState({ likeCount: this.state.likeCount - 1 })
          })
          .catch((err) => {
            console.log(err)
          })
      : axios
          .post(
            `http://localhost:3001/whies/${whyId}/like/${whyId}`,
            { user_id: userId },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res)
            this.setState({ like: true })
            this.setState({ likeCount: this.state.likeCount + 1 })
          })
          .catch((err) => {
            console.log(err)
          })
  }

  // ユーザーがいいねしたかどうか確認する
  getLikesData(whyId, userId) {
    console.log("uuuu", whyId)
    console.log("userId", userId)
    axios
      .get(
        `http://localhost:3001/whies/${whyId}/status/${whyId}`,
        { params: { user_id: userId } },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "already liked") {
          console.log("success", res.data)
          this.setState({ likeStatus: res.data.status })
          this.setState({ like: true })
        } else {
          console.log("success", res.data)
          this.setState({ likeStatus: res.data.status })
          this.setState({ like: false })
        }
      })
      .catch((err) => {
        console.log("error", err)
      })
  }

  getAnswers(id) {
    if (this.props.location.state.pv) {
      axios
        .get(`http://localhost:3001/answers/index_pv`, {
          params: { id },
        })
        .then((response) => {
          console.log(response.data)
          this.setState({ answers: response.data })
        })
        .catch((err) => {
          console.error(err)
        })
    } else if (this.props.location.state.pb) {
      axios
        .get(`http://localhost:3001/answers/index_pb`, {
          params: { id },
        })
        .then((response) => {
          console.log(response.data)
          this.setState({ answers: response.data })
          // this.setState({ answerUserId: response.data[0].user_id })
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  // isShare(e) {
  //   // みんなに共有するかのチェックボックス用
  //   const share = this.state.checkShare ? false : true
  //   axios
  //     .patch(`http://localhost:3001/whies/${this.state.whyId}`, {
  //       share,
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  //   this.setState({ [e.target.name]: e.target.checked })
  // }

  sendAnswer(e) {
    e.preventDefault()
    const { answer, whyId } = this.state
    this.createAnswer(answer, whyId)
    this.setState({ answer: "" })
    e.target.elements.textarea.value = ""
  }

  createAnswer = (answer, whyId) => {
    if (this.props.location.state.pv) {
      console.log(answer)
      axios
        .post("http://localhost:3001/answers/post_pv", {
          answer,
          id: whyId,
          user_id: this.props.user.id,
        })
        .then((response) => {
          console.log(response.data)
          console.log(response.data.id)
          axios
            .get(`http://localhost:3001/answers/find_pv/${response.data.id}`, {
              id: response.data.id,
            })
            .then((response) => {
              console.log(response)
              const newAnswers = update(this.state.answers, {
                $push: [response.data],
              })
              this.setState({ answers: newAnswers })
            })
            .catch((err) => {
              console.error(err)
              this.setState({
                errorText: "「Answer」を入力してください",
              })
            })
        })
        .catch((err) => {
          console.error(err)
        })
    } else if (this.props.location.state.pb) {
      console.log(answer)
      axios
        .post("http://localhost:3001/answers/post_pb", {
          answer,
          id: whyId,
          user_id: this.props.user.id,
        })
        .then((response) => {
          console.log(response.data)
          axios
            .get(`http://localhost:3001/answers/find_pb/${response.data.id}`, {
              id: response.data.id,
            })
            .then((response) => {
              console.log(response.data)
              const newAnswers = update(this.state.answers, {
                $push: [response.data],
              })
              this.setState({ answers: newAnswers })
            })
            .catch((err) => {
              console.error(err)
              this.setState({
                errorText: "「Answer」を入力してください",
              })
            })
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  // エラーハンドリング
  handleValidation(e) {
    const value = e.target.value
    value
      ? this.setState({ errorText: "" })
      : this.setState({ errorText: "「Answer」を入力してください" })
  }

  render() {
    return (
      <>
        <ChatHeader
          loggedInStatus={this.state.loggedInStatus}
          user={this.props.user}
          whyId={this.state.whyId}
          whyContent={this.state.whyContent}
          pv={this.props.location.state.pv}
          isShare={this.isShare}
          handleLogoutClick={this.props.handleLogoutClick}
        />
        <div className={chatStyles.chatBox}>
          <div className={chatStyles.communication}>
            {this.state.answers.map((answer) => {
              return (
                <Answer
                  answer={answer}
                  pv={this.props.location.state.pv && true}
                  // answerUserId={this.state.answerUserId}
                  userId={this.props.user.id}
                  key={answer.id}
                />)})}
          <div style={this.useStyles.likeBtn}>
            {/* likeのstateによって条件分岐(もっと短くできるかも？) */}
            {this.state.like ? (
              <div>
                <ThumbUpIcon
                  style={this.useStyles.like}
                  onClick={this.handleLike}
                />
                <span style={this.useStyles.count}>{this.state.likeCount}</span>
              </div>
            ) : (
              <div>
                <ThumbUpIcon
                  style={this.useStyles.unlike}
                  onClick={this.handleLike}
                />
                <span style={this.useStyles.count}>{this.state.likeCount}</span>
              </div>
            )}
          </div>

          <div style={this.errStyle}>{this.state.errorText}</div>
          <div className={chatStyles.formContainer}>
            <div className={chatStyles.formBox}>
              <form noValidate autoComplete="off" onSubmit={this.sendAnswer}>
                <TextareaAutosize
                  rowsMax={1}
                  aria-label="maximum height"
                  placeholder="Answerを入力してください。"
                  style={this.useStyles.form}
                  name="textarea"
                  value={this.state.answer}
                  onChange={(e) => {
                    this.setState({ answer: e.target.value })
                    this.handleValidation(e)
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
      </>
    )
  }

  useStyles = {
    form: {
      margin: "24px 0",
      position: "absolute",
      top: "50%",
      left: "8%",
      width: "70%",
      minHeight: "3rem",
      fontSize: "2rem",
    },

    button: {
      position: "absolute",
      top: "160%",
      right: "8%",
      backgroundColor: "#424242",
    },
    likeBtn: {
      float: "right",
      alignItems: "center",
      display: "block",
    },
    like: {
      filter: `drop-shadow(0 10px 25px 0 rgba(0, 0, 0, .5))`,
      zIndex: 1,
      color: "red",
      "&:hover": {
        cursor: "pointer",
      },
    },
    unlike: {
      zIndex: 1,
      color: "white",
      "&:hover": {
        cursor: "pointer",
      },
    },
    count: {
      margin: "8px",
      display: "inline-block",
      // marginBottom: theme
    },
    container: {
      alignItems: "center",
      width: "70px",
      float: "right",
      position: "relative",
      top: "-100px",
    },
  }
  errStyle = {
    height: "20px",
    textAlign: "left",
    color: "red",
    paddingTop: "1rem",
    textIndent: "4rem",
    backgroundColor: "#303030",
  }
}
