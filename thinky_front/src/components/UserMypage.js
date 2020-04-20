import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Grid from "@material-ui/core/Grid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const UserMypage = () => {
  return (
    <>
      <div className="mypage">
        <div className="top">
          <div className="userName">Taro</div>
          <div className="editBtn">
            <SettingsIcon />
          </div>
        </div>
        <div className="middle">
          <Tabs>
            <TabList>
              <Tab>
                <div className="myWhy">
                  <div className="leftWhy">自分の考えたWHY</div>
                  <div className="count">
                    <div className="tabIcon"></div>
                    <div className="number">34</div>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="likeWhy">
                  <div className="leftWhy">いいねしたWHY</div>
                  <div className="count">
                    <div className="tabIcon"></div>
                    <div className="number">20</div>
                  </div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <div className="whyLists">
                <div className="list">空はなぜ青いのか？</div>
                <div className="list">眠いのはなぜ？</div>
                <div className="list">ナゼーー</div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="whyLists">
                <div className="list">海はなぜ青いのか？</div>
                <div className="list">のはなぜ？</div>
                <div className="list">ああああ</div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default UserMypage;
