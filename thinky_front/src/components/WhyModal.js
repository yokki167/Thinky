// Import Packages
import React from "react"
import axios from "axios"
import update from "immutability-helper"

// Import Styles
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import modalStyles from "../styles/WhyModal.module.scss"

// Import Components
import WhyForm from "./WhyForm"

export default class WhyModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      why2: "",
      checkedB: true,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  createWhy = (why) => {
    axios
      .post("http://localhost:3001/whies/post", { why: why })
      .then((response) => {
        console.log(response.data)
        const newWhy = update(this.state.why2, { $set: [response.data] })
        this.setState({ why2: newWhy })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  genreStyle = {
    width: "24vw",
  }

  formStyle = {
    margin: "8px",
    minWidth: "120px",
  }

  // handleChange = (event) => {
  //     setState({ ...state, [event.target.name]: event.target.checked });
  //   };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.checked })
  }

  render() {
    return (
      <div className={modalStyles.modalBox}>
        <div className={modalStyles.title}>「Why?」を深掘りしよう！</div>
        <div className={modalStyles.subBox}>
          <div>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                ジャンルを選択
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                onChange={this.handleChange}
                label="ジャンルを選択"
                style={this.genreStyle}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>科学</MenuItem>
                <MenuItem value={20}>自然</MenuItem>
                <MenuItem value={30}>自己</MenuItem>
              </Select>
            </FormControl>
          </div>
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
          />
        </div>
        <WhyForm createWhy={this.createWhy} />
      </div>
    )
  }
}
