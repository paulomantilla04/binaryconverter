import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button
      className="bg-[#365486] w-[6rem] h-[2rem] rounded-md hover:scale-95 hover:bg-[#273c61] transition-all duration-300 font-bold text-sm text-[#DCF2F1] hover:text-[#7FC7D9]"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
