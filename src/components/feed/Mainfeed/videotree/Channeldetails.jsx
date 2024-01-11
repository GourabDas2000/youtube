import React from 'react'
import './Channeldetails.css';

function Channeldetails({video}) {
  //console.log(video)
  return (
    <div className='channeldetails'>
      <div className="channelthum">
        <img src={`${video.snippet.thumbnails.high.url}`} alt="" />
      </div>
      <div className="channletitle">
        <h1>{video.snippet.title} </h1>
        <p>@{video.snippet.title}</p>
        {(video.snippet.liveBroadcastContent!='none')?
           <span className='dot'></span> : <span></span>
        }
      </div>
      <div className="channeldescription">
         {video.snippet.description}
      </div>
      <div className="channlebutton">
        <h2>Subscribe</h2>
      </div>
    </div>
  )
}

export default Channeldetails