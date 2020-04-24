import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import { makeStyles } from "@material-ui/core/styles"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import modalStyles from "../styles/WhyModal.module.scss"
import WhyForm from "./WhyForm"

// const [age, setAge] = React.useState("");

// const handleChange = (event) => {
//   setAge(event.target.value);
// };

// const [state, setState] = React.useState({
//   checkedA: true,
//   checkedB: true,
//   checkedF: true,
//   checkedG: true,
// })

// const handleChange = (event) => {
//   setState({ ...state, [event.target.name]: event.target.checked })
// }

export default class WhyModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      why: "",
      checkedA: true,
      checkedB: true,
      checkedF: true,
      checkedG: true,
    }
  }

  createWhy = (why) => {
    axios
      .post("http://localhost:3001/whies/post", { why: why })
      .then((response) => {
        const newWhy = update(this.state.whies, { $push: [response.data] })
        this.setState({ why: newWhy })
      })
      .catch((data) => {
        console.log(data)
      })
  }

  selectStyle = {
    width: "35vh",
  }

  useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }))

  // handleChange(e) {
  //   this.setState({ [e.target.name]: e.target.checked })
  // }

  render() {
    return (
      <div className={modalStyles.modalBox}>
        <div className={modalStyles.title}>「Why?」を深掘りしよう！</div>
        <div className={modalStyles.subBox}>
          <div>
            <FormControl
              variant="outlined"
              className={this.useStyles.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                ジャンルを選択
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                onChange={this.handleChange}
                label="ジャンルを選択"
                style={this.selectStyle}
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
