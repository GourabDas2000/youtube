import React from 'react';
import './channelcard.css';
import { useNavigate } from 'react-router-dom';
function Channelcard({video}) {
    const navigate = useNavigate()
  return (
    <>
      <div className="channelthum" onClick={()=>{navigate(`channel/${video.id.channelId}`)}}>
        <div className="imagecontainer">
          <img src={`${video.snippet.thumbnails.high.url}`} alt="" />
        </div>
      </div>
      <div className="channeldesp" onClick={()=>{navigate(`channel/${video.id.channelId}`)}}>
        <div className="channletitle">
          <h1>{video.snippet.title} </h1>
          <p>@{video.snippet.title}</p>
        </div>
        <div className="channeldescription">{video.snippet.description}</div>
      </div>
    </>
  );
}

export default Channelcard