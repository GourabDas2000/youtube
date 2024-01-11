import React, { useEffect, useMemo, useState } from 'react';
import './Main.css';
import Mainnav from './Mainnav';
import Videosfeed from './Videosfeed';


function Main(props) {
  const [getdata , setgetdata] = useState('')
  const [maincontent ,setmaincontent] = useState(true)
  const updatedata = (data) =>{
        setgetdata(data)
  }
  useMemo(()=>{
    (props.side == 'Home')? setmaincontent(true):setmaincontent(false)
  },[props.side])
  return (
    <div className='Main'>
      {(maincontent)?<div><Mainnav updatedata={updatedata} /></div>:<></>}
      <div>
        <Videosfeed getdata ={getdata} side={props.side} smallside={props.smallside} />
      </div>
    </div>
  )
}

export default Main