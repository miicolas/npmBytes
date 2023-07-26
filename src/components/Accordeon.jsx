import React, {useState} from 'react';

const Accordeon = ({title, text, url, btntext}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleButtonClick = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className="max-w-full lg:max-w-3xl">
            <button onClick={handleButtonClick} className="px-2 py-4 w-full border-y-2">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl">{title}</p>
                    <svg
                        className={`fill-current h-4 w-4 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </button>
            <div className={`${isOpen ? 'animate-fade-in' : 'animate-fade-out'}`}>
                {isOpen && (
                    <div className="px-4 py-2">
                        <div className="font-medium">
                            {text}
                        </div>
                        <div className='mt-4'>
                            <a className="rounded-lg text-sm px-4 py-2 bg-npm-blue hover:bg-npm-hover-blue focus:ring-4 focus:outline-none font-medium ease-in-out duration-300" href={url}>{btntext}</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Accordeon;
