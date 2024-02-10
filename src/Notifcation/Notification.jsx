import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./notification.css";

function Notification() {
  const [change, setchange] = useState(false);
  const [state, setstate] = useState(
    "There may be some wrong information due to inconsistence API update"
  );

  function showmessage() {
    setchange(!change);
    if (!change) {
      setstate();
      document.querySelector(".notification p").style.backgroundColor =
        "transparent";
    } else {
      setstate(
        "There may be some wrong information due to inconsistence API update"
      );
      document.querySelector(".notification p").style.backgroundColor = "aqua";
    }
  }
  return (
    <div className="notification">
      <p> {state} </p>{" "}
      <span onClick={showmessage}>
        {" "}
        <NotificationsIcon />
      </span>{" "}
    </div>
  );
}

export default Notification;
