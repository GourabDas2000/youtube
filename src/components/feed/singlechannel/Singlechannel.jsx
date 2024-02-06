import React, { useEffect, useState, useContext, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usercontext } from "../../../App";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Side from "../Side";
import Subscribebutton from "../Singlevideo/Subscribebutton";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import "./singlechannel.css";
import Horizontalvideocard from "./Horizontalvideocard";
import { countdate,countsub,fetchdata,option1,option2,option3 } from "../../Fetchapifunc";

function Singlechannel() {
  const { menu } = useContext(usercontext);
  const { name } = useParams();
  const [error, seterror] = useState(false);
  const modal = document.querySelector(".modal");
  const allvideos = document.querySelector(".allvideos");
  const allvideos2 = document.querySelector(".allvideos2");
  const showbutton = document.querySelector(".showbutton");
  const [channeldetails, setchanneldetails] = useState();
  const channelvideo2o = document.querySelector(".channelvideo");
  const channelhome = document.querySelector(".channelhome");
  const nashome = document.querySelector(".nashome");
  const nasvideos = document.querySelector(".nasvideos");
  const [chanelvideoitmes, setchanelvideoitmes] = useState();
  const [foryou, setforyou] = useState();
  const [navstatus, setnavstatus] = useState(true);
  const [channelvideo, setchannelvideo] = useState();
  const [outersubscribe, setoutersubscribe] = useState(false);
  const [subscribe, setsubscribe] = useState(false);
  const [text, settext] = useState(<NotificationsActiveIcon />);
  const [Unsubscribe, setunsubscribe] = useState(false);
  const [side, setside] = useState("Home");
  const channelurl = `${process.env.REACT_APP_BASE_URL}channels?part=snippet%2Cstatistics&id=${name}`;
  const channelvideourl = `${process.env.REACT_APP_BASE_URL}search?channelId=${name}&part=snippet%2Cid&order=date&maxResults=50`;
  const channelupporcursorvideourl = `${process.env.REACT_APP_BASE_URL}search?channelId=${name}&part=snippet%2Cid&order=date&maxResults=12`;

  const updateside = (localside) => {
    setside(localside);
  };

  function changeuoutersubscribe(localdata) {
    setoutersubscribe(localdata);
  }

  function changesubscribe(localdata) {
    setsubscribe(localdata);
  }

  function newtext(localtext) {
    settext(localtext);
  }

  function changeunsubscribe(localdata) {
    setunsubscribe(localdata);
  }
  
  useEffect(() => {
    fetchdata(channelurl, option1, setchanneldetails, seterror);
    fetchdata(channelvideourl, option1, setchanelvideoitmes, seterror);
    fetchdata(channelupporcursorvideourl,option1,setforyou,seterror);
  }, [name]);
  
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
    if (showbutton) {
      if (subscribe) {
        showbutton.style.display = "grid";
      } else {
        showbutton.style.display = "none";
      }
    }
  }, [subscribe]);
  useEffect(() => {
    if (nashome && nasvideos) {
      if (navstatus) {
        nashome.classList.add("activeber");
        nasvideos.classList.remove("activeber");
        channelhome.classList.remove("offchannel");
        channelvideo2o.classList.add("offchannel");
      } else {
        nashome.classList.remove("activeber");
        nasvideos.classList.add("activeber");
        channelhome.classList.add("offchannel");
        channelvideo2o.classList.remove("offchannel");
      }
    }
  }, [navstatus]);
  function scrollhorizon(direction) {
    const width = 200;
    if (allvideos) {
      if (direction == "right") {
        allvideos.scrollLeft += width;
      } else if (direction == "left") {
        allvideos.scrollLeft -= width;
      } else if (direction == "right2") {
        allvideos2.scrollLeft += width;
      } else {
        allvideos2.scrollLeft -= width;
      }
      console.log("scrollleft", allvideos.scrollLeft);
      console.log("scrollwidth", allvideos.scrollWidth);
    }
  }
  return (
    <>
      {menu ? (
        <div className="controlside">
          <Side updateside={updateside} />
        </div>
      ) : (
        <span></span>
      )}
      <div className="wrappholechannel">
        <div className="coverphoto">
          <img
            src={
              channeldetails &&
              channeldetails[0].brandingSettings.image.bannerExternalUrl
            }
            alt=""
          />
        </div>{" "}
        <div className="channelprofile">
          <div className="channelphoto">
            <img
              src={
                channeldetails &&
                channeldetails[0].snippet.thumbnails.medium.url
              }
              alt=""
            />
          </div>{" "}
          <div className="channeldetails2">
            <div className="chhanelname2">
              {" "}
              {channeldetails &&
                channeldetails[0].brandingSettings.channel.title}{" "}
            </div>{" "}
            <div className="chhanlstats">
              <div className="channellink">
                {" "}
                {channeldetails && channeldetails[0].snippet.customUrl}{" "}
              </div>{" "}
              <div className="channelsubscriber">
                {" "}
                {channeldetails &&
                  countsub(channeldetails[0].statistics.subscriberCount)}{" "}
                subscriber{" "}
              </div>{" "}
              <div className="channelvideos">
                {" "}
                {channeldetails && channeldetails[0].statistics.videoCount}
                videos{" "}
              </div>{" "}
            </div>{" "}
            <div className="channeldesc">
              <span>
                {" "}
                {(channeldetails &&
                  channeldetails[0].snippet.localized.discription) ||
                  (channeldetails &&
                    channeldetails[0].brandingSettings.channel.title)}{" "}
              </span>{" "}
              <span>
                <KeyboardArrowRightIcon />{" "}
              </span>{" "}
            </div>{" "}
            <div className="subscribebtn">
              {" "}
              {outersubscribe ? (
                <span
                  onClick={() => {
                    setsubscribe(!subscribe);
                    console.log("subscribe", subscribe);
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
                    console.log("subscribe", subscribe);
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
                    channeldetails &&
                    channeldetails[0].brandingSettings.channel.title
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
        </div>{" "}
        <div className="nestednavber">
          <span
            className="nashome activeber"
            onClick={() => {
              setnavstatus(true);
            }}
          >
            Home{" "}
          </span>{" "}
          <span
            className="nasvideos"
            onClick={() => {
              setnavstatus(false);
            }}
          >
            Videos{" "}
          </span>{" "}
          {}{" "}
        </div>{" "}
        <div className="channelhome">
          <div className="popular">
            <p> Popular </p>{" "}
            <div className="videosection">
              <div
                className="moveleft"
                onClick={() => {
                  scrollhorizon("left");
                }}
              >
                <span>
                  <KeyboardArrowLeftIcon />
                </span>{" "}
              </div>{" "}
              <div className="allvideos">
                {" "}
                {foryou &&
                  foryou.map((items, i) => {
                    return (
                      <span key={i}>
                        <Horizontalvideocard video={items} />{" "}
                      </span>
                    );
                  })}{" "}
              </div>{" "}
              <div
                className="moveright"
                onClick={() => {
                  scrollhorizon("right");
                }}
              >
                <span>
                  <KeyboardArrowRightIcon />
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="normal">
            <p> Play All </p>{" "}
            <div className="videosection2">
              <div
                className="moveleft2"
                onClick={() => {
                  scrollhorizon("left2");
                }}
              >
                {" "}
                <span>
                  <KeyboardArrowLeftIcon />
                </span>{" "}
              </div>{" "}
              <div className="allvideos2">
                {" "}
                {chanelvideoitmes &&
                  chanelvideoitmes.map((items, i) => {
                    return (
                      <span k>
                        <Horizontalvideocard video={items} />{" "}
                      </span>
                    );
                  })}{" "}
              </div>{" "}
              <div
                className="moveright2"
                onClick={() => {
                  scrollhorizon("right2");
                }}
              >
                {" "}
                <span>
                  <KeyboardArrowRightIcon />
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="channelvideo offchannel">
          {" "}
          {chanelvideoitmes &&
            chanelvideoitmes.map((items, i) => {
              return (
                <span Key={i}>
                  <Horizontalvideocard video={items} />
                </span>
              );
            })}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Singlechannel;
