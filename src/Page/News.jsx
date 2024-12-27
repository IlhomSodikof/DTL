import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { DataService } from '../config/Dataservice';
import { endpoints } from '../config/endpoints';
import dateFormat from "dateformat";
import { useNavigate } from 'react-router-dom';
export default function News() {
  const navigate = useNavigate()
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.yangiliklar);
      setApiData(response);
      // console.log("BU news", response);

    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };
  useEffect(() => {
    fetchData();


  }, []);

  return (

    <>
      <main>
        <section>
          <div
            className=" grid w-full bg-[crimson] h-96 lg:h-[32rem] place-items-center"
          >
            <div className="flex flex-col items-center mx-auto text-center">
              <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">
                Yangiliklar
              </h1>

              <p className="mt-6 text-lg leading-5 text-white">Til Va Madaniyat Haqida Eng Yangi Ma'lumotlar</p>

              <a href="#news" className="mt-8 cursor-pointer animate-bounce">
                <svg
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27" cy="26" r="18" stroke="white" strokeWidth="2" />
                  <path
                    d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
          <svg
            className="fill-[crimson]"
            viewBox="0 0 1440 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
          </svg>
        </section>
      </main>
      <div className='lg:px-24 mt-28 mb-10' id="news">
        {apiData?.results?.length > 0 ? ( // Ma'lumot mavjudligini tekshirish
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 640: 1, 750: 2, 900: 2, 1024: 3, 1439: 4 }}
            className="p-[10px]"
          >
            <Masonry gutter="20px">


              {
                apiData?.results?.map((e) => {
                  return (
                    <div className="news_card mx-10 sm:mx-32 md:mx-5 xl:mx-0    shadow-[#cccccc] shadow-xl" key={e?.id} >
                      <div >
                        <img className='h-[200px] w-full' src={e?.image} alt="bu surat" />
                      </div>
                      <div className="news_heading line-clamp-4 ">
                        <h3>{e?.title}</h3>
                      </div>
                      <div className="news_flex">
                        <div className="news_text">
                          <p>Yangiliklar </p>
                          <span style={{ color: "#6b1324" }}>
                            {/* {e?.created_at} */}
                            {dateFormat(e?.created_at, "dd.mm.yyyy")}
                          </span>
                        </div>
                        <div className="news_button">
                          <button className="button" onClick={() => navigate(`/news/${e?.id}`)}>
                            batafsil
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <div className="text-center text-gray-500">
            No data available.
          </div>
        )}
      </div>
    </>
  )
}
/////////////////////////////////////////////////////////////////////////////////////

