import React from "react";
import "./singlechannel.css";
import { useNavigate } from "react-router-dom";
import { countdate } from "../../Fetchapifunc";

function Horizontalvideocard({ video }) {
  const navigate = useNavigate();
  return (
    <div
      className="horizontalvideocard"
      onClick={() => {
        navigate(
          `/video/${video.id.videoId}/channel/${video.snippet.channelId}`
        );
      }}
    >
      <div className="videothumb">
        <img src={video.snippet.thumbnails.medium.url} alt="" />
      </div>
      <div className="cardstatdet">
        <div className="titlevideo">{video.snippet.title}</div>
        <div className="postvideo">
          {countdate(video.snippet.publishTime)} ago
        </div>
      </div>
    </div>
  );
}

export default Horizontalvideocard;
