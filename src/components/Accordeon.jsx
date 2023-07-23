import React, { useState } from 'react';

const Accordeon = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev); // Corrected the curly braces and added missing parenthesis
  };

  return (
    <div className="card">
      <button onClick={handleButtonClick} className="">
        <div className="flex flex-row items-center justify-between">
          <p className="">{title}</p>
          <svg
            className={`fill-current h-4 w-4 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </button>
      {isOpen && <p>{text}</p>} {/* Show the text only when isOpen is true */}
    </div>
  );
};

export default Accordeon;

