// // Code MovieReviews Here
import React from 'react';

// Should be a stateless functional component
const MovieReviews = ({ reviews }) => (
  // Should have a top-level component with class "review-list"
  // Should render all the reviews
  <div className="review-list">
    {reviews.map((review) => {
      return (
        <div className="review">
          <h3>
            <a href={review.link.url}>{review.headline}</a>
          </h3>
          <h5>By: {review.byline}</h5>
          <p>{review.summary_short}</p>
          <br />
        </div>
      );
    })}
  </div>
);

export default MovieReviews;