import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const handleLike = () => {
    setLiked(!liked);
    setCount(liked ? count - 1 : count + 1);
  };
  return (
    <div className="flex flex-row">
      <div
        onClick={handleLike}
        className={`rounded-full bg-npm-blue p-2.5 hover:bg-npm-hover-blue ease-in-out duration-200 cursor-pointer ${
          liked ? "bg-npm-hover-blue " : "bg-npm-blue"
        }`}
      >
        <svg
          className="w-4 h-4 text-white " 
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill={liked ? 'currentColor' : 'none'}
          viewBox="0 0 21 19"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
          />
        </svg>
      </div>
      <div className="flex items-center">
         {liked && <span className="ml-2">{count}</span>}
      </div>
     
    </div>
  );
};

export default LikeButton;