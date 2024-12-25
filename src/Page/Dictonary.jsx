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
        </ul>
        <div className="flex flex-1 flex-col gap-4  h-full ">
          <div className='w-full  m-3 my-5 pl-10 '>
            <div className='rounded-2xl border-2 border-[#dc143ca5] bg-transparent flex w-[max-content] p-1'>
              <input className=' p-1 pl-3 outline-none  w-80 bg-transparent' type="search" />
              <button className=' p-2 px-3    bg-[crimson] rounded-s-xl text-white flex gap-1 items-center'><IoSearchOutline />  </button>
              <button className=' p-2 pr-3 bg-[crimson] border-l-2 rounded-r-xl text-white flex gap-1 items-center'> <HiMiniXMark /> </button>
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
