import React, { useEffect, useState, useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
export default function RatingSelect({ handleRating }) {
  const [selected, setSelected] = useState(10);
  const { editFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit===true) {
      setSelected(editFeedback.item.rating);
    }
  }, [editFeedback]);
  
  const handleChange = (e) => {
    console.log("handleChange");
    setSelected(+e.currentTarget.value);
    handleRating(+e.currentTarget.value);
  };
  useEffect(() => {
    handleRating(10);
  }, []);
  console.log("selected", selected);
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          id="num1"
          value="1"
          name="rating"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          id="num2"
          value="2"
          name="rating"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          id="num3"
          name="rating"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num3">3</label>
      </li>

      <li>
        <input
          type="radio"
          id="num4"
          name="rating"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          id="num5"
          name="rating"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          id="num6"
          name="rating"
          value="6"
          onChange={handleChange}
          checked={selected === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          id="num7"
          name="rating"
          value="7"
          onChange={handleChange}
          checked={selected === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          id="num8"
          name="rating"
          value="8"
          onChange={handleChange}
          checked={selected === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          id="num9"
          name="rating"
          value="9"
          onChange={handleChange}
          checked={selected === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          id="num10"
          name="rating"
          value="10"
          onChange={handleChange}
          checked={selected === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
}
