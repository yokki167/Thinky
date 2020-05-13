// Import Packages
import React, { useState } from "react"
import { Link } from "react-router-dom"

// Import Styles
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"

// Import Components
import WhyModal from "./WhyModal"
import DialogContent from "@material-ui/core/DialogContent"

function Home(props) {
  const home = useStyles()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={home.home}>
      <div className={home.container}>
        <div className={home.btnWrapper}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={home.btn}
            onClick={() => {
              props.user.id ? setIsOpen(true) : props.history.push("/signin")
            }}
          >
            "Why"を考える
          </Button>
          <Modal
            open={isOpen}
            onClose={() => {
              setIsOpen(false)
            }}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <DialogContent>
              <WhyModal user={props.user} />
            </DialogContent>
          </Modal>
          <Link to={props.user.id ? "/share" : "/signin"} className={home.link}>
            <Button variant="contained" fullWidth className={home.btnCenter}>
              みんなの"Why"を考える
            </Button>
          </Link>
          <Link to="/mypage" className={home.link}>
            <Button variant="contained" className={home.btn}>
              マイページ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: "#787878",
    height: "100vh",
    fontSize: "50px",
  },

  container: {
    height: "100%",
    alignItems: "center",
    margin: "0 auto",
    display: "flex",
  },

  btnWrapper: {
    // height: "75%",
    width: "90%",
    // alignItems: "center",
    // margin: "0 auto",
    // display: "block",
    // width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  btn: {
    width: "75%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    backgroundColor: "#3E51B5",
    "&:hover": { backgroundColor: "#3195F1" },
    textTransform: "none",
    color: "white",
    fontSize: "0.5em",
    fontWeight: "bold",
  },
  btnCenter: {
    width: "75%",
    display: "block",
    marginTop: "72px",
    marginBottom: "72px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    backgroundColor: "#3E51B5",
    "&:hover": { backgroundColor: "#3195F1" },
    textTransform: "none",
    color: "white",
    fontSize: "0.5em",
    fontWeight: "bold",
  },

  link: {
    textDecoration: "none",
  },
}))

export default Home
