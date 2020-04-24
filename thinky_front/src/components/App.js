// Import Components
import Home from "./Home.js"
import Layout from "./Layout"
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
import UserMypage from "./UserMypage"
import EveryoneWhy from "./EveryoneWhy"
import ChatPage from "./ChatPage"
// import UserEdit from "./components/UserEdit";

// Import Styles
import "../styles/App.css"

// Import Pacakages
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/why" component={ChatPage} />
          <Route exact={true} path="/share" component={EveryoneWhy} />
          <Route exact={true} path="/mypage" component={UserMypage} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
