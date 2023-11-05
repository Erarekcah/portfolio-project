import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const BtnUp = () => {
  const toUp = () => {
    // переместим в начало страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={toUp} className="btnUp flex">
      <div className="container">
        <div className="gradientBg">
          <div className="gradientBgContent"></div>
        </div>
        <button>
          <IoIosArrowUp className="icon" />
        </button>
      </div>
    </div>
  );
};

export default BtnUp;
