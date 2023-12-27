import React from "react";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

function ScrollToUpButton() {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {isVisible && (
        <button
          className="fixed animate-bounce bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 text-2xl"
          onClick={() => scrollToTop()}
        >
          <Icon icon="tabler:arrow-big-up-filled" />
        </button>
      )}
    </div>
  );
}

export default ScrollToUpButton;
