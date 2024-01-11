import './App.css';
import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from './components/navber/Navber';
import Feed from './components/feed/Feed';
import Notification from './Notifcation/Notification';
import Side from './components/feed/Side';
import Videodetails from './components/feed/Mainfeed/videotree/Videodetails';
import Shorts from './components/feed/Shorts/Shorts';
import Videosfeed from './components/feed/Mainfeed/Videosfeed';
import Singlevideo from './components/feed/Singlevideo/Singlevideo';
import Singlechannel from './components/feed/singlechannel/Singlechannel';

export const usercontext = createContext();

function App() {
  const [scroll , setscroll] = useState(false)
  const[menu , setmenu] = useState(true)
  const[searched , setsearched]  = useState('')
  function updatemenu (localmenu){
    setmenu(localmenu)
  }
  function updatescroll (localscroll){
    setscroll(localscroll)
  }
  function updatesearched(localsearched){
    setsearched(localsearched)
  }
  return (
    <usercontext.Provider value={{menu , updatemenu ,scroll ,updatescroll , searched , updatesearched}}>
      <BrowserRouter>
        <Navber />
        <Notification/>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/video/:id' element={<Singlevideo/>} />
          <Route path='/Shorts' element={<Shorts/>}/>
          <Route path='/channel/:name' element={<Singlechannel/>}/>
        </Routes>
      </BrowserRouter>
    </usercontext.Provider>
  );
}

export default App;
