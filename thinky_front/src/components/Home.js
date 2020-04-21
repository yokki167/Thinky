import React from "react";
import Button from "@material-ui/core/Button";
import HomeCss from "../styles/Home.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

const useStyles = makeStyles({
  head: {
    color: "white",
    margin: "0 auto",
  },

  home: {
    backgroundColor: "gray",
    height: "100vh",
    padding: "100px",
  },

  container: {
    height: "100%",
    alignItems: "center",
    margin: "0 auto",
    display: "flex",
  },

  btnWrapper: {
    height: "50%",
    width: "75%",
    alignItems: "center",
    margin: "0 auto",
    display: "block",
  },

  btn: {
    // width: "75%",
    display: "block",
    marginTop: "60px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
  },

  link: {
    textDecoration: "none",
  },
});

const Home = () => {
  const home = useStyles();
  return (
    <Router>
      <div className={home.home}>
        <h2 className={home.head}>What do you want to think?</h2>
        <div className={home.container}>
          <div className={home.btnWrapper}>
            <Link to="/why" className={home.link}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={home.btn}
              >
                "Why"を考える
              </Button>
            </Link>
            <Link to="/share" className={home.link}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={home.btn}
              >
                みんなの"Y"を考える
              </Button>
            </Link>
            <Link to="/mypage" className={home.link}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={home.btn}
              >
                マイページ
              </Button>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/mine">
            <Why />
          </Route>
          <Route path="/share">
            <Share />
          </Route>
          <Route path="/mypage">
            <Mypage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
