import React, { useState } from "react";
import "./Main.css";
import Mainnav from "./Mainnav";
import Videosfeed from "./Videosfeed";

function Main(props) {
  const [getdata, setgetdata] = useState("");
  const updatedata = (data) => {
    setgetdata(data);
  };
 
  return (
      <>
        <div className="navbermain">
          <Mainnav updatedata={updatedata} />
        </div>
        <>
          <Videosfeed getdata={getdata} side={props.side} smallside={props.smallside}/>{" "}
        </>
      </>
 
  );
}

export default Main;
