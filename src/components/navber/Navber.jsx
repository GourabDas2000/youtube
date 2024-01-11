import React, { useContext, useEffect, useMemo, useState } from 'react';
import Logo from '../Images/ylogo.svg'
import SearchIcon from '@mui/icons-material/Search';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navber.css';
import { usercontext } from '../../App';

function Navber() {
  const{menu , updatemenu , updatesearched} = useContext(usercontext)
  const [ state , setstate] = useState(true)
  const[search , setsearch] = useState('')
  const updatestate = () =>{
    setstate((prev)=>!prev)
    updatemenu(!menu)
  }
  const updatesearch = (e) =>{
    if(e.key === 'Enter'){
      updatesearched(search)
    }
  }
  return (
    <div className='navber'>
        <div className="div1" onClick={updatestate}>
          <span><MenuOutlinedIcon className='MenuOutlinedIcon'/></span>
        </div>
        <div className="div2">
            <img src={Logo} alt=''/>
        </div>
        <div className="div3">
            <input type='text'onKeyUp={updatesearch} onChange={(e)=>{setsearch(e.target.value)}} placeholder='Search' value={search}></input>
            <span  onClick={() => {
              setsearch('')}}>
            {
              (search === '') ? (<span className='toggleclose CloseIcon'><CloseIcon/></span>) : (<span className='CloseIcon'><CloseIcon/></span>)
            }
            </span>            
            <span onClick={() => {updatesearched(search)}}><SearchIcon className='SearchIcon'/></span>
        </div>
        <div className="div4">
            <NotificationsIcon/>
        </div>
        <div className="div5">
            <img src='' alt=''></img>
        </div>
    </div>
  )
}

export default Navber