// Import Packages
import axios from "axios"
import React, { useState, useEffect } from "react"

// Import Styles
import { makeStyles } from "@material-ui/core/styles"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Import Components

function Like(props) {
  const classes = useStyles()

  const [like, setLike] = useState(false)
  const [count, setCount] = useState(props.why.likes_count)
  const id = props.why.id
  const userId = props.user.id

  // componentの更新ごとに発火
  useEffect(() => {
    getLikesData(id, userId)
  }, props)

  // ユーザーがいいねしたかどうか確認する
  function getLikesData(id, userId) {
    axios
      .get(
        `http://localhost:3001/whies/${id}/status/${id}`,
        { params: { user_id: userId } },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "already liked") {
          console.log("success", res.data)
          setLike(true)
        } else {
          console.log("success", res.data)
          setLike(false)
        }
      })
      .catch((err) => {
        console.log("error", err)
      })
  }

  // いいねボタン押したとき
  const handleLike = () => {
    console.log("like button pushed")
    console.log("user_id", userId)

    // likeのstateがtrue(押されている)か、false(押されていない)で条件分岐
    return like
      ? axios
          .delete(
            `http://localhost:3001/whies/${id}/like/${id}`,
            { data: { user_id: userId } },
            { withCredentials: true }
          )
          .then((res) => {
            setLike(false)
            setCount(count - 1)
          })
          .catch((err) => {
            console.log(err)
          })
      : axios
          .post(
            `http://localhost:3001/whies/${id}/like/${id}`,
            { user_id: userId },
            { withCredentials: true }
          )
          .then((res) => {
            setLike(true)
            setCount(count + 1)
          })
          .catch((err) => {
            console.log(err)
          })
  }

  return (
    <>
      {/* likeのstateによって条件分岐(もっと短くできるかも？) */}
      {like ? (
        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={classes.like}
            onClick={handleLike}
          />
          <span className={classes.count}>{count}</span>
        </div>
      ) : (
        <div>
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={classes.unlike}
            onClick={handleLike}
          />
          <span className={classes.count}>{count}</span>
        </div>
      )}
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  like: {
    filter: `drop-shadow(0 10px 25px 0 rgba(0, 0, 0, .5))`,
    zIndex: 1,
    color: "#3E51B5",
    "&:hover": {
      cursor: "pointer",
    },
    fontSize: "1.7em",
  },
  unlike: {
    zIndex: 1,
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
    fontSize: "1.7em",
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
