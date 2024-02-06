import React from "react";
import "./verticalvideocard.css";
import { useNavigate } from "react-router-dom";
import { countdate } from "../../Fetchapifunc";

function Verticalvideocard({ video }) {
  const navigate = useNavigate();
  return (
    <div className="verticalvideocard">
      <div
        className="videothumblin"
        onClick={() => {
          navigate(
            `/video/${video.id.videoId}/channel/${video.snippet.channelId}`
          );
        }}
      >
        <img src={video.snippet.thumbnails.default.url} alt="" />
      </div>{" "}
      <div className="videoinfo">
        <div className="videotitle2">{video.snippet.title} </div>{" "}
        <div className="channelname">{video.snippet.channelTitle} </div>{" "}
        <div className="time"> {countdate(video.snippet.publishTime)} </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Verticalvideocard;
