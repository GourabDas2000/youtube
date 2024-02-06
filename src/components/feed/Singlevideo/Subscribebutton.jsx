import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsOffIcon from "@mui/icons-material/NotificationsOff";
import "./singlevideo.css";
import ModalUnsubscribe from "./ModalUnsubscribe";

function Subscribebutton({
  newtext,
  title,
  showbutton,
  changesubscribe,
  changeunsubscribe,
  Unsubscribe,
  outersubscribe,
  changeuoutersubscribe,
}) {
  return (
    <>
      <div
        className="firstbutton"
        changeunsubscribe
        onClick={() => {
          newtext(<NotificationsActiveIcon />);
          showbutton.style.display = "none";
          changesubscribe(false);
        }}
      >
        <div className="notificationbutton">
          <NotificationsActiveIcon />
        </div>{" "}
        <div className="text">All </div>{" "}
      </div>{" "}
      <div
        className="firstbutton"
        onClick={() => {
          newtext(<NotificationsNoneIcon />);
          showbutton.style.display = "none";
          changesubscribe(false);
        }}
      >
        <div className="notificationbutton">
          <NotificationsNoneIcon />
        </div>{" "}
        <div className="text">Personalized </div>{" "}
      </div>{" "}
      <div
        className="firstbutton"
        onClick={() => {
          newtext(<NotificationsIcon />);
          showbutton.style.display = "none";
          changesubscribe(false);
        }}
      >
        <div className="notificationbutton">
          <NotificationsIcon />
        </div>{" "}
        <div className="text">None </div>{" "}
      </div>{" "}
      <div
        className="firstbutton"
        onClick={() => {
          changeunsubscribe(!Unsubscribe);
        }}
      >
        <div className="notificationbutton">
          <NotificationsOffIcon />
        </div>{" "}
        <div className="text">Unsubscribe </div>{" "}
      </div>
      <div className="modal">
        <ModalUnsubscribe
          title={title}
          outersubscribe={outersubscribe}
          changeunsubscribe={changeunsubscribe}
          changeuoutersubscribe={changeuoutersubscribe}
          changesubscribe={changesubscribe}
        />
      </div>{" "}
    </>
  );
}

export default Subscribebutton;
