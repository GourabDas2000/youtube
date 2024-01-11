import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './Videodetails.css';

function Videodetails( { video :{id,snippet}} ) {
   const navigate = useNavigate()
   function handleclick(){
      navigate(`/video/${id.videoId}`);
   }
  return (
    <div className='Videodetails' onClick={handleclick} >
           {(snippet.liveBrodcastContent)?
           (
            <div className="videoupper live">
               <img src={snippet.thumbnails.high.url} alt="" />
            </div>
           ):
           (
            <div className="videoupper">
               <img src={snippet.thumbnails.high.url} alt="" />
            </div>
           )}
         <div className="videolower">
            <div className="channel">
                <img src="" alt="" />
            </div>
            <div className="caption">
                <h1> {snippet.title} </h1>
                <p> {snippet.channelTitle} </p>
            </div>
         </div>
    </div>
  )
}

export default Videodetails