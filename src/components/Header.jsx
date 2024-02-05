import React from 'react'
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber0 } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = ({icon, onClick}) => {
  return (
    <header className="h-16 flex flex-col justify-center border-white border-b-white sticky z-10 top-0 bg-[#7FC7D9] select-none dark:bg-[#0c0d1b]">
        <div className="mx-0 max-w-full px-4 md:px-6">
            <nav className="flex items-center justify-between flex-wrap gap-5 text-[#0F1035]">
                <div className="text-lg flex items-center font-black text-[#0F1035] dark:text-[#DCF2F1]">
                    SYSTEM CONVERTER
                </div>
                <div className="flex flex-row items-center gap-5">
                    <Link to="/" className='inline-flex font-bold text-[#0F1035] hover:scale-90 transition-all duration-300 dark:text-[#DCF2F1]'>
                        <span className='sm:mr-2 text-2xl'><TbHexagonNumber2/></span>
                        <span className="hidden sm:block">BinDec</span>
                    </Link>

                    <Link to="/decbin" className='inline-flex font-bold text-[#0F1035] hover:scale-90 transition-all duration-300 dark:text-[#DCF2F1]'>
                        <span className='sm:mr-2 text-2xl'><TbHexagonNumber0/></span>
                        <span className="hidden sm:block">DecBin</span>
                    </Link>
                    <span><button onClick={onClick} className='bg-[#0f1035] text-white rounded-full text-lg w-7 h-7 flex items-center justify-center hover:scale-90 transition-all duration-400 dark:bg-[#DCF2F1] dark:text-[#0c0d1b]'>{icon}</button></span>
                </div>
                

            </nav>
        </div>
    </header>
  )
}

export default Header