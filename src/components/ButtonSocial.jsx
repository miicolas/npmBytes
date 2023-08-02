import React, { useState, useEffect } from "react";

const ButtonSocial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === buttons.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  const buttons = [
    {
      id: 1,
      name: "Instagram",
      link: "https://www.instagram.com/npmbytes/",
    },
    {
      id: 2,
      name: "Twitter",
      link: "https://twitter.com/npmbytes",
    },
  ];

  const currentButton = buttons[currentIndex];

  return (
    <div>
      <div className="relative">
        <div
          className={`absolute top-0 left-0 opacity-100 transition-opacity duration-500`}
        >
          <a href={currentButton.link}>
            <div className="rounded-lg text-sm px-4 py-2 bg-npm-blue hover:bg-npm-hover-blue focus:ring-4 focus:outline-none font-medium ease-in-out duration-300 w-fit mt-4">
              <div className="flex items-center justify-center gap-x-2">
                <p>{currentButton.name}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ButtonSocial;
