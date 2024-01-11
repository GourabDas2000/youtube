import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import './singlechannel.css';
import { usercontext } from '../../../App';
import Side from '../Side';
function Singlevideo() {

  const { id } = useParams()
  const { menu, updatemenu } = useContext(usercontext)
  const [videodetails, setvideodetails] = useState()
  const [commentdetails, setcommentdetails] = useState()
  const [relatedvideo, setrealtedvideo] = useState()
  const videourl = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
  const commenturl = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;
  const relatedvideourl = `https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedTovideoId=${id}&type=video&maxResults=50`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7dd85ed0dbmshfdec0367bb9c2c2p18ccc2jsnb464db0e4dc3',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  useEffect(() => {
    try {
      console.log('single')
      //fetch(videourl,options).then(res => res.json()).then((videos) => { setvideodetails(videos.items) })
      //fetch(commenturl,options).then(res => res.json()).then((videos)=> { setcommentdetails(videos.items) })
      //fetch(relatedvideourl,options).then(res => res.json()).then((videos)=> { setrealtedvideo(videos.items) })
    } catch {
      console.log('error')
    }
  }, [id])
  return (
    <>
      {console.log('v', videodetails)}
      {console.log('c', commentdetails)}
      {console.log('r', relatedvideo)}
      {console.log(menu)}
      {
        (menu) ? <div className='controlside' ><Side /></div> : <div className='controlback'></div>
      }
      <div className='videopagedivider'>

        <div className="leftsidevideopage">

          <div className="videodetails">

            <div className="videocomp">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls />
            </div>

            <div className="videotitle">
              <p>title</p>
            </div>

            <div className="channelperation">

              <div className="channlelogo">

                <div className="channlelogo">
                  <img src="" alt="" />
                </div>
                <div className="channelname">
                  <h1>Name</h1>
                  <p>123 subsribers</p>
                </div>
                <div className="subscribebtn">
                  <button>Subscribe</button>
                </div>

              </div>

              <div className="channlestats">

                <div className="likdis">
                  <div className="like">

                  </div>
                  <div className="dislike">

                  </div>
                </div>

                <div className="share">
                  <span className='sharelogo'></span>
                  <p>share</p>
                </div>

                <div className="more">
                  <span className="morelogo">

                  </span>
                </div>

              </div>

            </div>

            <div className="description">

              <div className="views">
                123 views
              </div>

              <div className="date">
                1/2/23
              </div>

              <div className="details">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, aspernatur non accusantium aliquid fuga, incidunt officia repellat corrupti veritatis facilis ipsa rem? Fugiat repellat asperiores necessitatibus alias eaque obcaecati enim!</p>
              </div>

              <div className="moredescription">
                <p>more</p>
              </div>

            </div>

          </div>
          <div className="commentdetails">

            <div className="commentsnumber">
              <h1>123 Comments</h1>
            </div>

            <div className="postcomments">

              <div className="createcomment">

                <div className="commentsprofile">
                  <img src="" alt="" />
                </div>
                <div className="inputfiled">
                  <input type="text" placeholder='Add a comment....' />
                </div>

              </div>

              <div className="modifiecomment">

                <div className="cancel">
                  <span>Cancel</span>
                </div>
                <div className="comment">
                  <span>Comment</span>
                </div>

              </div>

              
            </div>

            <div className="allcomments">

            </div>

          </div>
          
        </div>
        <div className="rightsidevideopage">

          <div className="videonavber">

          </div>

          <div className="videofeed">
              <h1>videod</h1>
              <h1>videod</h1>
              <h1>videod</h1>
              <h1>videod</h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default Singlevideo