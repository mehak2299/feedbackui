import React,{useContext}from 'react'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackStats() {
    const{feedback}=useContext(FeedbackContext)

    const AverageRating=()=>{
        let average=feedback.reduce((acc,curr)=>{
               return acc+curr.rating
        },0)
        if(feedback.length===0)
        {
            return 0;
        }
        else{
        let avg= average/feedback.length;
        return avg=avg.toFixed(1).replace(/[.,]0$/,'');
        }
       
    }
    return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating:  {AverageRating()}</h4>
    </div>
  )
}
