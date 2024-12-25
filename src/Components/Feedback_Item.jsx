import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from '../shared/Card'
import { FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
export default function Feedback_Item({ item,handleEdit}) {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is an example of feedbackItem")
    const{feedback,setFeedback,deleteFeedback}=useContext(FeedbackContext)


    
    return (
        <Card reverse={false}>

            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button className='edit' onClick={()=>{handleEdit(item.id)}}>
                <FaEdit color='purple'/>
            </button>
            <button className='close' onClick={()=>{deleteFeedback(item.id)}}>
                <FaTimes color='purple' />
            </button>

        </Card >

    )
}

Feedback_Item.propTypes = {
    item: PropTypes.object.isRequired,
}