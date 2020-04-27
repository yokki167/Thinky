// Import Packages
import React from "react"
import axios from "axios"
import update from "immutability-helper"
import { withRouter } from "react-router-dom"

// Import Styles
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"

// Import Components

class WhyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkShare: this.props.checkShare,
    }

    // binding "this"
    // this.createWhy = this.createWhy.bind(this)
    this.decideWhy = this.decideWhy.bind(this)
  }

  decideWhy(e) {
    const why = this.state.formWhy
    const genreId = this.props.genreId
    const checkShare = this.props.checkShare
    this.createWhy(why, genreId, checkShare)
    e.preventDefault()
  }

  createWhy = (why, genreId, checkShare) => {
    axios
      .post("http://localhost:3001/whies/post", {
        why: why,
        genre: genreId,
        share: checkShare,
      })
      .then((response) => {
        // 次のtoChatpage()でwhyの内容を渡すため
        console.log(response.data.question)
        // const newWhy = update(this.state.formWhy, {
        //   $set: response.data.question,
        // })
        // this.setState({ formWhy: newWhy })
        // 次のtoChatpage()でwhyのidを渡すため
        console.log(response.data.id)
        // const whyId = update(this.state.whyId, {
        //   $set: response.data.id,
        // })
        // this.setState({ whyId: whyId }) // whyIdをsetStateできていない..

        axios
          .get(`http://localhost:3001/whies/${response.data.id}`, {
            id: response.data.id,
          })
          .then((response) => {
            console.log(response.data)
            console.log(response.data.question)
            console.log(response.data.id)
            this.props.history.push({
              // Routerを介して<ChatPage/>にstateを渡す
              pathname: `/whies/${response.data.id}`,
              state: {
                why: response.data.question,
                whyId: response.data.id,
              },
            })
          })
          .catch((data) => {
            console.log(data)
          })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <form noValidate autoComplete="off" onSubmit={this.decideWhy}>
        <TextareaAutosize
          rowsMax={1}
          aria-label="maximum height"
          placeholder="「Why」を入力する"
          name="formWhy"
          value={this.state.formWhy}
          style={this.formStyle}
          onChange={(e) => {
            this.setState({ formWhy: e.target.value })
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
    margin: "24px 0",
    width: "70%",
    minHeight: "3rem",
    fontSize: "2rem",
  }

  btnStyle = {
    height: "50px",
    width: "100px",
    transform: "translate(8px, -43px)",
  }
}

export default withRouter(WhyForm)
