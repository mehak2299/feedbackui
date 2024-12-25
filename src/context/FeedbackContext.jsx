import { createContext, useState } from "react";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item is from context", rating: 10 },
  ]);
  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
  };
  const deleteFeedback = (id) => {
    const data = feedback.filter((item) => {
      if (item.id !== id) {
        return id;
      }
    });
    if(window.confirm("Are you sure you want to delete")){
    setFeedback(data);
    }
  };
  const editFeedback=(item)=>{
    
  }

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback, addFeedback ,deleteFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
