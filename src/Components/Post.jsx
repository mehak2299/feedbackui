import React from "react";
import{Navigate,useNavigate,Routes,Route}from 'react-router'
export default function Post() {
const status=200;
const navigate=useNavigate()
 if(status===404)
 {
    return<Navigate to='/notfound'></Navigate>
 }
 const onClick=()=>{
    console.log('Hello')
    navigate('/about')
 }
  return (
    <div>
    <h1>Post</h1>
    <button onClick={onClick}>Click</button>
    <Routes>
        <Route path='/show' element={<h1>One</h1>}>
        </Route>
    </Routes>
    </div>
  );
}
