import React from 'react'
import { useParams } from 'react-router-dom'

function Singlechannel() {
    const {name} = useParams()
  return (
    <div>Singlechannel : {name}</div>
  )
}

export default Singlechannel