import React from 'react'
import { TbHexagonNumber2 } from "react-icons/tb";
import { TbHexagonNumber0 } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="h-16 flex flex-col justify-center border-white border-b-white sticky z-10 top-0 bg-gradient-to-r from-green-400 to-cyan-400">
        <div className="mx-0 max-w-full px-4 md:px-6">
            <nav className="flex items-center justify-between flex-wrap gap-5 text-black">
                <div className="text-lg flex items-center font-black text-black">
                    SYSTEM CONVERTER
                </div>
                <div className="flex flex-row items-center gap-5">
                    <Link to="/" className='inline-flex font-bold text-black hover:scale-90 transition-all duration-300'>
                        <span className='sm:mr-2 text-2xl'><TbHexagonNumber2/></span>
                        <span className="hidden sm:block">BinDec</span>
                    </Link>

                    <Link to="/decbin" className='inline-flex font-bold text-black hover:scale-90 transition-all duration-300'>
                        <span className='sm:mr-2 text-2xl'><TbHexagonNumber0/></span>
                        <span className="hidden sm:block">DecBin</span>
                    </Link>
                </div>
                

            </nav>
        </div>
    </header>
  )
}

export default Header