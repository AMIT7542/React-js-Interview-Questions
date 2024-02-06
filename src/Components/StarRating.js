import React, { useState } from "react";

const StarRating = () => {
  let limit = 10;
  const [rating, setRating] = useState(0);
  const handleRating = (index) => {
    setRating(index + 1);
  };
  return (
    <>
      {[...Array(limit)].map((item, index) => (
        <span onClick={() => handleRating(index)}>
          {index < rating ? "❤️" : "🤍"}
        </span>
      ))}
      <div>
        <span>Likes()</span>
        <br />
        <span>Unlikes</span>
      </div>
    </>
  );
};

export default StarRating;
