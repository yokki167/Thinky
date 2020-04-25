// Import Packages
import React from "react"

// Import Styles
import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"

// Import Components

class WhyForm extends React.Component {
  constructor(props) {
    super(props)
    this.typeWhy = this.typeWhy.bind(this)
    this.decideWhy = this.decideWhy.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = { why1: "" }
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
    this.setState({ why1: e.target.value })
  }

  decideWhy(callback) {
    const why = this.state.why1
    this.setState({ why1: why })
    this.props.createWhy(this.state.why1)
    callback()
  }

  handleClick() {
    this.props.history.push({
      pathname: "/why",
      state: { why3: this.state.why1 },
    })
  }

  render() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={() => {
          this.decideWhy(this.handleClick)
        }}
      >
        <TextareaAutosize
          rowsMax={1}
          aria-label="maximum height"
          placeholder="「Why」を入力する"
          name="why1"
          value={this.state.why}
          style={this.formStyle}
          onChange={this.typeWhy}
        />
        <Button
          variant="contained"
          color="primary"
          style={this.btnStyle}
          type="submit"
          // onClick={() => {
          //   console.log("sucsjogf")
          // }}
        >
          決定
        </Button>
      </form>
    )
  }
}

export default withRouter(WhyForm)
