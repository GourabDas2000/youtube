import React, { useContext, useEffect, useState } from "react";
import Main from "./Mainfeed/Main";
import Side from "./Side";
import Smallside from "./Smallside";
import "./Feed.css";
import { usercontext } from "../../App";

function Feed() {
  const { menu } = useContext(usercontext);
  const [side, setside] = useState("sports");
  const [smallside, setsmallside] = useState("");
  const [size, setsize] = useState(true);
  const mediaquery = window.matchMedia("(max-width: 1213px)");
  const updateside = (localside) => {
    setside(localside);
  };

  function updatesmallside(localsmallside) {
    setsmallside(localsmallside);
  }
  const feeddivider = document.querySelector(".commonfeed");

  useEffect(() => {
    function handlesize() {
      if (window.innerWidth <= 1213) {
        setsize(false);
      } else {
        setsize(true);
      }
    }
    window.addEventListener("resize", handlesize);
    handlesize();
    return () => {
      window.removeEventListener("resize", handlesize);
    };
  }, []);
  return (
    <>
      {!size ? (
        <>
          {menu ? (
            <span className="controlside">
              <Side updateside={updateside} />{" "}
            </span>
          ) : (
            <span> </span>
          )}{" "}
          <div className="commonfeed">
            <Main side={side} smallside={smallside} />{" "}
          </div>{" "}
        </>
      ) : (
        <>
          {menu ? (
            <span className="controlside">
              <Side updateside={updateside} />{" "}
            </span>
          ) : (
            <span>
              <Smallside updatesmallside={updatesmallside} />{" "}
            </span>
          )}{" "}
          <div className="commonfeed">
            <Main
              side={side}
              smallside={smallside}
              updatesmallside={updatesmallside}
            />{" "}
          </div>{" "}
        </>
      )}{" "}
    </>
  );
}

export default Feed;
