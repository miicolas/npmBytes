import { useState, useEffect } from "react";

const SocialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
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

  const slides = [
    {
      id: 1,
      image: "https://lh3.googleusercontent.com/drive-viewer/AITFw-yMJf11LO41zRqNx0Hp3MKtIR9uRgV32djlOjd_BWx90NRWmUC2hWtjZyUESCuhuisvWHgcnPASkXFGN7SbSaw0MIhqNw=s1600",
      alt: "Instagram",
    },
    {
      id: 2,
      image: "https://lh3.googleusercontent.com/drive-viewer/AITFw-y8acwMTMLfHVs7v80cS4_vf9Rku99o3xvenUXi-K9wfumbDPRInOOE111wUzJmFrLiYeyHN54tq-5_Qe_t34sJLH4a4Q=s1600",
      alt: "Twitter",
    },
  ];

  return (
    <div>
      <div
        className="relative border-white/10 bg-white/10 border-[14px] rounded-[3rem] drop-shadow-2xl"
      >
        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gray-800">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
            >
              <img src={slide.image} alt={slide.alt} className="w-full h-full rounded-[2rem]" />
            </div>
          ))}
        </div>
        {/* <div className="absolute inset-y-0 left-0 flex items-center justify-center w-12">
          <button
            onClick={prevSlide}
            className="text-white hover:text-gray-400"
            aria-label="Previous Slide"
          >
            &lt;
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-center w-12">
          <button
            onClick={nextSlide}
            className="text-white hover:text-gray-400"
            aria-label="Next Slide"
          >
            &gt;
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SocialCard;
