import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Grid from "@material-ui/core/Grid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const UserMypage = () => {
  return (
    <>
      <div className="mypage">
        <div className="top">
          <div classNmae="userName">Taro</div>
          <div classNmae="editBtn">
            <SettingsIcon />
          </div>
        </div>
        <div className="middle">
          <Tabs>
            <TabList>
              <Tab>
                <div classNmae="myWhy">
                  <div classNmae="leftWhy">自分の考えたWHY</div>
                  <div classNmae="count">
                    <div classNmae="tabIcon"></div>
                    <div classNmae="number">34</div>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div classNmae="likeWhy">
                  <div classNmae="leftWhy">いいねしたWHY</div>
                  <div classNmae="count">
                    <div classNmae="tabIcon"></div>
                    <div classNmae="number">20</div>
                  </div>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <div className="whyLists">
                <div classNmae="list">空はなぜ青いのか？</div>
                <div classNmae="list">眠いのはなぜ？</div>
                <div classNmae="list">ナゼーー</div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="whyLists">
                <div classNmae="list">海はなぜ青いのか？</div>
                <div classNmae="list">のはなぜ？</div>
                <div classNmae="list">ああああ</div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default UserMypage;
