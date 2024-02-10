import React, { useContext, useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./singlevideo.css";
import { usercontext } from "../../../App";
import Side from "../Side";
import Commentinfo from "./Commentinfo";
import Verticalvideocard from "./Verticalvideocard";
import Subscribebutton from "./Subscribebutton";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  countdate,
  countsub,
  fetchagain,
  fetchdata2,
  option1,
  option2,
  option3,
} from "../../Fetchapifunc";

function Singlevideo() {
  const vfeed = useRef();
  const leftside = useRef();
  const like = useRef();
  const dislike = useRef();
  const navigate = useNavigate();
  const { id, channel } = useParams();
  const { menu, updatemenu } = useContext(usercontext);
  const [text, settext] = useState(<NotificationsActiveIcon />);
  const [nextpagetoken, setnextpagetoken] = useState();
  const [nextrelatedpagetoken , setnextrelatedpagetoken] = useState()
  const [error, seterror] = useState(false);
  const [videodetails, setvideodetails] = useState();
  const [commentdetails, setcommentdetails] = useState();
  const [relatedvideo, setrealtedvideo] = useState();
  const [channeldetails, setchanneldetails] = useState();
  const [subscribe, setsubscribe] = useState(false);
  const [smoredescription, setsmoredescription] = useState(false);
  const [outersubscribe, setoutersubscribe] = useState(false);
  const [Unsubscribe, setunsubscribe] = useState(false);
  const [size, setsize] = useState(true);
  const [side, setside] = useState("Home");
  const showbutton = document.querySelector(".showbutton");
  const videourl = `${process.env.REACT_APP_BASE_URL}videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
  const commenturl = `${process.env.REACT_APP_BASE_URL}commentThreads?part=snippet&videoId=${id}&maxResults=100`;
  const relatedvideourl = `${process.env.REACT_APP_BASE_URL}search?part=snippet&relatedTovideoId=${id}&type=video&maxResults=15`;
  const channelurl = `${process.env.REACT_APP_BASE_URL}channels?part=snippet%2Cstatistics&id=${channel}`;
  const nextpagelink = `${process.env.REACT_APP_BASE_URL}commentThreads?part=snippet&videoId=${id}&maxResults=100&pageToken=${nextpagetoken}`;
  const nextpagerelagedlink = `${process.env.REACT_APP_BASE_URL}search?part=snippet&relatedTovideoId=${id}&type=video&maxResults=15&pageToken=${nextrelatedpagetoken}`;
  function newtext(localtext) {
    settext(localtext);
  }
  const updateside = (localside) => {
    setside(localside);
  };
  function changesmoredescription(localdata) {
    setsmoredescription(localdata);
  }

  function changesubscribe(localdata) {
    setsubscribe(localdata);
  }

  function changeuoutersubscribe(localdata) {
    setoutersubscribe(localdata);
  }

  function changeunsubscribe(localdata) {
    setunsubscribe(localdata);
  }
  const modal = document.querySelector(".modal");
  useEffect(() => {
    if (modal) {
      if (Unsubscribe) {
        modal.style.display = "block";
      } else {
        modal.style.display = "none";
      }
    }
  }, [Unsubscribe]);

  useEffect(() => {
    fetchdata2(videourl, option3, setvideodetails, setnextpagetoken, seterror);
    fetchdata2(
      commenturl,
      option3,
      setcommentdetails,
      setnextpagetoken,
      seterror
    );
    fetchdata2(
      relatedvideourl,
      option3,
      setrealtedvideo,
      setnextrelatedpagetoken,
      seterror
    );
    fetchdata2(
      channelurl,
      option3,
      setchanneldetails,
      setnextpagetoken,
      seterror
    );
  }, [id]);
  useEffect(() => {
    if (showbutton) {
      if (subscribe) {
        showbutton.style.display = "grid";
      } else {
        showbutton.style.display = "none";
      }
    }
  }, [subscribe]);

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
  useEffect(() => {
    function handlequery() {
      if (window.innerWidth <= 1000) {
        setsize(false);
      } else {
        setsize(true);
      }
    }
    window.addEventListener("resize", handlequery);
    handlequery();
    return () => {
      window.removeEventListener("resize", handlequery);
    };
  }, []);
  const additems = () =>{
    if (leftside.current) {
      if (
        leftside.current.clientHeight + leftside.current.scrollTop + 1 >=
        leftside.current.scrollHeight
      ) {
        fetchagain(
          nextpagelink,
          option3,
          setcommentdetails,
          setnextpagetoken,
          seterror
        );
      }
    }
  }
  const addvideos = () =>{
    if(vfeed.current){
      if (
        vfeed.current.clientHeight + vfeed.current.scrollTop + 1 >=
        vfeed.current.scrollHeight
      ) {
        fetchagain(
          nextpagerelagedlink,
          option3,
          setrealtedvideo,
          setnextrelatedpagetoken,
          seterror
        );
      }
    }
  }
  useEffect(()=>{
    const lfside = leftside.current
    const vfd = vfeed.current  
    if (size) {
        if (vfd) {
          vfd.addEventListener("scroll", addvideos);
        }
        if(lfside){
          lfside.addEventListener("scroll", additems);
        }
        if (vfd) {
          return(()=>{
            vfd.removeEventListener("scroll", addvideos);
          })
        }
        if(lfside ){
          return(()=>{
            lfside.removeEventListener('scroll',additems)
          })
        }
      }    
    else {
      console.log("not ok");
    }
  },[size])
  return (
    <>
      {menu ? (
        <div className="controlside">
          <Side updateside={updateside} />
        </div>
      ) : (
        <></>
      )}

      {size ? (
        <div className="videopagedivider">
          <div className="leftsidevideopage" ref={leftside}>
            <div className="videodetails">
              <div className="videocomp">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  width="92%"
                  height="100%"
                  controls
                />
              </div>{" "}
              <div className="videotitle">
                {" "}
                {videodetails && videodetails[0].snippet.title}{" "}
              </div>{" "}
              <div className="channelperation">
                <div className="channlesomthing">
                  <div
                    className="channlelogo"
                    onClick={() => {
                      videodetails &&
                        navigate(
                          `/channel/${videodetails[0].snippet.channelId}`
                        );
                    }}
                  >
                    <img
                      src={
                        channeldetails &&
                        channeldetails[0].snippet.thumbnails.high.url
                      }
                      alt=""
                    />
                  </div>{" "}
                  <div className="channelname">
                    <span
                      onClick={() => {
                        videodetails &&
                          navigate(
                            `/channel/${videodetails[0].snippet.channelId}`
                          );
                      }}
                    >
                      {" "}
                      {videodetails &&
                        videodetails[0].snippet.channelTitle}{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      {channeldetails &&
                        countsub(
                          channeldetails[0].statistics.subscriberCount
                        )}{" "}
                      Subscriber{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="subscribebtn">
                    {" "}
                    {outersubscribe ? (
                      <span
                        onClick={() => {
                          setsubscribe(!subscribe);
                        }}
                      >
                        <div className="notificationbutton"> {text} </div>{" "}
                        <div className="text"> Subscribed </div>{" "}
                        <div className="downarrow">
                          <ExpandMoreIcon />
                        </div>{" "}
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          setoutersubscribe(true);
                        }}
                      >
                        <div className="text"> Subscribe </div>{" "}
                      </span>
                    )}{" "}
                    <div className="showbutton">
                      <Subscribebutton
                        text={text}
                        newtext={newtext}
                        title={
                          videodetails && videodetails[0].snippet.channelTitle
                        }
                        showbutton={showbutton}
                        changesubscribe={changesubscribe}
                        changeunsubscribe={changeunsubscribe}
                        Unsubscribe={Unsubscribe}
                        outersubscribe={outersubscribe}
                        changeuoutersubscribe={changeuoutersubscribe}
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="channlestats">
                  <div className="likdis">
                    <div
                      className="like"
                      ref={like}
                      onClick={() => {
                        switchlike();
                      }}
                    >
                      <ThumbUpOffAltIcon />
                      <span>
                        {" "}
                        {videodetails &&
                          countsub(videodetails[0].statistics.likeCount)}{" "}
                      </span>{" "}
                    </div>{" "}
                    <div
                      className="dislike"
                      ref={dislike}
                      onClick={() => {
                        switchdislike();
                      }}
                    >
                      <ThumbDownOffAltIcon />
                    </div>{" "}
                  </div>{" "}
                  <div className="share">
                    <div className="sharelogo">
                      <span>
                        <ShareIcon />
                      </span>{" "}
                      <p> share </p>
                    </div>{" "}
                  </div>{" "}
                  <div className="more">
                    <span className="morelogo">
                      <MoreHorizIcon />
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="description">
                <div className="viwedate">
                  <div className="views">
                    {" "}
                    {videodetails &&
                      videodetails[0].statistics.viewCount.toLocaleString()}
                    views{" "}
                  </div>{" "}
                  <div className="date">
                    {" "}
                    {videodetails &&
                      countdate(videodetails[0].snippet.publishedAt)}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="details">
                  <p>
                    {" "}
                    {videodetails &&
                      videodetails[0].snippet.localized.title}{" "}
                  </p>{" "}
                  <p className="clickmore"> ...more </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>
            <div className="commentdetails">
              <div className="commentsnumber">
                <h1>
                  {" "}
                  {videodetails &&
                    videodetails[0].statistics.commentCount.toLocaleString()}{" "}
                  Comments{" "}
                </h1>{" "}
              </div>{" "}
              <div className="postcomments">
                <div className="createcomment">
                  <div className="commentsprofile">
                    <img src="" alt="" />
                  </div>{" "}
                  <div className="inputfiled">
                    <input type="text" placeholder="Add a comment...." />
                  </div>{" "}
                </div>{" "}
                <div className="modifiecomment">
                  <div className="cancel">
                    <span> Cancel </span>{" "}
                  </div>{" "}
                  <div className="comment">
                    <span> Comment </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="allcomments">
                {" "}
                {commentdetails &&
                  commentdetails.map((items, i) => {
                    return (
                      <div key={i}>
                        <Commentinfo comment={items} />{" "}
                      </div>
                    );
                  })}{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="rightsidevideopage">
            <div className="videonavber"> Related Videos </div>{" "}
            <div className="videofeed" ref={vfeed}>
              {" "}
              {relatedvideo &&
                relatedvideo.map((items, i) => {
                  return (
                    <div
                      onClick={() =>
                        navigate(
                          `/video/${items.id.videoId}/channel/${items.snippet.channelId}`
                        )
                      }
                      key={i}
                    >
                      <Verticalvideocard video={items} />{" "}
                    </div>
                  );
                })}{" "}
            </div>{" "}
          </div>{" "}
        </div>
      ) : (
        <div className="videopagedivider2">
          <div className="leftsidevideopage2">
            <div className="videodetails">
              <div className="videocomp">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  width="95%"
                  height="100%"
                  controls
                  className="controlplayer"
                />
              </div>{" "}
              <div className="videotitle">
                {" "}
                {videodetails && videodetails[0].snippet.title}{" "}
              </div>{" "}
              <div className="channelperation">
                <div className="channlesomthing">
                  <div
                    className="channlelogo"
                    onClick={() => {
                      videodetails &&
                        navigate(
                          `/channel/${videodetails[0].snippet.channelId}`
                        );
                    }}
                  >
                    <img
                      src={
                        channeldetails &&
                        channeldetails[0].snippet.thumbnails.high.url
                      }
                      alt=""
                    />
                  </div>{" "}
                  <div className="channelname">
                    <span
                      onClick={() => {
                        videodetails &&
                          navigate(
                            `/channel/${videodetails[0].snippet.channelId}`
                          );
                      }}
                    >
                      {" "}
                      {videodetails &&
                        videodetails[0].snippet.channelTitle}{" "}
                    </span>{" "}
                    <span>
                      {" "}
                      {channeldetails &&
                        countsub(
                          channeldetails[0].statistics.subscriberCount
                        )}{" "}
                      subscribers{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="subscribebtn">
                    {" "}
                    {outersubscribe ? (
                      <span
                        onClick={() => {
                          setsubscribe(!subscribe);
                        }}
                      >
                        <div className="notificationbutton"> {text} </div>{" "}
                        <div className="text"> Subscribed </div>{" "}
                        <div className="downarrow">
                          <ExpandMoreIcon />
                        </div>{" "}
                      </span>
                    ) : (
                      <span
                        onClick={() => {
                          setoutersubscribe(true);
                        }}
                      >
                        <div className="text"> Subscribe </div>{" "}
                      </span>
                    )}{" "}
                    <div className="showbutton">
                      <Subscribebutton
                        text={text}
                        newtext={newtext}
                        title={
                          videodetails && videodetails[0].snippet.channelTitle
                        }
                        showbutton={showbutton}
                        changesubscribe={changesubscribe}
                        changeunsubscribe={changeunsubscribe}
                        Unsubscribe={Unsubscribe}
                        outersubscribe={outersubscribe}
                        changeuoutersubscribe={changeuoutersubscribe}
                      />{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="channlestats">
                  <div className="likdis">
                    <div
                      className="like"
                      ref={like}
                      onClick={() => {
                        switchlike();
                      }}
                    >
                      <ThumbUpOffAltIcon />
                      <span>
                        {" "}
                        {videodetails &&
                          countsub(videodetails[0].statistics.likeCount)}{" "}
                      </span>{" "}
                    </div>{" "}
                    <div
                      className="dislike"
                      ref={dislike}
                      onClick={() => {
                        switchdislike();
                      }}
                    >
                      <ThumbDownOffAltIcon />
                    </div>{" "}
                  </div>{" "}
                  <div className="share">
                    <span className="sharelogo">
                      <ShareIcon />
                    </span>{" "}
                    <p> share </p>{" "}
                  </div>{" "}
                  <div className="more">
                    <span className="morelogo">
                      <MoreHorizIcon />
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="description">
                <div className="viwedate">
                  <div className="views">
                    {" "}
                    {videodetails &&
                      videodetails[0].statistics.viewCount.toLocaleString()}
                    views{" "}
                  </div>{" "}
                  <div className="date">
                    {" "}
                    {videodetails &&
                      countdate(videodetails[0].snippet.publishedAt)}{" "}
                  </div>{" "}
                </div>{" "}
                <div className="details">
                  <p>
                    {" "}
                    {videodetails &&
                      videodetails[0].snippet.localized.title}{" "}
                  </p>{" "}
                  <p className="clickmore"> ...more </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
          <div className="rightsidevideopage2">
            <div className="videonavber"> Related Videos </div>{" "}
            <div className="videofeed2">
              {" "}
              {relatedvideo &&
                relatedvideo.map((items, i) => {
                  return (
                    <span
                      onClick={() =>
                        navigate(
                          `/video/${items.id.videoId}/channel/${items.snippet.channelId}`
                        )
                      }
                      key={i}
                    >
                      <Verticalvideocard video={items} />{" "}
                    </span>
                  );
                })}{" "}
            </div>{" "}
            <div className="showmorebutton">
              <p>Show more</p>
            </div>
          </div>
          <div className="commentdetails">
            <div className="commentsnumber">
              <h1>
                {" "}
                {videodetails &&
                  videodetails[0].statistics.commentCount.toLocaleString()}{" "}
                Comments{" "}
              </h1>{" "}
            </div>{" "}
            <div className="postcomments">
              <div className="createcomment">
                <div className="commentsprofile">
                  <img src="" alt="" />
                </div>{" "}
                <div className="inputfiled">
                  <input type="text" placeholder="Add a comment...." />
                </div>{" "}
              </div>{" "}
              <div className="modifiecomment">
                <div className="cancel">
                  <span> Cancel </span>{" "}
                </div>{" "}
                <div className="comment">
                  <span> Comment </span>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="allcomments">
              {" "}
              {commentdetails &&
                commentdetails.map((items, i) => {
                  return (
                    <div key={i}>
                      <Commentinfo comment={items} />{" "}
                    </div>
                  );
                })}{" "}
            </div>{" "}
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default Singlevideo;
