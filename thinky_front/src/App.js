import React from "react";
import Home from "./components/Home.js";
import "./App.css";
import Layout from "./components/Layout";
import WhyModal from "./components/WhyModal";
import UserMypage from "./components/UserMypage";
import EveryoneWhy from "./components/EveryoneWhy";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Link to="/home">ホーム画面へ</Link>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/why" component={WhyModal} />
          <Route path="/share" component={EveryoneWhy} />
          <Route path="/mypage" component={UserMypage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
