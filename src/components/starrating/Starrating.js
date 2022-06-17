import React, { useState } from 'react'
import {Rating} from  'react-simple-star-rating'
function Starrating() {
const [rating,setRating]=useState(0)
const handleRating = (rate) => {
    setRating(rate)
    console.log(rate)
  };
     
  return (
    <div className='App'>
    <Rating onClick={handleRating} iconCount={5} size={25} allowHalfIcon={false} showTooltip   />
  </div>
)
}

export default Starrating