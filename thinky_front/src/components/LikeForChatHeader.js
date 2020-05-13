import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles((theme) => ({
  like: {
    color: "#3F51B5",
    transform: "translateY(8px)",
    "&:hover": {
      cursor: "pointer",
    },
    fontSize: "1.7em",
  },
  unlike: {
    color: "white",
    transform: "translateY(8px)",
    "&:hover": {
      cursor: "pointer",
    },
    fontSize: "1.7em",
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
          <FontAwesomeIcon
            icon={faThumbsUp}
            className={useStyle.like}
            onClick={() => {
              props.handleLike()
            }}
          />
          <span className={useStyle.count}>{props.likeCount}</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon
            icon={faThumbsUp}
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
