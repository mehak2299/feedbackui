import { createContext, useState } from "react";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item is from context", rating: 10 },
  ]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  console.log("editFeedback",editFeedback)
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
        editFeedbackFunc
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
