import React from "react"

import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  like: {
    color: "red",
    "&:hover": {
      cursor: "pointer",
    },
  },
  unlike: {
    color: "white",
    "&:hover": {
      cursor: "pointer",
    },
  },
  count: {
    margin: theme.spacing(1),
    display: "inline-block",
  },
  container: {
    padding: "1.5rem 0",
    marginLeft: theme.spacing(2),
  },
}))

export default function LikeForChatHeader(props) {
  const useStyle = useStyles()

  return (
    <div className={useStyle.container}>
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
    </div>
  )
}
