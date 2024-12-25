import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { DataService } from '../config/Dataservice';
import { endpoints } from '../config/endpoints';

export default function Projects() {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.project);
      setApiData(response);
      console.log("Loyha ma'lumotlari:", response);
    } catch (error) {
      console.error("Kategoriya ma'lumotlarini olishda xatolik:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDownload = (fileUrl) => {
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileUrl.split('/').pop(); // Fayl nomini olish
      link.click();
    } else {
      alert("PDF fayl mavjud emas.");
    }
  };

  return (
    <div className='lg:px-20 my-10'>
      <h2 className='text-5xl font-bold mb-10 px-10'>Nashirlar</h2>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 1024: 4, }}
        className="p-[10px]">
        <Masonry gutter="20px">
          {
            apiData?.map((e) => {
              return (
                <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80" key={e?.id}>
                  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-60">
                    <img
                      src={e?.image}
                      alt="card-image" className="object-cover w-full h-full" />
                  </div>
                  <div className="p-6 pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <p className="block font-sans text-base antialiased font-bold leading-relaxed ">
                        {e?.title}
                      </p>
                    </div>
                  </div>

                  <div className="group relative flex items-center justify-end p-2">
                    <button
                      onClick={() => handleDownload(e?.file)}
                      className="bg-[crimson] text-white w-10 h-10 flex justify-center items-center rounded-lg hover:text-green-50 hover:translate-y-1 hover:duration-300"
                    >
                      <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </button>
                  </div>

                </div>
              );
            })
          }

        </Masonry>
      </ResponsiveMasonry>
    </div>);
}