import React, { useEffect, useState, useRef } from "react";
import Error from "../../Error/Error";
import Videodetails from "./videotree/Videodetails";
import "./Main.css";

import {
  fetchdata2,
  fetchagain,
  option1,
  option2,
  option3,
} from "../../Fetchapifunc";

function Videosfeed({ getdata, side, smallside }) {
  const forvideocard = useRef();
  const [videos, setvideos] = useState([]);
  const [error, seterror] = useState(false);
  const [nextpagetoken, setnextpagetoken] = useState();
  const sidelink = `${process.env.REACT_APP_BASE_URL}search?q=${side}&part=snippet%2Cid&regionCode=In&maxResults=50&order=viewCount`;
  const smalllink = `${process.env.REACT_APP_BASE_URL}search?q=${smallside}&part=snippet%2Cid&regionCode=US&maxResults=50&order=viewCount`;
  const navlink = `${process.env.REACT_APP_BASE_URL}search?q=${getdata}&part=snippet%2Cid&regionCode=US&maxResults=50&order=viewCount`;
  const nextpagelink = `${process.env.REACT_APP_BASE_URL}search?q=${getdata}&part=snippet%2Cid&regionCode=US&maxResults=50&order=rating&pageToken=${nextpagetoken}`;

  useEffect(() => {
    if (getdata !== "") {
      fetchdata2(navlink, option3, setvideos, setnextpagetoken, seterror);
    }
  }, [getdata]);

  useEffect(() => {
    if (side === "sports") {
      fetchdata2(sidelink, option3, setvideos, setnextpagetoken, seterror);
    }
  }, [side]);

  useEffect(() => {
    if (smallside === "Home") {
      fetchdata2(smalllink, option3, setvideos, setnextpagetoken, seterror);
    }
  }, [smallside]);

  function additems() {
    if (forvideocard.current) {
      if (
        forvideocard.current.clientHeight +
          forvideocard.current.scrollTop +
          1 >=
        forvideocard.current.scrollHeight
      ) {
        fetchagain(
          nextpagelink,
          option3,
          setvideos,
          setnextpagetoken,
          seterror
        );
      }
    }
  }
  useEffect(() => {
    const forvcard = forvideocard.current;
    if (forvcard) {
      forvcard.addEventListener("scroll", additems);
    }
    if (forvcard) {
      return () => {
        forvcard.removeEventListener("scroll", additems);
      };
    }
  });
  return (
    <div className="forvideocard" ref={forvideocard}>
      {" "}
      {videos &&
        videos.map((item, i) => {
          return <div key={i}> {item && <Videodetails video={item} />} </div>;
        })}{" "}
    </div>
  );
}

export default Videosfeed;
