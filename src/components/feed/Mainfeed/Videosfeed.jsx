import React, { useEffect, useMemo, useState, useContext } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import Error from '../../Error/Error';
import Videocard from './videotree/Videocard';
import { usercontext } from '../../../App';




function Videosfeed({ getdata, side, smallside }) {
  const [videos, setvideos] = useState([])
  const [error, seterror] = useState(false)
  const [description, setdescription] = useState('')
  const { searched } = useContext(usercontext)
  const { name } = useParams()
  // useMemo(()=>{
  //   console.log(getdata)
  //   try{
  //     console.log('getdata')
  //     fetch(`https://youtube-v31.p.rapidapi.com/search?q=${getdata}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,{
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '7dd85ed0dbmshfdec0367bb9c2c2p18ccc2jsnb464db0e4dc3',
  // 	      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //       },
  //     })
  //       .then(res=> res.json())
  //       .then((videos)=>{setvideos(videos.items)})
  //     setdescription(getdata)
  //     seterror(false)
  //   }catch{
  //     seterror(true)
  //   }
  // },[getdata])

  // useEffect(()=>{
  //   try{
  //     console.log('side')
  //     fetch(`https://youtube-v31.p.rapidapi.com/search?q=${side}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,{
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '7dd85ed0dbmshfdec0367bb9c2c2p18ccc2jsnb464db0e4dc3',
  // 	      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //       },
  //     })
  //       .then(res=> res.json())
  //       .then((videos)=>{setvideos(videos.items)})
  //     setdescription(side)
  //     seterror(false)
  //   }catch{
  //     seterror(true)
  //   }

  // },[side])

  // useEffect(()=>{
  //   try{
  //     console.log('smallside')
  //     fetch(`https://youtube-v31.p.rapidapi.com/search?q=${smallside}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`,{
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': '7dd85ed0dbmshfdec0367bb9c2c2p18ccc2jsnb464db0e4dc3',
  // 	      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  //       },
  //     })
  //       .then(res=> res.json())
  //       .then((videos)=>{setvideos(videos.items)})
  //     setdescription(smallside)
  //     seterror(false)
  //   }catch{
  //     seterror(true)
  //   }

  // },[smallside])
  useMemo(() => {
    console.log(searched)
    try {
      fetch(`https://youtube-v31.p.rapidapi.com/search?q=${searched}&part=snippet%2Cid&regionCode=In&maxResults=50&order=date`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '7dd85ed0dbmshfdec0367bb9c2c2p18ccc2jsnb464db0e4dc3',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        },
      })
        .then(res => res.json())
        .then((videos) => { setvideos(videos.items) })
      seterror(false)
      setdescription(searched)
//      name = searched
    } catch {
      seterror(true)
    }
  }, [searched])

  return (
    <div>
      {
        (error) ? <div><Error /></div> :
          (
                <Videocard videos={videos} description={description} />


          )
      }
    </div>
  )
}

export default Videosfeed