// Import Packages
// import React from "react"
import React, { useState, useEffect } from "react"

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

// Import Styles
import SettingsIcon from "@material-ui/icons/Settings"
import UserMypageStyle from "../styles/UserMypage.module.scss"
import { makeStyles } from "@material-ui/styles"
import "react-tabs/style/react-tabs.css"
import axios from "axios"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faUserCog } from "@fortawesome/free-solid-svg-icons"

// Import Components
import WhyTab from "./WhyTab"

export default function UserMypage(props) {
  const classes = useStyles()

  const [whies, setWhies] = useState([])

  console.log(props)

  useEffect(() => {
    getWhyData(props.user.id)
    // console.log("err")
    // console.log(props)
  }, [props])
  // console.log(props)

  function getWhyData(id) {
    console.log(props.user.id)
    axios
      .get(`http://localhost:3001/whies/${id}/user`)
      .then((response) => {
        // console.log(response.data)
        setWhies(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <div className={UserMypageStyle.wrapper}>
      <div className={UserMypageStyle.mypage}>
        <div className={UserMypageStyle.top}>
          <div className={UserMypageStyle.userName}>{props.user.username}</div>
          <div className={UserMypageStyle.edit}>
            <Link to="/userEdit" className="linkMypage">
              {/* <div className={UserMypageStyle.iconName}>ユーザー編集</div> */}

              {/* <AccountCircleIcon className={classes.EditIcon} /> */}
              <FontAwesomeIcon icon={faUserCog} className={classes.EditIcon} />
            </Link>
          </div>
        </div>
        <div className={UserMypageStyle.middle}>
          <WhyTab whies={whies} userId={props.user.id} />
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  EditIcon: {
    color: "black",
    fontSize: "50px",
  },
  // Edit2Icon: {
  //   color: "black",
  //   fontSize: "30px",
  // },

  Tab: {
    width: "48%",
  },
})
