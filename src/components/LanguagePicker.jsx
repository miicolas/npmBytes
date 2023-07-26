import React, { useState } from "react";
import { languages } from "../i18n/ui";

const LanguagePicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen((prev) => {
      console.log("Previous state:", prev);
      return !prev;
    });
  };
  return (
    <div className="relative flex flex-col">
      <button
        onClick={handleButtonClick}
        className="rounded-lg text-sm px-4 py-2 flex items-center bg-npm-blue hover:bg-npm-hover-blue font-thin"
      >
        <span className="mr-1">Language</span>
        <svg
          className={`fill-current h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      {isOpen && (
        <div className="text-gray-700 bottom-10 absolute">
          <ul>
            {Object.entries(languages).map(([lang, label]) => (
              <li key={lang} className="mt-1">
                <a
                  className="rounded font-thin bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href={`/${lang}/`}
                >
                  {label}
                </a>
              </li>
          ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguagePicker;
