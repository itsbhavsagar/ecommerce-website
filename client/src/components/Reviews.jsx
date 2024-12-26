import React from 'react';
import PropTypes from 'prop-types';

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="review mb-4 p-4 border rounded">
            <h3 className="text-xl font-semibold">{review.reviewerName}</h3>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;
