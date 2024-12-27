import React from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000); // 10 sekund

      return () => clearTimeout(timer); // Komponentdan chiqishda tozalash
    }
  }, [isOpen]);
  return (
    <>
      <div className="flex justify-between  sm:w-[540px] px-4 md:w-full mx-auto md:px-32 lg:px-24 xl:px-28 lg:h-[80px] h-[70px] items-center">
        {/* <img className='h-[20px] ' src="../../public/logo-no-background (2).svg" alt="Logo" /> */}
        <span className='text-4xl text-[crimson] font-medium'>DC</span>
        <div className="hidden lg:flex gap-6 items-center">
          <Link className='font-medium' to="/">Bosh sahifa</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="font-medium   focus:outline-none"
            >
              Biz haqimizda
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-md rounded">
                <Link to='/team'
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Ilmiy jamoa
                </Link>
                <Link to='/projects'
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Nashirlar
                </Link>
                <Link to='/websites'
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Foydali Web satylar
                </Link>

              </div>
            )}
          </div>
          <Link className='font-medium' to="/statistic">Statistic tahlil</Link>
          <Link className='font-medium' to="/dictonary">Lug'at</Link>
          <Link className='font-medium' to="/news">Yangiliklar</Link>

        </div>
        <Link className='hidden lg:block px-6 font-medium py-[10px] bg-[crimson] text-white rounded-md' to="/contact">Bog'lanish</Link>
        {/* <HiMenu className='text-[30px] lg:hidden' /> */}

        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-evenly min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/" onClick={() => setIsNavOpen(false)}>Bosh sahifa</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/team" onClick={() => setIsNavOpen(false)}>Ilmiy jamoa</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/projects" onClick={() => setIsNavOpen(false)}>Nashirlar</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to='/websites' onClick={() => setIsNavOpen(false)}>Foydali websaytlar</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/statistic" onClick={() => setIsNavOpen(false)}>Statistic tahlil</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/dictonary" onClick={() => setIsNavOpen(false)}>Lug'at</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/news" onClick={() => setIsNavOpen(false)}>Yangiliklar</Link>

              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/contact" onClick={() => setIsNavOpen(false)}>Bog'lanish</Link>
              </li>
            </ul>
          </div>
        </section>



        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </>
  )
}
