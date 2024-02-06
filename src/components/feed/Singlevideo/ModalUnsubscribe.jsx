import React from "react";
import "./singlevideo.css";

function ModalUnsubscribe({
  title,
  changeunsubscribe,
  changeuoutersubscribe,
  changesubscribe,
}) {
  return (
    <div className="Modalunsubscribe">
      <div className="text">
        <p> Do you want to Unsubscribe {title} </p>{" "}
      </div>{" "}
      <div className="buttons">
        <span
          className="unsubscribe"
          onClick={() => {
            changeuoutersubscribe(false);
            changeunsubscribe(false);
            changesubscribe(false)
          }}
        >
          Unsubscribe{" "}
        </span>{" "}
        <span
          className="cancel2"
          onClick={() => {
            changeunsubscribe(false);
            changesubscribe(false);
          }}
        >
          cancel{" "}
        </span>{" "}
      </div>{" "}
    </div>
  );
}

export default ModalUnsubscribe;
