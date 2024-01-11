import React, { useContext, useEffect, useState } from 'react';
import Main from './Mainfeed/Main';
import Side from './Side';

import './Feed.css';
import { usercontext } from '../../App';
import Smallside from './Smallside';


function Feed() {
  const {menu , updatemenu , scroll ,updatescroll} = useContext(usercontext)
  updatescroll(true)
  const [side ,setside] = useState('')
  const [smallside ,setsmallside] = useState('') 
  const updateside = (localside) =>{
    setside(localside)
  }
  function updatesmallside (localsmallside) {
    setsmallside(localsmallside)
  
  }
  useEffect(()=>{
    updateside('Home')
  },[])


  return (
    <>
      <div className='feed_divider'>
        <div>
          {menu? <Side updateside = {updateside} /> : <Smallside updatesmallside= {updatesmallside}/>}
        </div>
        <div>
          <Main side = {side} smallside={smallside}/>
        </div>
      </div>
    </>
  )
}

export default Feed