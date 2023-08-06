import React, { useState, useEffect } from 'react';
import { BiUpArrow } from "react-icons/bi";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-md ${isVisible ? 'visible' : 'invisible'
                }`}
            onClick={scrollToTop}
        >
            <BiUpArrow></BiUpArrow>
        </button>
    );
};

export default ScrollToTopButton;
