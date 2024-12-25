import React, { useState } from 'react'
import Card from '../shared/Card'
import RatingSelect from './RatingSelect'
import Button from './Button'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { v4 as uuidv4 } from 'uuid';

export default function FeedbackForm({handleData}) {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const[rating,setRating]=useState()
    const{feedback,setFeedback,addFeedback}=useContext(FeedbackContext)
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length < 10) {
            setBtnDisabled(true)
            setMessage("Text must be at least 10 characters")
        }
        else {
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }
    const handleRating=(rating)=>{
         console.log("FeedbackForm",rating)
         setRating(rating)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>=10&&rating)
        {  const id=uuidv4();
            const newFeedback={
                text,
                rating,
                id
            }
            console.log(newFeedback)
            addFeedback(newFeedback)
            setText(' ')

        }
       
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>
                    How would you rate your service with us?
                </h2>
                <RatingSelect handleRating={handleRating}/>
                <div className="input-group">
                    <input type='text' placeholder='write a review' onChange={handleTextChange} value={text}></input>
                    <Button type='submit' version='secondary' isDisabled={btnDisabled} >Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}
