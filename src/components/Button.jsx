import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      className="bg-green-600 w-[6rem] h-[2rem] rounded-md hover:scale-95 hover:bg-green-800 transition-all duration-300 font-bold text-sm text-green-100 hover:text-green-950"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
