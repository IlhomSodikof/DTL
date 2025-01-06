// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { DataService } from '../config/Dataservice';
// import { endpoints } from '../config/endpoints';
// import { BiSolidQuoteAltRight, BiSolidQuoteAltLeft } from "react-icons/bi";
// // import {  } from "react-icons/bi";

// export default function DictonaryDetail() {
//   const route = useParams()

//   const [apiData, setApiData] = useState([]);
//   const fetchData = async () => {
//     try {
//       const response = await DataService.get(endpoints.topSozlarById(route?.id));
//       setApiData(response);
//       console.log("BU TEAM", response);

//     } catch (error) {
//       console.error("Error fetching category data:", error);
//     }
//   };
//   useEffect(() => {
//     fetchData();


//   }, []);
//   return (
//     <div className='p-5 sm:px-10 md:px-20 lg:px-24 lg:mt-20'>

//       <div className='h-[max-content] flex flex-col gap-5 sm:shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10'>
//         <h1 className='lg:text-4xl text-2xl sm:text-3xl text-center flex justify-center gap-2 text-gray-600 font-bold'> <BiSolidQuoteAltLeft className='text-sm' />{apiData?.word_name}<BiSolidQuoteAltRight className='text-sm mt-6' /></h1>
//         <p className='text-gray-500  sm:text-lg'>{apiData?.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis praesentium provident distinctio. Consequatur cumque explicabo autem assumenda, ullam beatae consectetur veritatis ipsum eligendi possimus repellendus ipsam sit doloribus, velit mollitia laudantium saepe voluptas dolore nostrum, itaque dicta fugit? Voluptatum animi fugit iste accusantium praesentium blanditiis alias dolore facilis obcaecati, recusandae necessitatibus voluptatem eos architecto odio dolorem? Et iusto necessitatibus vero modi. Ad ducimus atque illum minima numquam quas, harum sequi aut, corporis quo odio quaerat error, unde deserunt voluptas consequatur praesentium odit eveniet. Sapiente magni quisquam, corrupti sequi vero debitis esse voluptas, recusandae hic incidunt quos possimus. Deserunt, error corrupti?</p>
//       </div>


//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataService } from "../config/Dataservice";
import { endpoints } from "../config/endpoints";
import { BiSolidQuoteAltRight, BiSolidQuoteAltLeft } from "react-icons/bi";

export default function DictonaryDetail() {
  const route = useParams();
  const [apiData, setApiData] = useState({ word_name: "", content: "" });

  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.topSozlarById(route?.id));
      setApiData(response);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // `word_name`ni `content` ichidan topish va ajratilgan rang berish
  const highlightWord = (content, word) => {
    if (!content || !word) return content; // Agar bo'sh bo'lsa, hech narsa qilmaslik
    const regex = new RegExp(`(${word})`, "gi"); // So'zni e'tiborli yoki e'tiborsiz harflar bilan topish
    return content.replace(
      regex,
      `<span className="bg-yellow-300 font-bold">$1</span>` // Topilgan so'zni belgilash
    );
  };

  return (
    <div className="p-5 sm:px-10 md:px-20 lg:px-24 lg:mt-20">
      <div className="h-[max-content] flex flex-col gap-5 sm:shadow-lg rounded-lg p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="lg:text-4xl text-2xl sm:text-3xl text-center flex justify-center gap-2 text-gray-600 font-bold">
          <BiSolidQuoteAltLeft className="text-sm" />
          {apiData?.word_name}
          <BiSolidQuoteAltRight className="text-sm mt-6" />
        </h1>
        <p
          className="text-gray-500 sm:text-lg"
          dangerouslySetInnerHTML={{
            __html: highlightWord(apiData?.content, apiData?.word_name),
          }}
        ></p>
      </div>
    </div>
  );
}
