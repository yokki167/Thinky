// Import Packages
// import React from "react"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

// Import Styles
import UserMypageStyle from "../styles/UserMypage.module.scss"
import { makeStyles } from "@material-ui/styles"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied"
import "react-tabs/style/react-tabs.css"
import EveryoneWhyStyle from "../styles/EveryoneWhy.module.scss"

// Import Components

function WhyTab(props) {
  const [likeWhies, setLikeWhies] = useState([])

  useEffect(() => {
    getLikeWhy(props.userId)
    // console.log("err")
    // console.log(props)
  }, [props.userId])

  function getLikeWhy(id) {
    // console.log(props.userId)
    axios
      .get(`http://localhost:3001/whies/${id}/like_whies`)
      .then((response) => {
        console.log(response.data)
        setLikeWhies(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  function getPvWhy(id) {
    props.history.push({
      // Routerを介して<ChatPage/>にstateを渡す
      pathname: `/whies/${id}`,
      state: {
        whyId: id,
        pv: true,
      },
    })
  }

  function getPbWhy(id) {
    props.history.push({
      // Routerを介して<ChatPage/>にstateを渡す
      pathname: `/whies/${id}`,
      state: {
        whyId: id,
        pb: true,
      },
    })
  }

  return (
    <>
      <Tabs>
        <TabList>
          <Tab style={TabStyle}>
            <div className={UserMypageStyle.myWhy}>
              <div className={UserMypageStyle.leftWhy}>自分の考えたWHY</div>
              <div className={UserMypageStyle.count}>
                <SentimentVerySatisfiedIcon />
                <div className={UserMypageStyle.number}>
                  {props.whies.length}
                </div>
              </div>
            </div>
          </Tab>
          <Tab style={TabStyle}>
            <div className={UserMypageStyle.likeWhy}>
              <div className={UserMypageStyle.leftWhy}>いいねしたWHY</div>
              <div className={UserMypageStyle.count}>
                <ThumbUpIcon />

                <div className={UserMypageStyle.number}>{likeWhies.length}</div>
              </div>
            </div>
          </Tab>
        </TabList>
        <TabPanel>
          <div className={UserMypageStyle.whyListsLeft}>
            {/* <div className={UserMypageStyle.list}> */}
            {props.whies.map((why) => (
              // <div>{why.question}</div>
              <div
                className={UserMypageStyle.list}
                onClick={() => {
                  getPvWhy(why.id)
                  console.log(why.id)
                }}
              >
                <div className={UserMypageStyle.title}>{why.question}</div>
                {/* <div className={EveryoneWhyStyle.answer}>
                    <div className={EveryoneWhyStyle.index}>Answer:</div>
                    {/* <div className={EveryoneWhyStyle.count}>{count}</div> */}
                {/* </div>  */}
              </div>
            ))}
            {/* </div> */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className={UserMypageStyle.whyListsRight}>
            {likeWhies.map((why) => (
              // <div>{why.question}</div>
              <div
                className={UserMypageStyle.list}
                onClick={() => {
                  getPbWhy(why.id)
                  console.log(why.id)
                }}
              >
                <div className={UserMypageStyle.title}>{why.question}</div>
                {/* <div className={EveryoneWhyStyle.answer}>
                  <div className={EveryoneWhyStyle.index}>Answer:</div>
                  {/* <div className={EveryoneWhyStyle.count}>{count}</div> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  )
}

const useStyles = makeStyles({
  EditIcon: {
    color: "black",
    fontSize: "40px",
  },
  Tab: {
    width: "48%",
  },
})

const TabStyle = {
  width: "48%",
  // height: "30px",
}

export default withRouter(WhyTab)
