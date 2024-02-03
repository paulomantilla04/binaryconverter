import React from "react";

const Container = ({ text, textB ,initValue, value, onChange, children, name }) => {
  return (
    <div className="parent h-screen flex flex-col items-center justify-center transition-all duration-200">
      <h1 className="p-5 text-4xl font-extrabold text-white text-center cursor-pointer hover:scale-110 transition-all duration-300">
        CONVERTIDOR{" "}
        <span className="bg-gradient-to-r from-green-400 to-cyan-400 inline-block text-transparent bg-clip-text animate-pulse">
          {text}
        </span>
        <p>a <span className="bg-gradient-to-r from-green-400 to-cyan-400 inline-block text-transparent bg-clip-text animate-pulse">{textB}</span></p>
      </h1>
      <div className="child min-[320px]:h-60 min-[320px]:w-80 sm:h-[24rem] sm:w-[32rem] rounded-lg shadow-md bg-[#ffffff] flex flex-col items-center justify-center">
        <h1 className="font-bold font-mono lg:text-2xl min-[320px]:text-md flex flex-col items-center">
          Resultado: <span className="lg:text-xl min-[320px]:text-sm">{initValue}</span>
        </h1>
        <div className="content p-5">
          <input
            type="text"
            className="sm:h-[3rem] sm:w-[15rem] min-[320px]:h-[2rem] min-[320px]:w-[9rem] text-2xl bg-white border-2 rounded-lg border-[#3c8a62] border-opacity-50 outline-none px-2 font-mono"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="py-3">{children}</div>
        <p className="font-bold text-sm font-mono">{name}</p>
      </div>
    </div>
  );
};

export default Container;
