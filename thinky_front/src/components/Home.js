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
      <h2 className={home.head}>What do you want to think?</h2>
      <div className={home.container}>
        <div className={home.btnWrapper}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={home.btn}
            onClick={() => {
              setIsOpen(true)
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
          )
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  head: {
    color: "white",
    paddingTop: theme.spacing(7),
    paddingLeft: theme.spacing(7),
    margin: "0 auto",
  },

  home: {
    backgroundColor: "gray",
    height: "100vh",
    // padding: "100px",
  },

  container: {
    height: "100%",
    alignItems: "center",
    margin: "0 auto",
    display: "flex",
  },

  btnWrapper: {
    height: "75%",
    width: "75%",
    alignItems: "center",
    margin: "0 auto",
    display: "block",
  },

  btn: {
    display: "block",
    marginTop: "60px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
  },

  link: {
    textDecoration: "none",
  },
}))

export default Home
