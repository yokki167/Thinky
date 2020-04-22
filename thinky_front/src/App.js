import React from "react";
import Home from "./components/Home.js";
import "./App.css";
import Layout from "./components/Layout";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
import UserMypage from "./components/UserMypage";
import EveryoneWhy from "./components/EveryoneWhy";
import ChatPage from "./components/ChatPage";
// import UserEdit from "./components/UserEdit";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/why" component={ChatPage} />
          <Route path="/share" component={EveryoneWhy} />
          <Route path="/mypage" component={UserMypage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
