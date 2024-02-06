import React, { useRef } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import "./Commentinfo.css";
import { useNavigate } from "react-router-dom";
import { countdate } from "../../Fetchapifunc";

function Commentinfo({ comment }) {
  const navigate = useNavigate();
  const like = useRef();
  const dislike = useRef();

  function switchlike() {
    if (like.current.style.color != "blue") {
      like.current.style.color = "blue";
    } else {
      like.current.style.color = "black";
    }
    dislike.current.style.color = "black";
  }

  function switchdislike() {
    if (dislike.current.style.color != "blue") {
      dislike.current.style.color = "blue";
    } else {
      dislike.current.style.color = "black";
    }
    like.current.style.color = "black";
  }
  return (
    <div className="commentinfo">
      <div
        className="commentprofile"
        onClick={() => {
          navigate(
            `/channel/${comment.snippet.topLevelComment.snippet.authorChannelId.value}`
          );
        }}
      >
        <img
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt=""
        />
      </div>{" "}
      <div className="commentstat">
        <div className="commentupper">
          <div
            className="commentname"
            onClick={() => {
              navigate(
                `/channel/${comment.snippet.topLevelComment.snippet.authorChannelId.value}`
              );
            }}
          >
            {" "}
            {comment.snippet.topLevelComment.snippet.authorDisplayName}{" "}
          </div>{" "}
          <div className="commenttime">
            {" "}
            {countdate(comment.snippet.topLevelComment.snippet.updatedAt)}{" "}
          </div>{" "}
        </div>{" "}
        <div className="maincomment">
          {" "}
          {comment.snippet.topLevelComment.snippet.textDisplay}{" "}
        </div>{" "}
        <div className="commentlower">
          <div className="commentlike" ref={like} onClick={switchlike}>
            <ThumbUpIcon />
          </div>{" "}
          <div className="commentdislike" ref={dislike} onClick={switchdislike}>
            <ThumbDownIcon />
          </div>{" "}
          <div className="reply">Reply </div>{" "}
        </div>{" "}
        {comment.snippet.topLevelComment.totalReplyCount == 0 ? (
          <div></div>
        ) : (
          <div className="replies">
            {" "}
            {comment.snippet.totalReplyCount}
            replies{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
}

export default Commentinfo;
