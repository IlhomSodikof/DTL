import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import dateFormat from "dateformat";
import { endpoints } from '../../config/endpoints';
import { DataService } from '../../config/Dataservice';

export default function NewsHm() {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.yangiliklar_boshsahifa);
      setApiData(response);
      console.log("BU news homdagiw", response);

    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };
  useEffect(() => {
    fetchData();


  }, []);
  var settings = {
    // customPaging: function (i) {
    //   return <div className="custom-dot">{/* Nuqta stilini o'rnating */}</div>;
    // },
    // infinite: true,
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,

        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow  right-[0px] lg:right-[-20px] z-2" onClick={onClick}>
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow  left-[0px] lg:left-[-20px] z-2" onClick={onClick}>
      <IoIosArrowBack />
    </div>
  );

  return (
    <>
      <div className="mx-2 lg:mx-24 items-center">
        <Slider
          key={1}
          watchSlidesProgress={true}
          {...settings}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >

          {apiData?.map((e) => (
            <div className="news_card lg:mx-5 w-full my-10  shadow-[#cccccc] shadow-xl" key={e?.id}>
              <div className="news_heading line-clamp-4 ">
                <h3>{e?.title} </h3>
              </div>
              <div className="news_flex">
                <div className="news_text">
                  <p>Yangiliklar </p>
                  <span style={{ color: "#6b1324" }}>
                    {dateFormat(e?.created_at, "dd.mm.yyyy")}
                  </span>
                </div>

                <div className="news_button">
                  <button className="button">
                    batafsil
                  </button>
                </div>
              </div>
              <div className="news_img h-[200px]">
                <img src={e?.image} alt="bu news surati " className='flex justify-center items-center h-full bg-gray-200' />
              </div>
            </div>

          ))}
        </Slider>
      </div>

      {/* <div className="px-4 lg:p-20">
        <div className=" dark:text-gray-900">
          <div className="container grid grid-cols-12 mx-auto">
            <div className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto" style={{ backgroundImage: `url('https:  encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhi7ap40nXnubmpmYdOe7xkAElgnSzD2KAtg&s')`, backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundSize: "cover" }}>
              <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
                <span>12 Dec</span>
                <h1 className="py-4 text-5xl font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing.</h1>
                <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                <svg xmlns="http:  www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10">
              <div className="pt-6 pb-4 space-y-2">
                <span>12 Dec</span>
                <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                  <span>Batafsil</span>
                  <svg xmlns="http:  www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
              <div className="pt-6 pb-4 space-y-2">
                <span>12 Dec</span>
                <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                  <span>Batafsil</span>
                  <svg xmlns="http:  www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
              <div className="pt-6 pb-4 space-y-2">
                <span>12 Dec</span>
                <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                <a rel="noopener noreferrer" href="#" className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600">
                  <span>Batafsil</span>
                  <svg xmlns="http:  www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}
