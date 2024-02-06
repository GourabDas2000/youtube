import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import "./smallside.css";
import { useNavigate } from "react-router-dom";

function Smallside({ updatesmallside }) {
  const navigate = useNavigate()
  const handleClick = (event) => {
    const targetDiv = event.target.closest(".div");
    if (targetDiv) {
      const textContent = targetDiv.childNodes[1].textContent;
      updatesmallside(textContent);

      document.querySelectorAll(".div").forEach((div) => {
        div.classList.remove("active3");
      });

      targetDiv.classList.add("active3");
    }
  };

  return (
    <div className="smallside" onClick={handleClick}>
      <div className="divi div active3" onClick={()=>{navigate("/")}}>
        <span>
          <HomeIcon />
        </span>{" "}
        <span> Home </span>{" "}
      </div>{" "}
      <div className="divi div">
        <span>
          <AppShortcutIcon />
        </span>{" "}
        <span> Shorts </span>{" "}
      </div>{" "}
      <div className="divi div">
        <span>
          <SubscriptionsIcon />
        </span>{" "}
        <span> Subscriptions </span>{" "}
      </div>{" "}
      <div className="divi div">
        <span>
          <VideoLibraryIcon />
        </span>{" "}
        <span> You </span>{" "}
      </div>{" "}
    </div>
  );
}

export default Smallside;
