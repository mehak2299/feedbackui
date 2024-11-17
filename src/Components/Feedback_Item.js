import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import { FaTimes } from 'react-icons/fa'

export default function Feedback_Item({ item,handleDelete}) {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState("This is an example of feedbackItem")
    return (
        <Card reverse={false}>

            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button className='close' onClick={()=>{handleDelete(item.id)}}>
                <FaTimes color='purple' />
            </button>

        </Card >

    )
}

Feedback_Item.propTypes = {
    item: PropTypes.object.isRequired,
}