import React, { useState } from 'react'

export default function Feedback_Item() {
    const[rating,setRating]=useState(7)
    const[text,setText]=useState("This is an example of feedbackItem")
    // const handleClick=()=>{
    //     setRating((prev)=>{ 
    //         return prev+1
    //     })
    // }
  return (
     <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        {/* <button onClick={handleClick}>Click</button> */}
     </div>
  )
}
