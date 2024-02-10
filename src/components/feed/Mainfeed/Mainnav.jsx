import React, { useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './mainnav.css';
function Mainnav(props) { 
  const shiftleft = () =>{
    mainref.current.scrollLeft = mainref.current.scrollLeft - 100  ;
  }
  const shiftright = () =>{
    mainref.current.scrollLeft = mainref.current.scrollLeft + 100  ;
  }
  const cards = document.querySelectorAll('.card')
  const [arrowl , setarrowl] = useState(null)
  const [arrowr, setarrowr] = useState(<span className='arrowr' onClick={shiftright}><ArrowForwardIosIcon /></span>)
  const mainref = useRef()
  function chnageleftbutton (){
    (mainref.current.scrollLeft!=0) ?  setarrowl(<span className='arrowl' onClick={shiftleft}><ArrowBackIosIcon /></span>) : setarrowl(null) 
  }
  function chnagerightbutton (){
    (Math.round(mainref.current.clientWidth + mainref.current.scrollLeft) >= mainref.current.scrollWidth) ? setarrowr(null) : setarrowr(<span className='arrowr' onClick={shiftright}><ArrowForwardIosIcon /></span>)
  }
  function swapactive2(event){
    const targetdiv = event.target.closest('.card')
    if(targetdiv){
      const text = targetdiv.children[0].textContent
      props.updatedata(text)
    }
    document.querySelectorAll('.card').forEach((item)=>{
       item.classList.remove('active2')
    })
    targetdiv.classList.add('active2')
  }
  

  return (
    <>
      {arrowl}
      <div className='mainnav' ref={mainref} onClick={swapactive2} onScroll={()=>{chnageleftbutton();chnagerightbutton();}}>
        <div className='card active2'>
          <span>All</span>
        </div>
        <div className='card'>
          <span>India national cricket team</span>
        </div>
        <div className='card'>
          <span>Film Criticisms</span>
        </div>
        <div className='card'>
          <span>Marvel Studios</span>
        </div>
        <div className='card'>
          <span>Thrillers</span>
        </div>
        <div className='card'>
          <span>FC Barcelona</span>
        </div>
        <div className='card' >
          <span>Real Madrid CF</span>
        </div>
        <div className='card'>
          <span>Computer Science</span>
        </div>
        <div className='card'>
          <span>Music</span>
        </div>
        <div className='card'>
          <span>React</span>
        </div>
        <div className='card'>
          <span>Stock markets</span>
        </div>
        <div className='card'>
          <span>Economics </span>
        </div>
        <div className='card'>
          <span>India national Football team</span>
        </div>
        <div className='card'>
          <span>Lionel Messi</span>
        </div>
        <div className='card'>
          <span>Cristiano Ronaldo</span>
        </div>
        <div className='card'>
          <span>songs</span>
        </div>
      </div>
      {arrowr}
    </>
  )
}

export default Mainnav