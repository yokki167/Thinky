// Import Packages
import axios from "axios"
import React, { useState, useEffect } from "react"

// Import Styles
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import { makeStyles } from "@material-ui/core/styles"

// Import Components

function Like() {
  const classes = useStyles()

  const [like, setLike] = useState(false)

  const handleLike = () => {
    console.log("like button pushed")
    setLike(!like)
  }

  return (
    <>
      {like ? (
        <div>
          <ThumbUpIcon className={classes.like} onClick={handleLike} />
          <span className={classes.count}>34</span>
        </div>
      ) : (
        <div>
          <ThumbUpIcon className={classes.unlike} onClick={handleLike} />
          <span className={classes.count}>33</span>
        </div>
      )}
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  like: {
    filter: `drop-shadow(0 10px 25px 0 rgba(0, 0, 0, .5))`,
    zIndex: 1,
    color: "red",
    "&:hover": {
      cursor: "pointer",
    },
  },
  unlike: {
    zIndex: 1,
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  count: {
    margin: theme.spacing(1),
    display: "inline-block",
    // marginBottom: theme
  },
  container: {
    alignItems: "center",
    width: "70px",
    float: "right",
    position: "relative",
    top: "-100px",
  },
}))

export default Like
