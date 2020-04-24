import React from "react"
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

export default class WhyForm extends React.Component {
  constructor(props) {
    super(props)
    this.typeWhy = this.typeWhy.bind(this)
    this.decideWhy = this.decideWhy.bind(this)
    this.state = { why: "" }
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

  typeWhy(e) {
    this.setState({ why: e.target.value })
  }

  decideWhy() {
    // const why = e.target.elements.why.value.trim()
    // this.setState({ why: why })
    // console.log("success!")

    this.props.createWhy(this.state.why)
    this.setState({ why: "" })
  }

  render() {
    return (
      <form
        className={this.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={this.decideWhy}
      >
        <TextareaAutosize
          rowsMax={1}
          aria-label="maximum height"
          placeholder="「Why」を入力する"
          name="why"
          value={this.state.why}
          style={this.formStyle}
          onChange={this.typeWhy}
        />
        <Link to="/why">
          <Button
            variant="contained"
            color="primary"
            href="#contained-buttons"
            style={this.btnStyle}
          >
            決定
          </Button>
        </Link>
      </form>
    )
  }
}
