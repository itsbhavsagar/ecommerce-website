import React, { useState } from "react";

const Reviews = ({ obj, showIndex, setShowIndex, idx }) => {
  const { reviewerName, comment, rating } = obj;
  

  return (
    <>
      <div className="flex justify-between bg-red-300 text-xl rounded px-5 w-4/5 m-2">
        <p> {reviewerName}</p>
        <p onClick={() => setShowIndex(showIndex == idx ? null: idx)}>🔼</p>
      </div>
      {showIndex == idx ? (
        <div className="flex justify-between bg-gray-300 text-sm rounded m-2 px-5 w-4/5">
          <p>{comment}</p>
          <p>{rating}⭐️⭐️⭐️</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Reviews;
