// Import Packages
import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

// Import Styles
import SettingsIcon from "@material-ui/icons/Settings"
import UserMypageStyle from "../styles/UserMypage.module.scss"
import { makeStyles } from "@material-ui/styles"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied"
import "react-tabs/style/react-tabs.css"

// Import Components

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

const UserMypage = () => {
  const classes = useStyles()

  return (
    <>
      <div className={UserMypageStyle.mypage}>
        <div className={UserMypageStyle.top}>
          <div className={UserMypageStyle.userName}>Taro</div>
          <Link to="/userEdit" className="linkMypage">
            <SettingsIcon className={classes.EditIcon} />
          </Link>
        </div>
        <div className={UserMypageStyle.middle}>
          <Tabs>
            <TabList>
              <Tab style={TabStyle}>
                <div className={UserMypageStyle.myWhy}>
                  <div className={UserMypageStyle.leftWhy}>自分の考えたWHY</div>
                  <div className={UserMypageStyle.count}>
                    <SentimentVerySatisfiedIcon />
                    <div className={UserMypageStyle.number}>34</div>
                  </div>
                </div>
              </Tab>
              <Tab style={TabStyle}>
                <div className={UserMypageStyle.likeWhy}>
                  <div className={UserMypageStyle.leftWhy}>いいねしたWHY</div>
                  <div className={UserMypageStyle.count}>
                    <ThumbUpIcon />

                    <div className={UserMypageStyle.number}>20</div>
                  </div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <div className={UserMypageStyle.whyListsLeft}>
                <div className={UserMypageStyle.list}>空はなぜ青いのか？</div>
                <div className={UserMypageStyle.list}>眠いのはなぜ？</div>
                <div className={UserMypageStyle.list}>ナゼーー</div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={UserMypageStyle.whyListsRight}>
                <div className={UserMypageStyle.list}>海はなぜ青いのか？</div>
                <div className={UserMypageStyle.list}>のはなぜ？</div>
                <div className={UserMypageStyle.list}>ああああ</div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default UserMypage
