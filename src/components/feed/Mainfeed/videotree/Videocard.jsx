import React, { useEffect } from "react";
import Videodetails from "./Videodetails";
import "./videocard.css";
import { useNavigate} from "react-router-dom";
function Videocard({ videos, description }) {
  const navigate = useNavigate()
  return (
    <div className="videocard">
      {videos &&
        videos.map((video, id) => {
          return (
            <div key={video.id.videoId}>
              {video.id.videoId && <Videodetails video={video} />}
            </div>
          );
        })}
    </div>
  );
  // }
}
export default Videocard;
