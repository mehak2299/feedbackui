import { createContext, useState,useEffect } from "react";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const[isLoading,setIsLoading]=useState(true)
  const [feedback, setFeedback] = useState([ ]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  useEffect(()=>{
    fetchFeedback()
  },[])

  //Fetch Feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }
  //Add Feedback
  const addFeedback = async(newFeedback) => {
    const response=await fetch(`/feedback`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newFeedback),

    })
    const data= await response.json()
    setFeedback([data,...feedback]);
  };
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const updateFeedback = async(data, id) => {
    console.log("FEE",feedback)
      const response=await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
      }) 
      const two=await response.json()
      console.log("TWo",two)
      const one=feedback.map((item) => (item.id === id ?two: item))
      setFeedback(one)
      setEditFeedback({ item: {}, edit: false });

    
  };

  const editFeedbackFunc = (data) => {
    setEditFeedback({ item: data, edit: true,});
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        setEditFeedback,
        updateFeedback,
        editFeedbackFunc,
        isLoading
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
