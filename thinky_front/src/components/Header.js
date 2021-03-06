// Import Packages
import React from "react"
import { Link, withRouter } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import axios from "axios"

// Import Styles
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"

// Import Components

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "white",
    textTransform: "none",
  },
  button: {
    marginRight: theme.spacing(1),
    textTransform: "none",
  },
}))

function Header(props) {
  const classes = useStyles()

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" })
  const isTabletOrLaptop = useMediaQuery({ query: "(min-width: 767px)" })

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  // ログアウトボタンクリックで発火
  function handleLogoutClick() {
    console.log("logout btn pushed")
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        console.log(response)
        props.handleLogout()
        props.history.push("/signin")
      })
      .catch((error) => {
        console.log("logout error", error)
      })
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }

  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/home" className={classes.link}>
              Thinky
            </Link>
          </Typography>
          {isTabletOrLaptop &&
            (props.user.id ? (
              <>
                <Button color="inherit" className={classes.button}>
                  {props.user.username ? (
                    <Link to="/mypage" className={classes.link}>
                      {props.user.username}
                    </Link>
                  ) : (
                    <Link to="/mypage" className={classes.link}>
                      No Name
                    </Link>
                  )}
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleLogoutClick()}
                  className={classes.button}
                >
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" className={classes.button}>
                  <Link to="/signin" className={classes.link}>
                    Log in
                  </Link>
                </Button>

                <Button color="inherit" className={classes.button}>
                  <Link to="/signup" className={classes.link}>
                    Sign up
                  </Link>
                </Button>
              </>
            ))}

          {isMobile &&
            (props.user.id ? (
              <>
                <Button color="inherit" className={classes.button}>
                  {props.user.username ? (
                    <Link to="/mypage" className={classes.link}>
                      {props.user.username}
                    </Link>
                  ) : (
                    <Link to="/mypage" className={classes.link}>
                      No Name
                    </Link>
                  )}
                </Button>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  ref={anchorRef}
                  aria-controls={open ? "menu-list-grow" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <MenuIcon />
                </IconButton>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom"
                            ? "center top"
                            : "center bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>
                              <Link to="/home" className={classes.link}>
                                home
                              </Link>
                            </MenuItem>
                            <MenuItem onClick={() => handleLogoutClick()}>
                              Log out
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </>
            ) : (
              <>
                <Button color="inherit" className={classes.button}>
                  <Link to="/signin" className={classes.link}>
                    Log in
                  </Link>
                </Button>

                <Button color="inherit" className={classes.button}>
                  <Link to="/signup" className={classes.link}>
                    Sign up
                  </Link>
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Header)
