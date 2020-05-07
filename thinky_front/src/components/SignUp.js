// Import Packages
import React from "react"
import { withRouter, Link } from "react-router-dom"
import axios from "axios"

// Import Styles
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

// Import Components
import Copyright from "./Copyright"
import Validation from "./UserValidation"

const initialState = {
  email: "",
  password: "",
  // passwordCount: 0,
  password_confirmation: "",
  registrationErrors: "",
  emailError: "",
  passwordError: "",
  passwordConfirmationError: "",
}
class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validate = this.validate.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
    // this.validate()
  }

  validate = () => {
    const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

    let emailError = ""
    let passwordError = ""
    let passwordConfirmationError = ""
    const email = this.state.email
    const password = this.state.password
    const confirmation = this.state.password_confirmation

    if (!email.match(regex)) {
      emailError = "メールアドレスが無効です"
      if (!email) {
        emailError = "メールアドレスを入力してください"
      }
    }
    if (!password) {
      passwordError = "パスワードを入力してください"
    }

    if (password && password.length < 7) {
      passwordError = "７文字以上のパスワードを入力してください"
    }

    if (password !== confirmation) {
      passwordConfirmationError = "パスワードが一致していません"
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError, passwordConfirmationError })
      return false
    }

    return true
  }

  // handleLoginでstateにユーザー情報を保存し、パスも移動
  handleSuccessfulAuth(data) {
    this.props.handleLogin(data)
    this.props.history.push("/home")
  }

  // 新規ユーザー登録メソッド
  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state
    const isValid = this.validate()
    if (isValid) {
      axios
        .post(
          "http://localhost:3001/registrations",
          {
            user: {
              email: email,
              password: password,
              password_confirmation: password_confirmation,
            },
          },
          { withCredentials: true }
        )
        .then((response) => {
          if (response.data.status === "created") {
            console.log(response.data.status)
            this.setState(initialState)
            this.handleSuccessfulAuth(response.data)
          }
        })
        .catch((error) => {
          console.log("registration error", error)
        })
    }
    event.preventDefault()
  }

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={this.useStyles.paper}>
          <Avatar style={this.useStyles.avator}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form
            noValidate
            onSubmit={this.handleSubmit}
            style={this.useStyles.form}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red", fontSize: "14px" }}>
                  {this.state.emailError}
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red", fontSize: "14px" }}>
                  {this.state.passwordError}
                </div>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password_confirmation"
                  label="Password_confirmation"
                  type="password"
                  id="password_confirmation"
                  autoComplete="password_confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                />
                <div style={{ color: "red", fontSize: "14px" }}>
                  {this.state.passwordConfirmationError}
                </div>
              </Grid>
              <Grid
                container
                // direction="column"
                justify="center"
                // alignItems="center"
              >
                <Grid item xs={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={this.useStyles.submit}
                  >
                    Sign up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item style={{ margin: "0 auto" }}>
                <Link to="/signin" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    )
  }
  useStyles = {
    paper: {
      marginTop: "64px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: "8px",
      // backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: "24px",
    },
    submit: {
      margin: "24px 0 16px",
    },
  }
}

export default withRouter(SignUp)
