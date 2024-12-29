import React, { useEffect } from "react";
import Feedback_Item from "./Feedback_Item";
import FeedbackData from "../Data/FeedbackData";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "../shared/Spinner";
export default function Feedback_List() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if ((!isLoading && !feedback) || feedback.length <= 0) {
    return <p>No Feedback Data</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedb ack-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Feedback_Item key={item.id} item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
