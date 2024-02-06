import React, { useState, useEffect, useContext, useMemo } from "react";
import "./search.css";
import { useParams } from "react-router-dom";
import { usercontext } from "../../../App";
import Side from "../Side";
import Smallside from "../Smallside";
import Searchcard from "./Searchcard";
import Channelcard from "./Channelcard";
import { countdate,option1,option2,option3 } from "../../Fetchapifunc";

function Search() {
  const { Searchid } = useParams();
  const { menu } = useContext(usercontext);
  const [nextpagetoken, setnextpagetoken] = useState("");
  const [videos, setvideos] = useState([]);
  const [error, seterror] = useState(false);
  const [side, setside] = useState("Sports");
  const [smallside, setsmallside] = useState("");
  const searchlink = `${process.env.REACT_APP_BASE_URL}search?q=${Searchid}&part=snippet%2Cid&regionCode=In&maxResults=25&order=rating`;
  const searchnextpage = `${process.env.REACT_APP_BASE_URL}search?q=${Searchid}&part=snippet%2Cid&regionCode=In&maxResults=25&order=date&pageToken=${nextpagetoken}`;
  const searchpage = document.querySelector('.searchpage')
  const updateside = (localside) => {
    setside(localside);
  };

  function updatesmallside(localsmallside) {
    setsmallside(localsmallside);
  }

  const fetchdata = async (
    searchlink,
    option1,
    setvideos,
    setnextpagetoken
  ) => {
    try {
      const response = await fetch(searchlink, option1);

      const data = await response.json();
      setvideos(data.items);
      setnextpagetoken(data.nextPageToken);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchnextpage = async (searchpage , searchnextpage, option1, updatedata,nextpagetoken) => {
    try{
        console.log('before')
         if ((searchpage.scrollHeight-searchpage.clientHeight) > searchpage.scrollTop-10) {
          console.log("ok");
          const response = await fetch(searchnextpage, option1);
          const data = await response.json();
          updatedata((prev) => [...prev, ...data.items]);
          nextpagetoken(data.nextPageToken);
        }
      
    }catch(error){
      console.error('Error fetching data',error)
    }
  };
  useEffect(() => {
    setvideos([])
    fetchdata(searchlink, option3, setvideos, setnextpagetoken);
  }, [Searchid]);
  // useEffect(()=>{
     
  //    searchpage && window.addEventListener('scroll',() => {
  //     console.log('ok')
  //     fetchnextpage(searchpage,searchnextpage,option1,setvideos,setnextpagetoken)
  //   });
  //    return(()=>{
  //     searchpage &&
  //       window.removeEventListener("scroll", () => {
  //          console.log("ok");

  //         fetchnextpage(
  //           searchpage,
  //           searchnextpage,
  //           option1,
  //           setvideos,
  //           videos,
  //           setnextpagetoken
  //         );
  //       });
  
  //    })
  // },[])
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
      <div className="searchpage" onMouseMove={()=>{
        // searchpage && console.log(searchpage.scrollTop)
        // searchpage && console.log(searchpage.scrollHeight - searchpage.clientHeight);
        }}>
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
    </>
  );
}

export default Search;
