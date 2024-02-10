import React, { useState, useEffect, useContext, useRef} from "react";
import "./search.css";
import { useParams } from "react-router-dom";
import { usercontext } from "../../../App";
import Side from "../Side";
import Smallside from "../Smallside";
import Searchcard from "./Searchcard";
import Channelcard from "./Channelcard";
import { option1,option2,option3, fetchdata2,fetchagain } from "../../Fetchapifunc";

function Search() {
  const chaildclass = useRef()
  const { Searchid } = useParams();
  const { menu } = useContext(usercontext);
  const [nextpagetoken, setnextpagetoken] = useState("");
  const [videos, setvideos] = useState([]);
  const [error, seterror] = useState(false);
  const [side, setside] = useState("Sports");
  const [smallside, setsmallside] = useState("");
  const searchlink = `${process.env.REACT_APP_BASE_URL}search?q=${Searchid}&part=snippet%2Cid&regionCode=In&maxResults=25&order=viewCount`;
  const searchnextpage = `${process.env.REACT_APP_BASE_URL}search?q=${Searchid}&part=snippet%2Cid&regionCode=In&maxResults=25&order=date&pageToken=${nextpagetoken}`;

  const updateside = (localside) => {
    setside(localside);
  };

  function updatesmallside(localsmallside) {
    setsmallside(localsmallside);
  }
  useEffect(() => {
    fetchdata2(searchlink, option3, setvideos, setnextpagetoken,seterror);
  }, [Searchid]);
  const additems = () => {
    if(chaildclass.current){
      if (
        chaildclass.current.scrollTop + chaildclass.current.clientHeight + 1 >=
        chaildclass.current.scrollHeight
      ) {
         fetchagain(
           searchnextpage,
           option2,
           setvideos,
           setnextpagetoken,
           seterror
         );
      }
    }
  }
  useEffect(()=>{
     const child = chaildclass.current
     if(child){
        child.addEventListener('scroll',additems)
     }
     if(child){
       return () => {
         child.removeEventListener("scroll", additems);
       }
     }
  })
  return (
    <>
      {menu ? (
        <span>
          <Side updateside={updateside} />
        </span>
      ) : (
        <span>
          <Smallside updatesmallside={updatesmallside} />{" "}
        </span>
      )}
      <div className="searchpage">
        <div className="childpage" ref={chaildclass}>
          {videos &&
            videos.map((item, i) => {
              return (
                <div key={i} className="searchcard">
                  {item.id.channelId ? (
                    <Channelcard video={item} />
                  ) : (
                    <Searchcard video={item} />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Search;
