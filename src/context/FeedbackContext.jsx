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
  const fetchFeedback=async()=>{
    const response=await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data=await response.json()
    console.log(data)
    setFeedback(data)
    setIsLoading(false)
  }
  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
  };
  const deleteFeedback = (id) => {
    const data = feedback.filter((item) => {
      if (item.id !== id) {
        return id;
      }
    });
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(data);
    }
  };

  const updateFeedback = (data, id) => {
    console.log("Edit", data);
    
      const one=feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
      console.log("Edit 1",one)
      setFeedback(one)
      setEditFeedback({ item: {}, edit: false });

    
  };
  const editFeedbackFunc = (data) => {
    setEditFeedback({ item: data, edit: true });
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
