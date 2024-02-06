import React, { useEffect, useState } from "react";
import "./Main.css";
import Mainnav from "./Mainnav";
import Videosfeed from "./Videosfeed";

function Main(props) {
  const [getdata, setgetdata] = useState("");
  const updatedata = (data) => {
    setgetdata(data);
  };
  // useEffect(() => {
  //   props.side == "Home" ? setmaincontent(true) : setmaincontent(false);
  // }, [props.side]);
  return (
    <div className="Main">
        <div>
          <Mainnav updatedata={updatedata} />
        </div>
      <div>
        <Videosfeed
          getdata={getdata}
          side={props.side}
          smallside={props.smallside}
        />{" "}
      </div>{" "}
    </div>
  );
}

export default Main;
