// Import Packages
import React from "react"
import axios from "axios"
import update from "immutability-helper"

// Import Styles
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
      modalWhy: "",
      checkShare: true,
      genreId: "",
    }

    this.shareChange = this.shareChange.bind(this)
    this.chooseGenre = this.chooseGenre.bind(this)
  }

  shareOrNot = (share) => {
    axios
      .patch("http://localhost:3001/whies/update", { share: share })
      .then((response) => {
        console.log(response.data)
        console.log("success!")
      })
      .catch((data) => {
        console.log(data)
      })
  }

  shareChange(e) {
    this.setState({ [e.target.name]: e.target.checked })
    // this.shareOrNot(this.state.checkShare)
  }

  chooseGenre(e) {
    this.setState({ genreId: e.target.value })
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
                value={this.state.genreId}
                onChange={this.chooseGenre}
                label="ジャンルを選択"
                style={this.genreStyle}
              >
                <MenuItem value={1}>自然</MenuItem>
                <MenuItem value={2}>科学</MenuItem>
                <MenuItem value={3}>自己</MenuItem>
                <MenuItem value={4}>食物</MenuItem>
              </Select>
            </FormControl>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.checkShare}
                onChange={this.shareChange}
                name="checkShare"
                color="primary"
              />
            }
            label="この「Why」をみんなに共有する"
          />
        </div>
        <WhyForm
          genreId={this.state.genreId}
          checkShare={this.state.checkShare}
          tabindex="-1"
        />
      </div>
    )
  }

  genreStyle = {
    width: "24vw",
  }

  formStyle = {
    margin: "8px",
    minWidth: "120px",
  }
}
