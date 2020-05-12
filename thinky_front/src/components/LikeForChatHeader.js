import React from "react"

import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  like: {
    color: "#3F51B5",
    transform: "translateY(8px)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  unlike: {
    color: "white",
    transform: "translateY(8px)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  count: {
    margin: "0 8px",
    display: "inline-block",
    transform: "translateY(3px)",
  },
  container: {
    padding: "1.5rem 0",
  },
}))

export default function LikeForChatHeader(props) {
  const useStyle = useStyles()

  return (
    <span className={useStyle.container}>
      {/* likeのstateによって条件分岐(もっと短くできるかも？) */}
      {props.like ? (
        <>
          <ThumbUpIcon
            className={useStyle.like}
            onClick={() => {
              props.handleLike()
            }}
          />
          <span className={useStyle.count}>{props.likeCount}</span>
        </>
      ) : (
        <>
          <ThumbUpIcon
            className={useStyle.unlike}
            onClick={() => {
              props.handleLike()
            }}
          />
          <span className={useStyle.count}>{props.likeCount}</span>
        </>
      )}
    </span>
  )
}
