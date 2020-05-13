// Import Packages
import React, { useState, useEffect } from "react"
import { withRouter, Link } from "react-router-dom"
import axios from "axios"

// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

// Import Styles
import { makeStyles } from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
// import FormControlLabel from "@material-ui/core/FormControlLabel"
// import Checkbox from "@material-ui/core/Checkbox"
// import Link from "@material-ui/core/Link"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

// Import Components

function SignUp(props) {
  const classes = useStyles()

  const [user, setUser] = useState([])
  const [idd, setId] = useState(0)

  const [username, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    getUserData(props.user.id)
    setId(props.user.id)
  }, [props])

  console.log(email)

  function handleSuccessfulAuth(data) {
    props.handleLogin(data)
    props.history.push("/home")
  }

  function getUserData(id) {
    console.log(id)
    axios
      .get(`http://localhost:3001/registrations/${id}/edit`)
      .then((response) => {
        console.log(response.data)
        setUser(response.data)

        setName(response.data.username)
        setEmail(response.data.email)

        // setPassword(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  // function judgePassword() {
  //   if (password) {
  //     handleSubmitInPassword
  //   } else {
  //     handleSubmitNoPassword
  //   }
  // }

  function handleSubmitInPassword(event) {
    console.log(idd)
    axios
      .patch(
        `http://localhost:3001/registrations/${idd}`,
        {
          id: idd,
          user: {
            email: email,
            username: username,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          console.log(response.data.status)
          console.log(response.data.user)

          handleSuccessfulAuth(response.data)
        }
      })
      .catch((error) => {
        console.log("registration error", error)
      })
    event.preventDefault()
  }

  function handleSubmitNoPassword(event) {
    console.log(idd)
    axios
      .patch(
        `http://localhost:3001/registrations/${idd}`,
        {
          id: idd,
          user: {
            email: email,
            username: username,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          console.log(response.data.status)
          console.log(response.data.user)

          handleSuccessfulAuth(response.data)
        }
      })
      .catch((error) => {
        console.log("registration error", error)
      })
    event.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Edit
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(event) =>
            password
              ? handleSubmitInPassword(event)
              : handleSubmitNoPassword(event)
          }
          // onsubmit={handleSubmitInPassword}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                value={username}
                onChange={(event) => {
                  setName(event.target.value)
                }}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </Grid>
            <Grid
              container
              // direction="column"
              justify="center"
              // alignItems="center"
              xs={12}
            >
              <Grid xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Update
                </Button>
              </Grid>
            </Grid>

            <Grid
              container
              // direction="column"
              justify="center"
              // alignItems="center"
              xs={12}
            >
              <Grid xs={6}>
                <Button
                  href="./home"
                  fullWidth
                  variant="contained"
                  className={classes.cancel}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#3E51B5",
    color: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3E51B5",
    "&:hover": { backgroundColor: "rgb(62, 81, 181, 0.7)" },
    color: "white",
  },
  cancel: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "rgb(181,45,57)",
    "&:hover": { backgroundColor: "rgb(181,45,57, 0.7)" },
    color: "white",
  },
}))

// export default UserEdit;
export default withRouter(SignUp)
