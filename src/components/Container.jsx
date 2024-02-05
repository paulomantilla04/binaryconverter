import React from "react";

const Container = ({ text,initValue, value, onChange, children, name}) => {


  return (
    <div className="parent h-screen flex flex-col items-center justify-center transition-all duration-200 bg-[#DCF2F1] select-none dark:bg-[#191a31]">
      <h1 className="p-5 text-4xl font-extrabold text-[#0F1035] text-center cursor-pointer hover:scale-110 transition-all duration-300 dark:text-[#DCF2F1]">
        CONVERTIDOR{" "}
        <span className="">
          {text}
        </span>
      </h1>
      <div className="child min-[320px]:h-60 min-[320px]:w-80 sm:h-[24rem] sm:w-[32rem] rounded-lg shadow-lg bg-[#7FC7D9] flex flex-col items-center justify-center transition-all duration-300 dark:bg-[#0c0d1b]">
        <h1 className="font-bold font-mono lg:text-2xl min-[320px]:text-md flex flex-col items-center transition-all duration-300 text-[#0F1035] dark:text-[#DCF2F1]">
          Resultado: <span className="lg:text-xl min-[320px]:text-sm">{initValue}</span>
        </h1>
        <div className="content p-5">
          <input
            type="text"
            className="sm:h-[3rem] sm:w-[15rem] min-[320px]:h-[2rem] min-[320px]:w-[9rem] text-2xl bg-white border-2 rounded-lg border-[#0F1035] border-opacity-50 outline-none px-2 font-mono"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="py-3">{children}</div>
        <p className="font-bold text-sm font-mono text-[#0F1035] transition-all duration-300 dark:text-[#DCF2F1]">{name}</p>
      </div>
    </div>
  );
};

export default Container;
