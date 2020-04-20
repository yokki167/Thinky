import React from "react";
import Button from "@material-ui/core/Button";
import home from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const useStyles = makeStyles({
  home: {
    backgroundColor: "black",
    height: "100vh",
    padding: "100px",
  },

  container: {
    backgroundColor: "blanchedalmond",
    height: "100%",
    alignItems: "center",
    margin: "0 auto",
    display: "block",
  },

  btnWrapper: {
    height: "50%",
    alignItems: "center",
    backgroundColor: "red",
    margin: "0 auto",
  },

  btn: {
    width: "75%",
    display: "block",
    margin: {
      left: "auto",
      right: "auto",
      top: "60px",
    },
    padding: "20px",
  },
});

const Home = () => {
  const home = useStyles();
  return (
    <Router>
      <div className={home.home}>
        <div className={home.container}>
          <div className={home.btnWrapper}>
            <Button variant="contained" color="info" className={home.btn}>
              "Why"を考える
            </Button>
            <Button variant="contained" color="primary" className={home.btn}>
              みんなの"Y"を考える
            </Button>
            <Button variant="contained" color="primary" className={home.btn}>
              マイページ
            </Button>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
