import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

import HomeIcon from '@mui/icons-material/Home';
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HexagonIcon from '@mui/icons-material/Hexagon';
import LyricsIcon from '@mui/icons-material/Lyrics';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CopyrightIcon from '@mui/icons-material/Copyright';

import './side.css';
import { useNavigate } from 'react-router-dom';


function Side(props) {
  const navigate = useNavigate()

  const [open, setopen] = useState(false);
  const [more, setmore] = useState('Show More')
  const [icon1, seticon1] = useState(<KeyboardArrowDownOutlinedIcon />)


  const [open2, setopen2] = useState(false);
  const [more2, setmore2] = useState('Show More')
  const [icon2, seticon2] = useState(<KeyboardArrowDownOutlinedIcon />)

  useEffect(() => {
    if (!open) {
      document.querySelectorAll('.element')[2].classList.add('playlist')
      setmore('Show More')
      seticon1(<KeyboardArrowDownOutlinedIcon />)

    }
    else {
      document.querySelectorAll('.element')[2].classList.remove('playlist')
      setmore('Show Less')
      seticon1(<KeyboardArrowUpOutlinedIcon />)

    }

  }, [open])

  useEffect(() => {
    if (!open2) {
      document.querySelectorAll('.element')[4].classList.add('playlist')
      setmore2('Show More')
      seticon2(<KeyboardArrowDownOutlinedIcon />)

    }
    else {
      document.querySelectorAll('.element')[4].classList.remove('playlist')
      setmore2('Show Less')
      seticon2(<KeyboardArrowUpOutlinedIcon />)

    }
  }, [open2])
  var text = 'Home';
  function swapactive(event) {
    const targetdiv = event.target.closest('.ele')
      if (targetdiv) {
        text = targetdiv.children[1].textContent
        // if(text == 'shorts'){
        // navigate('/shorts')
        // props.updateside('shorts')
      }
     
      text && text === "Home"
        ? props.updateside("sports")
        : props.updateside(text);
      document.querySelectorAll('.ele').forEach((item) => {
        item.classList.remove('active')
      })
      targetdiv.classList.add('active')
  }



  return (
    <div className="side">
      <section className="element" onClick={swapactive}>
        <div
          className="ele active"
          onClick={() => {
            navigate("/");
          }}
        >
          <span>
            <HomeIcon />
          </span>
          <span className="sendtovideo">Home</span>
        </div>
        <div className="ele">
          <span>
            <SwitchAccessShortcutAddIcon />
          </span>
          <span className="sendtovideo">Shorts</span>
        </div>
        <div className="ele">
          <span>
            <SubscriptionsIcon />
          </span>
          <span className="sendtovideo">SubscriptionsIcon</span>
        </div>
      </section>
      <section className="element" onClick={swapactive}>
        <div style={{ cursor: "text" }}>
          <h1>You</h1>
          <span>
            <ChevronRightIcon />
          </span>
        </div>
        <div className="ele">
          <span>
            <TrendingUpIcon />
          </span>
          <span className="sendtovideo">Your Channel</span>
        </div>
        <div className="ele">
          <span>
            <HistoryIcon />
          </span>
          <span className="sendtovideo">History</span>
        </div>
        <div className="ele">
          <span>
            <SlideshowIcon />
          </span>
          <span className="sendtovideo">Your videos</span>
        </div>
        <div className="ele">
          <span>
            <WatchLaterIcon />
          </span>
          <span className="sendtovideo">Watch Later</span>
        </div>
      </section>

      <section className=" element playlist" onClick={swapactive}>
        <div className="ele">
          <span>
            <ThumbUpOutlinedIcon />
          </span>
          <span className="sendtovideo">Liked Videos</span>
        </div>
        <div className="ele">
          <span>
            <PlaylistPlayOutlinedIcon />
          </span>
          <span className="sendtovideo">Playlist1</span>
        </div>
        <div className="ele">
          <span>
            <PlaylistPlayOutlinedIcon />
          </span>
          <span className="sendtovideo">Playlist2</span>
        </div>
        <div className="ele">
          <span>
            <PlaylistPlayOutlinedIcon />
          </span>
          <span className="sendtovideo">Playlist3</span>
        </div>
      </section>
      <div
        className="button1"
        onClick={() => {
          setopen(!open);
        }}
      >
        <span>{icon1}</span>
        <span>{more}</span>
      </div>

      <section className="element" onClick={swapactive}>
        <div style={{ cursor: "text" }}>
          <h1>Subcription</h1>
        </div>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
      </section>

      <section className="element playlist" onClick={swapactive}>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
        <div className="ele">
          <span>
            <img src="" alt="" />
          </span>
          <span className="sendtovideo">abc</span>
        </div>
      </section>
      <div
        className="button1"
        onClick={() => {
          setopen2(!open2);
        }}
      >
        <span>{icon2}</span>
        <span>{more2}</span>
      </div>

      <section className="element" onClick={swapactive}>
        <div style={{ cursor: "text" }}>
          <h1>Explore</h1>
        </div>
        <div className="ele">
          <span>
            <WhatshotIcon />
          </span>
          <span className="sendtovideo">Trending</span>
        </div>
        <div className="ele">
          <span>
            <LocalMallIcon />
          </span>
          <span className="sendtovideo">Shopping</span>
        </div>
        <div className="ele">
          <span>
            <AudiotrackIcon />
          </span>
          <span className="sendtovideo">Music</span>
        </div>
        <div className="ele">
          <span>
            <LocalMoviesIcon />
          </span>
          <span className="sendtovideo">Flims</span>
        </div>
        <div className="ele">
          <span>
            <LiveTvIcon />
          </span>
          <span className="sendtovideo">Live</span>
        </div>
        <div className="ele">
          <span>
            <SportsEsportsIcon />
          </span>
          <span className="sendtovideo">Gaming</span>
        </div>
        <div className="ele">
          <span>
            <NewspaperIcon />
          </span>
          <span className="sendtovideo">News</span>
        </div>
        <div className="ele">
          <span>
            <EmojiEventsIcon />
          </span>
          <span className="sendtovideo">Sport</span>
        </div>
        <div className="ele">
          <span>
            <LightbulbIcon />
          </span>
          <span className="sendtovideo">Learning</span>
        </div>
        <div className="ele">
          <span>
            <StarHalfIcon />
          </span>
          <span className="sendtovideo">Fashion & beauty</span>
        </div>
        <div className="ele">
          <span>
            <PodcastsIcon />
          </span>
          <span className="sendtovideo">Podcasts</span>
        </div>
      </section>

      <section className="element" onClick={swapactive}>
        <div style={{ cursor: "text" }}>
          <h1 className="smallthis">More from YouTube</h1>
        </div>
        <div className="ele">
          <span className="icon1">
            <YouTubeIcon />
          </span>
          <span className="sendtovideo">YouTube Premium</span>
        </div>
        <div className="ele">
          <span className="icon1">
            <HexagonIcon />
          </span>
          <span className="sendtovideo">YouTube Studio</span>
        </div>
        <div className="ele">
          <span className="icon1">
            <LyricsIcon />
          </span>
          <span className="sendtovideo">YouTube Music</span>
        </div>
        <div className="ele">
          <span className="icon1">
            <ChildCareIcon />
          </span>
          <span className="sendtovideo">YouTube Kids</span>
        </div>
      </section>

      <section className="element" onClick={swapactive}>
        <div className="ele">
          <span>
            <SettingsIcon />
          </span>
          <span className="sendtovideo">Settings</span>
        </div>
        <div className="ele">
          <span>
            <FlagIcon />
          </span>
          <span className="sendtovideo">Report history</span>
        </div>
        <div className="ele">
          <span>
            <HelpIcon />
          </span>
          <span className="sendtovideo">Help</span>
        </div>
        <div className="ele">
          <span>
            <FeedbackIcon />
          </span>
          <span className="sendtovideo">Send feedback</span>
        </div>
      </section>

      <section className="copyright">
        <p>About Press Copyright Contact us Creator Advertise Developers</p>

        <p>Terms Privacy Policy & Safely How YouTube works Test new features</p>

        <div>
          <span>
            <CopyrightIcon />
          </span>
          <p>2023 @GourabDas</p>
        </div>
      </section>
    </div>
  );

}

export default Side