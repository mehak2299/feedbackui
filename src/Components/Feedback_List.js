import React from 'react'
import Feedback_Item from './Feedback_Item'
import PropTypes from 'prop-types'
import FeedbackData from '../Data/FeedbackData'
export default function Feedback_List({ FeedbackData,handleDelete }) {
   
    if (!FeedbackData || FeedbackData.length <= 0) {
        return <p>No Feedback Data</p>
    }

    return (
        <div className='feedback-list'>
            {FeedbackData.map((item) => {
                return (
                    <Feedback_Item
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete} />
                )
            })}
        </div>
    )
}

Feedback_List.propTypes = {
    FeedbackData: PropTypes.array.isRequired
}