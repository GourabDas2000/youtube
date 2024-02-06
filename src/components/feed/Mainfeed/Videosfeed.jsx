import React, { useEffect, useState } from "react";
import Error from "../../Error/Error";
import Videocard from "./videotree/Videocard";
import { fetchdata,option1,option2,option3 } from "../../Fetchapifunc";
function Videosfeed({ getdata, side, smallside }) {
  const [videos, setvideos] = useState([]);
  const [error, seterror] = useState(false);
  const sidelink = `${process.env.REACT_APP_BASE_URL}search?q=${side}&part=snippet%2Cid&regionCode=In&maxResults=50&order=rating`;
  const smalllink = `${process.env.REACT_APP_BASE_URL}search?q=${smallside}&part=snippet%2Cid&regionCode=US&maxResults=50&order=rating`;
  const navlink = `${process.env.REACT_APP_BASE_URL}search?q=${getdata}&part=snippet%2Cid&regionCode=US&maxResults=50&order=rating`;
  
  useEffect(() => {
    if (getdata !== "") {
      fetchdata(navlink, option3, setvideos, seterror);
    }
  }, [getdata]);

  useEffect(() => {
    if (side === "sports") {
      fetchdata(sidelink, option3, setvideos, seterror);
    }
  }, [side]);

  useEffect(() => {
    if (smallside === "Home") {
      fetchdata(smalllink, option3, setvideos, seterror);
    }
  }, [smallside]);

  return (
    <>
      {error ? (
        <div>
          {" "}
          <Error />{" "}
        </div>
      ) : (
        <Videocard videos={videos} />
      )}{" "}
    </>
  );
}

export default Videosfeed;
