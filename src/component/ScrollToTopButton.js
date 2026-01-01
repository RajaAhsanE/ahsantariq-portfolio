import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <i className="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    </>
  );
}

export default ScrollToTopButton;

