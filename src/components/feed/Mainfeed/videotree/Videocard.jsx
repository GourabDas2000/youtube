import React,{useEffect} from 'react'
import Videodetails from './Videodetails'
import './videocard.css';
import Channeldetails from './Channeldetails';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
function Videocard({ videos, description }) {
  // const navigate = useNavigate()
  // console.log( description)
  //   if(description == 'Shorts'){
  //         navigate('/Shorts')
  //         console.log(1)
  //   }
    // else{
      return(
        <div className='videocard'>
        {
          videos && videos.map((video, id) => {
            return (
              <div key={video.id.videoId || video.id.channelId}>
                {video.id.videoId && (<Videodetails video={video} />)}
                {video.id.channelId && (<Channeldetails video={video} />)}
              </div>
            )
          })
        }
      </div>
      )
    // }
}
export default Videocard