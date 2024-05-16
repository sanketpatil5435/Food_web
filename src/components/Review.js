import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="review">
      <div className="customer">
        <img src={review.img} alt="Customer" />
        <p>{review.text}</p>
        <h3>Rating: {review.rating}</h3>
      </div>
    </div>
  );
};

export default Review;
