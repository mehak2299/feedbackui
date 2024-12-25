import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Feedback_Item from './Components/Feedback_Item';
import FeedbackData from './Data/FeedbackData';
import Feedback_List from './Components/Feedback_List';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid'
import About from './Components/About';
import Card from './shared/Card'
import AboutIcon from './shared/AboutIcon';
import Post from './Components/Post';
function App() {
  const [Feedback, setFeedback] = useState(FeedbackData)
  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      const one = Feedback.filter((item) => {
        if (item.id != id) {
          return item
        }
      })
      console.log(one)
      setFeedback(one)
    }

  }
  const handleEdit=(id)=>{
    // Feedback.filter((item)=>{
    //   if(item.id===id)
    //   {

    //   }
    // })
    console.log("edit")
}
  const handleData = (value) => {
    value.id = uuidv4()
    console.log("App", value)
    const one = [...Feedback, value]
    setFeedback(one)
  }

  return (
    <div>
      <BrowserRouter>
        <Header title={'Feedback UI'} />
        <Routes>
          <Route path='/' element={
            <>
              <div className='container'>
                <FeedbackForm handleData={handleData} />
                <FeedbackStats FeedbackData={Feedback} />
                <Feedback_List FeedbackData={Feedback} handleDelete={handleDelete} handleEdit={handleEdit} />
              </div>
            </>
          }></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/post/*' element={<Post />}></Route>

        </Routes>
        <AboutIcon />
      </BrowserRouter>

    </div>
  );
}

export default App;
