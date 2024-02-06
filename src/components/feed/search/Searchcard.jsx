import React from "react";
import "./searchcard.css";
import { useNavigate } from "react-router-dom";
import { countdate } from "../../Fetchapifunc";
function Searchcard({ video }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="searchthumbnil"
        onClick={() => {
          navigate(
            `/video/${video.id.videoId}/channel/${video.snippet.channelId}`
          );
        }}
      >
        <img src={video.snippet.thumbnails.high.url} alt="" />
      </div>
      <div
        className="searchdescript"
        onClick={() => {
          navigate(
            `/video/${video.id.videoId}/channel/${video.snippet.channelId}`
          );
        }}
      >
        <div className="searchtitle">
          <h1>{video.snippet.title} </h1>
        </div>
        <div className="searchposttime">
          {countdate(video.snippet.publishTime)}
        </div>
        <div className="searchan">
          <div className="searchphoto">
            <img src={video.snippet.thumbnails.medium.url} alt="" />
          </div>
          <div className="searchname">
            <p>{video.snippet.channelTitle} </p>
          </div>
        </div>
        <div className="searchdetails">
          <p>{video.snippet.description} </p>
        </div>
      </div>
    </>
  );
}

export default Searchcard;
