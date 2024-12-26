import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function Dictonary() {
  const [active, setActive] = useState(0)
  return (
    <>
      <div className="lg:px-24 flex flex-col lg:flex-row h-[80vh]  my-20">
        <ul className='flex flex-row pl-10 mb-5 lg:mb-0   lg:flex-col lg:w-56 xl:w-72  items-center h-full pt-10 border-r'>
          <li className='text-xl lg:text-3xl border-l-4 lg:border-l-0  font-medium cursor-pointer lg:w-[90%] py-0 lg:py-5 p-5 lg:border-b lg:text-center' onClick={() => setActive(1)} style={{ borderColor: active == 1 ? "crimson" : "", color: active == 1 ? "crimson" : "" }}>Token</li>
          <li className='text-xl lg:text-3xl border-l-4 lg:border-l-0  font-medium cursor-pointer lg:w-[90%] py-0 lg:py-5 p-5 lg:border-b lg:text-center' onClick={() => setActive(2)} style={{ borderColor: active == 2 ? "crimson" : "", color: active == 2 ? "crimson" : "" }}>Lema</li>
          <li className='text-xl lg:text-3xl  lg:border-l-0  font-medium cursor-pointer lg:w-[90%] py-0 lg:py-5 p-5  flex justify-end'>
            <button
              className="group relative flex p-5 py-3 flex-col items-center justify-center overflow-hidden rounded-xl border-2 bg-[crimson]  hover:bg-red-600"
            >
              <svg
                viewBox="0 0 1.625 1.625"
                className="absolute -top-7 fill-white delay-100 group-hover:top-5 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
                height="15"
                width="15"
              >
                <path
                  d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
                ></path>
                <path
                  d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
                ></path>
                <path
                  d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
                ></path>
              </svg>
              <svg
                width="16"
                fill="none"
                viewBox="0 0 39 7"
                className="origin-right duration-500 group-hover:rotate-90"
              >
                <line strokeWidth="4" stroke="white" y2="5" x2="39" y1="5"></line>
                <line
                  strokeWidth="3"
                  stroke="white"
                  y2="1.5"
                  x2="26.0357"
                  y1="1.5"
                  x1="12"
                ></line>
              </svg>
              <svg width="16" fill="none" viewBox="0 0 33 39" className="">
                <mask fill="white" id="path-1-inside-1_8_19">
                  <path
                    d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                  ></path>
                </mask>
                <path
                  mask="url(#path-1-inside-1_8_19)"
                  fill="white"
                  d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                ></path>
                <path strokeWidth="4" stroke="white" d="M12 6L12 29"></path>
                <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
              </svg>
            </button></li>

        </ul>
        <div className="flex flex-1 flex-col gap-4  h-full ">
          <div className='w-full  flex justify-center m-3 my-5'>
            <div className='rounded-2xl border-2 border-[#dc143c50] bg-transparent flex w-[max-content] p-1'>
              <input className=' p-1 pl-3 outline-none  w-80 bg-transparent' type="search" />
              <button className=' p-2 px-5  py-3   bg-[crimson] rounded-xl text-white flex gap-1 items-center'><IoSearchOutline className='text-xl' />  </button>
              {/* <button className=' p-2 pr-3 bg-[crimson] border-l-2 rounded-r-xl text-white flex gap-1 items-center'> <HiMiniXMark /> </button> */}
            </div>
          </div>

          <div className="flex flex-col h-[7  0vh] overflow-auto pb-7">
            <div className='flex flex-col gap-[10px] mx-10  p-10  shadow-[#cccccc] shadow-xl bg-white rounded-md' style={{ marginTop: '50px' }}>
              <h3 className='text-left text-[24px] font-bold'>"ipsLorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium?.um"</h3>
              <p className='text-left text-[18px] text-gray-500 text-medium'> "Lorem ipsum dolor amet consectetur adipisicing elit. Praesentium? dolor sit amet consectetur adipisicing elit. Praesentium?  consectetur adipisicing elit. Praesentium? sit amet consectetur adipisicing elit. Praesentium? dolor sit amet consectetur adipisicing elit. Praesentium?  consectetur adipisicing elit. Praesentium?" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium?"
                <Link to="/" className="text-blue-500 hover:cursor-pointer hover:underline pl-2">ko'proq...</Link>
              </p>
            </div>
            <div className='flex flex-col gap-[10px] mx-10  p-10  shadow-[#cccccc] shadow-xl bg-white rounded-md' style={{ marginTop: '50px' }}>
              <h3 className='text-left text-[24px] font-bold'>"ipsLorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium?.um"</h3>
              <p className='text-left text-[18px] text-gray-500 text-medium'> "Lorem ipsum dolor amet consectetur adipisicing elit. Praesentium? dolor sit amet consectetur adipisicing elit. Praesentium?  consectetur adipisicing elit. Praesentium? sit amet consectetur adipisicing elit. Praesentium? dolor sit amet consectetur adipisicing elit. Praesentium?  consectetur adipisicing elit. Praesentium?" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium?"
                <Link to="/" className="text-blue-500 hover:cursor-pointer hover:underline pl-2">ko'proq...</Link>

              </p>
            </div>
          </div>
        </div>
      </div >



    </>
  )
}
