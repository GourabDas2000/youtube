import React from "react";
import { useNavigate } from "react-router-dom";
import "./Videodetails.css";

function Videodetails({ video : { id, snippet } }) {
  const navigate = useNavigate();

  function handleclick() {
    navigate(`/video/${id.videoId}/channel/${snippet.channelId}`);
  }
  return (
    <div className="Videodetails">
      {" "}
      {snippet.liveBrodcastContent ? (
        <div className="videoupper live" onClick={handleclick}>
          <img src={snippet.thumbnails.high.url} alt="" />
        </div>
      ) : (
      <div className="videoupper" onClick={handleclick}>
        <img
          src={snippet.thumbnails.high.url }
          alt=""
        />
      </div>
      )}{" "}
      <div className="videolower">
        <div className="channel">
          <img src={snippet.thumbnails.high.url} alt="" />
        </div>{" "}
        <div className="caption">
          <h1 onClick={handleclick}> {snippet.title} </h1>{" "}
          <p
            onClick={() => {
              navigate(`/channel/${snippet.channelTitle}`);
            }}
          >
            {" "}
            {snippet.channelTitle}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Videodetails;
