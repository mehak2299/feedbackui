import React from 'react'
import PropTypes from 'prop-types'
export default function FeedbackStats({FeedbackData}) {
    const AverageRating=()=>{
        let average=FeedbackData.reduce((acc,curr)=>{
               return acc+curr.rating
        },0)
        if(FeedbackData.length===0)
        {
            return 0;
        }
        else{
        let avg= average/FeedbackData.length;
        return avg=avg.toFixed(1).replace(/[.,]0$/,'');
        }
       
    }
    return (
    <div className='feedback-stats'>
        <h4>{FeedbackData.length} Reviews</h4>
        <h4>Average Rating:  {AverageRating()}</h4>
    </div>
  )
}
FeedbackStats.propTypes = {
    FeedbackData: PropTypes.array.isRequired,
}