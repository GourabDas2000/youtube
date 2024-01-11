import React, { useEffect ,useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { usercontext } from '../../App';
import './smallside.css';

function Smallside({updatesmallside}) {
  const {menu , updatemenu , scroll ,updatescroll} = useContext(usercontext)
  const handleClick = (event) => {
    const targetDiv = event.target.closest('.div');
    if (targetDiv) {
      const textContent = targetDiv.childNodes[1].textContent;
      updatesmallside(textContent);

      document.querySelectorAll('.div').forEach((div) => {
        div.classList.remove('active3');
      });

      targetDiv.classList.add('active3');
    }
  }
  
  return (
    <div className='smallside' onClick={handleClick}>
       <div className='divi div active3'>
           <span>
             <HomeIcon/>
           </span>
           <span>Home</span>
       </div>
       <div className='divi div'>
           <span>
             <AppShortcutIcon/>
           </span>
           <span>Shorts</span>
       </div>
       <div className='divi div'>
           <span>
             <SubscriptionsIcon/>
           </span>
           <span>Subscriptions</span>
       </div>
       <div className='divi div'>
           <span>
             <VideoLibraryIcon/>
           </span>
           <span>You</span>
       </div>
    </div>
  )
}

export default Smallside