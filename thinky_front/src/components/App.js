// Import Pacakages
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Import Styles
import "../styles/App.css"

// Import Components
import Home from "./Home.js"
import Layout from "./Layout"
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
import UserMypage from "./UserMypage"
import EveryoneWhy from "./EveryoneWhy"
import ChatPage from "./ChatPage"
// import UserEdit from "./components/UserEdit";

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
  )
}

export default App
