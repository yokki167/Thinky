// Import Packages
import React from "react"

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
      checkShare: true,
      genreId: "",
    }
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
                onChange={(e) => {
                  this.setState({ genreId: e.target.value })
                }}
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
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.checked })
                }}
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
          user={this.props.user}
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
