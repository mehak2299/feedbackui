import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import React, { useState } from 'react'

import Feedback_Item from './Components/Feedback_Item';
import FeedbackData from './Data/FeedbackData';
import Feedback_List from './Components/Feedback_List';
function App() {
  const [Feedback,setFeedback]=useState(FeedbackData)
  const handleDelete = (id) => {
    if(window.confirm("Are you sure want to delete?"))
    {
    const one=Feedback.filter((item)=>{
        if(item.id!=id)
        {
          return item
        }
    })
    console.log(one)
    setFeedback(one)
  }
  
}
  return (
  <div>
    <Header title={'Feedback UI'}/>
    <div className='container'>
      <h1>My app</h1>
      <Feedback_List FeedbackData={Feedback} handleDelete={handleDelete}/>
    </div>
  </div>
  );
}

export default App;
 