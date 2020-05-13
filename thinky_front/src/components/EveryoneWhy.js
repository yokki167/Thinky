// Import Packages
import React, { useState, useEffect } from "react"
import axios from "axios"

// Import Styles
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
// import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"
import TextField from "@material-ui/core/TextField"

// Import Components
import WhiesList from "./WhiesList"

export default function EveryoneWhy(props) {
  const classes = useStyles()
  const [genreId, setGenreId] = useState(``)

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
      .catch((error) => {
        console.log("通信に失敗しました", `Error message:${error}`)
      })
  }

  function searchPostsData() {
    axios
      .get(`http://localhost:3001/whies/${text}/search`)
      .then((response) => {
        console.log(response)
        setWhies(response.data)
        console.log(whies)
      })
      .catch((error) => {
        console.log("通信に失敗しました", `Error message:${error}`)
      })
    console.log(text)
  }

  return (
    <div className={EveryoneWhyStyle.wrapper}>
      <div className={EveryoneWhyStyle.top}>
        <div className={EveryoneWhyStyle.select}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              ジャンルを選択
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={genreId}
              onChange={(event) => {
                setGenreId(event.target.value)
              }}
              label="ジャンルを選択"
              style={selectStyle}
            >
              <MenuItem value={``}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>自然</MenuItem>
              <MenuItem value={2}>科学</MenuItem>
              <MenuItem value={3}>自己</MenuItem>
              <MenuItem value={4}>食物</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={EveryoneWhyStyle.search}>
          {/* <input
            className={EveryoneWhyStyle.box}
            onChange={(event) => {
              setText(event.target.value)
              console.log(event.target.value)
            }}
            value={text}
            required
          ></input> */}
          <TextField
            className={EveryoneWhyStyle.box}
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            onChange={(event) => {
              setText(event.target.value)
              console.log(event.target.value)
            }}
            value={text}
            required
          />

          <div className={EveryoneWhyStyle.btn}>
            <Button
              variant="contained"
              color="primary"
              href="#contained-buttons"
              style={btnStyle}
              onClick={() => {
                text ? searchPostsData() : getPostsData()
                // console.log(event.target.value)
              }}
            >
              検索
            </Button>
          </div>
        </div>
      </div>
      <div className={EveryoneWhyStyle.main}>
        <WhiesList whiesData={whies} genreId={genreId} user={props.user} />
      </div>
    </div>
  )
}

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
  // width: "100px",
  backgroundColor: "#4051B5",
}
