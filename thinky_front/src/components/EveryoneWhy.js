// Import Packages
import React, { useState, useEffect } from "react"
import axios from "axios"

// Import Styles
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components
import WhiesList from "./WhiesList"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const selectStyle = {
  width: "30vh",
}

const btnStyle = {
  height: "50px",
  width: "100px",
}

export default function EveryoneWhy() {
  const classes = useStyles()
  const [age, setAge] = useState(0)

  // const handleChange = (event) => {
  //   setAge(event.target.value)
  // }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     whies: [],
  //   }
  // }

  const [text, setText] = useState("")

  const [whies, setWhies] = useState([])
  useEffect(() => {
    getPostsData()
  }, [])

  function getPostsData() {
    axios
      .get("http://localhost:3001/whies/index")
      .then((response) => {
        console.log(response)
        setWhies(response.data)
      })
      .catch(() => {
        console.log("通信に失敗しました")
      })
  }
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:3001/whies/index")
  //     .then((results) => {
  //       console.log(results)
  //       this.setState({ whies: results.data })
  //     })
  //     .catch((data) => {
  //       console.log(data)
  //     })
  // }

  return (
    <>
      <div className={EveryoneWhyStyle.top}>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              ジャンルを選択
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={(event) => {
                setAge(event.target.value)
              }}
              label="ジャンルを選択"
              style={selectStyle}
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
        <div className={EveryoneWhyStyle.search}>
          <input
            className={EveryoneWhyStyle.box}
            onChange={(event) => {
              setText(event.target.value)
              console.log(whies[0].question)
              console.log(whies[0].question)
            }}
            value={text}
          ></input>
          <div className={EveryoneWhyStyle.btn}>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={btnStyle}
            >
              検索
            </Button>
          </div>
        </div>
      </div>
      <div className={EveryoneWhyStyle.main}>
        <WhiesList whiesData={whies} text={text} />
      </div>
    </>
  )
}
