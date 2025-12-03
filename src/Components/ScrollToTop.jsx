import React from "react";

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
        className="fixed text-white z-50 px-3  text-xl cursor-pointer font-medium bottom-[78px] bg-black rounded-2xl hover:bg-red-500  right-2"
        onClick={scrollToTop}
      >
        Back to top
      </button>
    </div>
  );
}

export default ScrollToTop;
