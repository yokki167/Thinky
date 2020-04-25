// Import Pacakages
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Import Styles

// Import Components
import Home from "./Home.js"
import Layout from "./Layout"
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
// import UserEdit from "./UserEdit";
import UserMypage from "./UserMypage"
import EveryoneWhy from "./EveryoneWhy"
import ChatPage from "./ChatPage"

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
