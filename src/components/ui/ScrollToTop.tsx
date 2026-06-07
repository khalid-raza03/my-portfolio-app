import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp, FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down past 300px
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the window to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className='backdrop-blur-xl'
                    style={{
                        position: 'fixed',
                        bottom: '40px',
                        right: '40px',
                        height: '50px',
                        display :'flex',
                        justifyContent :'center',
                        alignItems :'center',
                        width: '50px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff80',
                        color: '#000',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '24px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                        zIndex: '1000',
                    }}
                    aria-label="Scroll to top"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};


export default ScrollToTop;
