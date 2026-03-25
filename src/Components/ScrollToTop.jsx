import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <button
        className="fixed text-white z-50 p-3  text-xl cursor-pointer font-medium bottom-[78px] bg-black rounded-full transition-all ease-in duration-100 hover:bg-red-500  right-2"
        onClick={scrollToTop}
      >
      <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTop;
