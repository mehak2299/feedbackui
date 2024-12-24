import React from 'react'
import Feedback_Item from './Feedback_Item'
import PropTypes from 'prop-types'
import FeedbackData from '../Data/FeedbackData'
import{motion,AnimatePresence} from 'framer-motion'
export default function Feedback_List({ FeedbackData,handleDelete,handleEdit }) {
   
    if (!FeedbackData || FeedbackData.length <= 0) {
        return <p>No Feedback Data</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {FeedbackData.map((item) => {
                return (
                    <motion.div key={item.id}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    exit={{opacity:0}}>
                       <Feedback_Item
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete} 
                        handleEdit={handleEdit}/> 
                    </motion.div>
                    
                )
            })}
            </AnimatePresence>
        </div>
    )
}

Feedback_List.propTypes = {
    FeedbackData: PropTypes.array.isRequired
}