import React, { useEffect } from 'react'
import Feedback_Item from './Feedback_Item'
import FeedbackData from '../Data/FeedbackData'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import{motion,AnimatePresence} from 'framer-motion'
export default function Feedback_List() {
   const{feedback}=useContext(FeedbackContext)
    if (!feedback || feedback.length <= 0) {
        return <p>No Feedback Data</p>
    }
   console.log('feedback',feedback)
    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => {
                return (
                    <motion.div key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}>
                       <Feedback_Item
                        key={item.id}
                        item={item}                     
                        /> 
                    </motion.div>
                    
                )
            })}
            </AnimatePresence>
        </div>
    )
}

