import React, { useState } from 'react';

const Accordeon = ({ title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
      <div className="lg:max-w-3xl bg-gray-300">
        <hr />
        <button onClick={handleButtonClick} className="px-2 py-4 w-full">
          <div className="flex items-center justify-between">
            <p className="font-bold text-xl">{title}</p>
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
        <hr />
        {isOpen && <p className="px-4 py-2 font-medium">{text}</p>}
      </div>
  );
};

export default Accordeon;
