// Import Pacakages
import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom"
import axios from "axios"

// Import Styles

// Import Components
import Top from "../Top"
import Home from "./Home"
import Layout from "./Layout"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import UserMypage from "./UserMypage"
import EveryoneWhy from "./EveryoneWhy"
import ChatPage from "./ChatPage"
import UserEdit from "./UserEdit"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.chekLoginStatus = this.checkLoginStatus.bind(this)
  }

  // ログイン状態維持(リロード時・ページrender時に発火？)
  checkLoginStatus() {
    console.log("start checkLoginStatus")
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          console.log("session success", response)
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          })
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          console.log("session fail", response)
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          })
        }
      })
      .catch((error) => {
        console.log("check login error", error)
      })
  }

  componentDidMount() {
    console.log("didMount")
    this.checkLoginStatus()
  }

  // handleSuccessfulAuthの中で発火
  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    })
  }

  // ログアウトボタンクリックで発火
  handleLogoutClick() {
    console.log("logout btn pushed")
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        console.log(response)
        this.handleLogout()
      })
      .catch((error) => {
        console.log("logout error", error)
      })
  }

  // ログアウト関数(handleClickLogout)で発火
  handleLogout() {
    console.log("logout started")
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact={true} path="/" component={Top} />
          <Route
            path="/whies/:id"
            render={(props) => (
              <ChatPage
                {...props}
                user={this.state.user}
                handleLogoutClick={this.handleLogoutClick}
              />
            )}
          />
          <Layout
            handleLogoutClick={this.handleLogoutClick}
            user={this.state.user}
          >
            <Route
              exact={true}
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact={true}
              path="/mypage"
              render={() => <UserMypage user={this.state.user} />}
            />
            <Route
              exact={true}
              path="/userEdit"
              render={() => (
                <UserEdit
                  user={this.state.user}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              exact={true}
              path="/share"
              render={(props) => (
                <EveryoneWhy {...props} user={this.state.user} />
              )}
            />
            <Route
              exact={true}
              path="/signin"
              render={(props) => (
                <SignIn
                  {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
            <Route
              exact={true}
              path="/signup"
              render={(props) => (
                <SignUp {...props} handleLogin={this.handleLogin} />
              )}
            />
          </Layout>
        </Switch>
      </Router>
    )
  }
}

export default App
