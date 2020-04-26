// Import Packages
import React from "react"
import axios from "axios"
import update from "immutability-helper"

// Import Styles
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"

// Import Components

class WhyForm extends React.Component {
  constructor(props) {
    super(props)
    this.createWhy = this.createWhy.bind(this)
    this.typeWhy = this.typeWhy.bind(this)
    this.decideWhy = this.decideWhy.bind(this)
    this.toChatpage = this.toChatpage.bind(this)
    this.state = { formWhy: "", checkShare: this.props.checkShare, whyId: 0 }
  }

  createWhy = (why, genreId, checkShare) => {
    axios
      .post("http://localhost:3001/whies/post", {
        why: why,
        genre: genreId,
        share: checkShare,
      })
      .then((response) => {
        axios
          .get(`http://localhost:3001/whies/${response.data.id}`, {
            id: response.data.id,
          })
          .then((response) => {
            console.log(response.data)
            this.setState({ whyId: response.data.id })
            // const newShare = update(this.state.checkShare, {
            //   $set: [response.data.share],
            // })
            // this.setState({ checkShare: newShare })
            // console.log(this.state.checkShare)
          })
          .catch((data) => {
            console.log(data)
          })
        const newWhy = update(this.state.modalWhy, { $set: [response.data] })
        this.setState({ modalWhy: newWhy })
        console.log(this.state.modalWhy)
        console.log(response.data.id)
        this.setState({ whyId: response.data.id })
        console.log(this.state.whyId)
        this.test(response.data.id)
      })
      .catch((data) => {
        console.log(data)
      })
  }

  test(num) {
    console.log(num)
    this.setState({ whyId: num })
    console.log(this.state.whyId)
  }

  typeWhy(e) {
    this.setState({ formWhy: e.target.value })
  }

  decideWhy(callback) {
    const why = this.state.formWhy
    const genreId = this.props.genreId
    const checkShare = this.props.checkShare
    this.setState({ formWhy: why, checkShare: checkShare })
    this.createWhy(why, genreId, checkShare)
    callback()
  }

  toChatpage() {
    this.props.history.push({
      pathname: "/why",
      state: {
        why: this.state.formWhy,
        whyId: this.state.whyId,
        test: this.state.modalWhy,
      },
    })
  }

  render() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={() => {
          this.decideWhy(this.toChatpage)
          // this.findWhy(this.state.formWhy)
        }}
      >
        <TextareaAutosize
          rowsMax={1}
          aria-label="maximum height"
          placeholder="「Why」を入力する"
          name="formWhy"
          value={this.state.formWhy}
          style={this.formStyle}
          onChange={this.typeWhy}
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
