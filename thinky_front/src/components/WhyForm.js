// Import Packages
import React from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

// Import Styles
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"

// Import Components

class WhyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formWhy: null,
      checkShare: this.props.checkShare,
      errorText: "",
    }

    // binding "this"
    this.decideWhy = this.decideWhy.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  decideWhy(e) {
    e.preventDefault()
    const { formWhy } = this.state
    const { genreId, checkShare } = this.props
    this.createWhy(formWhy, genreId, checkShare)
  }

  createWhy = (formWhy, genreId, checkShare) => {
    console.log(formWhy)
    console.log(this.props.user)
    console.log(this.props.user.id)
    axios
      .post("http://localhost:3001/whies/post", {
        why: formWhy,
        genre: genreId,
        share: checkShare,
        user_id: this.props.user.id,
      })
      .then((response) => {
        console.log(this.props.user.id)
        console.log(response.data)
        axios
          .get(`http://localhost:3001/whies/${response.data.id}`, {
            id: response.data.id,
          })
          .then((response) => {
            console.log(response.data.question)
            console.log(response.data.id)
            this.props.history.push({
              // Routerを介して<ChatPage/>にstateを渡す
              pathname: `/whies/${response.data.id}`,
              state: {
                why: response.data.question,
                whyId: response.data.id,
                pv: true,
                share: this.props.checkShare,
              },
            })
          })
          .catch((err) => {
            console.error(err)
            this.setState({
              errorText: "ジャンルと「Why」の両方を入力してください",
            })
          })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // エラーハンドリング
  handleValidation(e) {
    const value = e.target.value
    value
      ? this.setState({ errorText: "" })
      : this.setState({ errorText: "「Why」を入力してください" })
  }

  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.decideWhy}>
        <div style={this.errStyle}>{this.state.errorText}</div>
        <TextareaAutosize
          helperText="Incorrect entry."
          required
          rowsMax={1}
          aria-label="maximum height"
          placeholder="「Why」を入力する"
          name="formWhy"
          value={this.state.formWhy}
          style={this.formStyle}
          onChange={(e) => {
            this.setState({ formWhy: e.target.value })
            this.handleValidation(e)
          }}
        />
        <Button
          variant="contained"
          color="primary"
          style={this.btnStyle}
          type="submit"
        >
          決定
        </Button>
      </form>
    )
  }

  formStyle = {
    marginBottom: "24px",
    width: "70%",
    minHeight: "3rem",
    fontSize: "2rem",
  }

  btnStyle = {
    height: "50px",
    width: "100px",
    transform: "translate(8px, -43px)",
    backgroundColor: "#3F51B5",
  }

  errStyle = {
    height: "20px",
    textAlign: "left",
    color: "red",
    marginBottom: "5px",
    textIndent: "4rem",
  }
}

export default withRouter(WhyForm)
