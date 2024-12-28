import { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const SearchResultCard = ({ result }) => {
  const [hoverData, setHoverData] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const highlightWords = (content, matches) => {
    if (!matches || matches.length === 0) return content;
    const sortedMatches = [...matches].sort((a, b) => a.start_idx - b.start_idx);
    const mergedMatches = [];
    let currentMatch = { ...sortedMatches[0] };
    for (let i = 1; i < sortedMatches.length; i++) {
      const match = sortedMatches[i];
      if (currentMatch.end_idx >= match.start_idx) {
        currentMatch.end_idx = Math.max(currentMatch.end_idx, match.end_idx);
        currentMatch.word += `, ${match.word}`;
      } else {
        mergedMatches.push(currentMatch);
        currentMatch = { ...match };
      }
    }
    mergedMatches.push(currentMatch);
    const parts = [];
    let lastIndex = 0;
    mergedMatches.forEach((match, index) => {
      const { start_idx, end_idx, word, root, suffixes } = match;
      if (start_idx > lastIndex) {
        parts.push(content.slice(lastIndex, start_idx));
      }
      parts.push(
        <span
          key={index}
          className="bg-yellow-200 text-black font-bold hover:bg-yellow-400 cursor-pointer"
          onMouseEnter={(e) => {
            const rect = e.target.getBoundingClientRect();
            setHoverPosition({ x: e.clientX, y: e.clientY });
            setHoverData({ word, root, suffixes });
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setHoverData(null);
            setIsHovered(false);
          }}
        >
          {content.slice(start_idx, end_idx)}
        </span>
      );
      lastIndex = end_idx;
    });
    if (lastIndex < content.length) {
      parts.push(content.slice(lastIndex));
    }
    return parts;
  };

  return (
    <div className='relative flex flex-col gap-[10px] mx-10 p-10 shadow-[#cccccc] shadow-xl bg-white rounded-md' style={{ marginTop: '50px' }}>
      <p className='text-left text-[18px] text-gray-500 text-medium'> {highlightWords(result.content, result.matches)}
        <Link to="/" className="text-blue-500 hover:cursor-pointer hover:underline pl-2">ko'proq...</Link>
      </p>
      {hoverData && isHovered && (
        <div
          className="fixed p-4 bg-white border rounded-lg shadow-lg z-10"
          style={{
            top: hoverPosition.y + 10,
            left: hoverPosition.x + 10,
            maxWidth: "250px",
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h4 className="text-lg font-semibold">Word: {hoverData.word}</h4>
          <p className="text-sm text-gray-600">Root: {hoverData.root}</p>
          <ul className="text-sm text-gray-600">
            {hoverData.suffixes?.map((suffix, index) => (
              <li key={index}>
                <strong>{suffix.suffix}:</strong> {suffix.suffix_description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};






function LemmaCard({ result }) {
  const [highlightedWord, setHighlightedWord] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleWordHover = (word, event) => {
    setHighlightedWord(word); // So'zni belgilash
    setHoverPosition({ x: event.clientX, y: event.clientY }); // Sichqoncha pozitsiyasini olish
  };
  const handleWordLeave = () => {
    setHighlightedWord(null);
  };
  return (
    <div>
      <div className='flex flex-col gap-[10px] mx-10  p-10  shadow-[#cccccc] shadow-xl bg-white rounded-md' style={{ marginTop: '50px' }}>
        {/* <h3 className='text-left text-[24px] font-bold'>"ipsLorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium?.um"</h3> */}
        <p className='text-left text-[18px] text-gray-500 text-medium'>
          {result.content.split(" ").map((word, idx) => (
            <span
              key={idx} // Har bir so'z uchun unikal kalit
              className={
                result.matches.some((match) => match.word === word) // Agar so'z match ichida bo'lsa, ajratish
                  ? "bg-yellow-300 cursor-pointer font-bold text-black" // Ajratilgan rang va hover ko'rinish
                  : ""
              }
              onMouseEnter={(e) =>
                result.matches.some((match) => match.word === word) &&
                handleWordHover(word, e) // Hover bosilganda so'zni belgilash
              }
              onMouseLeave={handleWordLeave} // Hoverdan chiqishda tozalash
            >
              {word}{" "} {/* Har bir so'zni joyiga qo'yish */}
            </span>
          ))}

          <Link to="/" className="text-blue-500 hover:cursor-pointer hover:underline pl-2">ko'proq...</Link>
        </p>
      </div>

      {highlightedWord && (
        <div
          className="absolute bg-gray-900 text-white p-2 rounded-lg"
          style={{ top: hoverPosition.y + 10, left: hoverPosition.x + 10 }} // Sichqoncha pozitsiyasida ko'rsatish
        >
          {highlightedWord} {/* So'zni chiqarish */}
        </div>
      )}
    </div>
  )
}














export default function Dictonary() {
  const [data, setData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);
  const [tape, setTape] = useState("token");
  const [denger, setDenger] = useState("")

  const fetchData = async () => {
    if (!searchWord) return;
    setLoading(true);
    switch (tape) {
      case "token":
        try {
          const response = await fetch(
            `https://dictionary.uzfati.uz/api/text/search/?prefix=${searchWord}&search_type=token`
          );
          const result = await response.json();
          setData(result.results.search_results || []);
          setDenger(result)
          console.log("bu searchmish", denger);

        } catch (error) {
          console.error("API data fetching error:", error);
        } finally {
          setLoading(false);
        }
        console.log("bu tokendaddddddddddd");

        break;

      case "lemma":
        try {
          const response = await fetch(
            `https://dictionary.uzfati.uz/api/text/search/?prefix=${searchWord}&search_type=lemma`
          );
          const result = await response.json();
          setData(result.results.search_results || []);


          console.log("bu searchmish", result.count);

        } catch (error) {
          console.error("API data fetching error:", error);
        } finally {
          setLoading(false);
        }
        console.log("bu lemmmmaammamamamammamaada ");

        break;
    }


  };

  const clearData = () => {
    setData([]);
    setSearchWord("");
    setDenger([]);
  };

  const [active, setActive] = useState(0)
  return (
    <>
      <div className="lg:px-24 flex flex-col lg:flex-row h-[80vh]  my-20">
        <ul className='flex flex-row pl-10 mb-5 lg:mb-0   lg:flex-col lg:w-56 xl:w-72  items-center h-full pt-10 border-r'>
          <li className='text-xl lg:text-3xl border-l-4 lg:border-l-0  font-medium cursor-pointer lg:w-[90%] py-0 lg:py-5 p-5 lg:border-b lg:text-center' onClick={() => { setTape("token"), clearData() }} style={{ borderColor: tape == "token" ? "crimson" : "", color: tape == "token" ? "crimson" : "" }}>Token</li>
          <li className='text-xl lg:text-3xl border-l-4 lg:border-l-0  font-medium cursor-pointer lg:w-[90%] py-0 lg:py-5 p-5 lg:border-b lg:text-center' onClick={() => { setTape("lemma"), clearData() }} style={{ borderColor: tape == "lemma" ? "crimson" : "", color: tape == "lemma" ? "crimson" : "" }}>Lema</li>
          <li className='text-xl lg:text-3xl  lg:border-l-0  font-medium cursor-pointer lg:w-[90%] py-0 lg:py-5 p-5  flex justify-end'>
            <button onClick={clearData}
              className="group relative flex p-3 py-2  lg:p-5  lg:py-3 flex-col items-center justify-center overflow-hidden rounded-xl border-2 bg-[crimson]  hover:bg-red-600"
            >
              <svg
                viewBox="0 0 1.625 1.625"
                className="absolute  -top-3  lg:-top-7 fill-white delay-100 group-hover:top-4 lg:group-hover:top-5 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
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
        <div className="flex flex-1 flex-col  lg:gap-4   h-full ">
          <div className='w-full  flex items-center flex-col  my-5 px-10 sm:px-20 lg:px-0'>
            <div className='rounded-2xl border-2 border-[#dc143c50] bg-transparent flex w-full md:w-[max-content] p-1'>
              <input className=' lg:p-1 pl-3 outline-none  w-full  md:w-96 bg-transparent' type="text"
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
              />
              <button className=' p-2 px-3    bg-[crimson] rounded-xl text-white flex gap-1 items-center' onClick={fetchData}><IoSearchOutline className='text-xl' />  </button>
            </div>
            <div className='flex gap-2 mt-2'>
              {denger?.results?.text_count && <p className='text-gray-400 font-medium'>{denger?.results?.text_count} ta hujjatda {denger?.results?.total_occurrences} ta so'z uchradi</p>}
            </div>
            {denger?.results?.text_count && <div className='flex flex-col items-start justify-center w-full gap-2 mt-5 px-8 '>
              <p className='text-gray-400 text-md lg:text-lg font-medium'><span className='text-gray-600 text-lg lg:text-xl font-medium'>Gramatik tavsif:</span> {denger?.results?.word_details?.grammatical_description} </p>
              <p className='text-gray-400 text-md lg:text-lg font-medium'><span className='text-gray-600 text-lg lg:text-xl font-medium'>Lug'aviy shakl:</span> {denger?.results?.word_details?.lexical_form} </p>
              <p className='text-gray-400 text-md lg:text-lg font-medium'><span className='text-gray-600 text-lg lg:text-xl font-medium'>Izoh:</span> {denger?.results?.word_details?.comment} </p>
            </div>}
          </div>
          {tape == "token" && <div className="flex flex-col h-[70vh] overflow-auto   pb-7">
            {loading ? (
              <p className='flex h-full w-full items-center justify-center text-2xl'>Yuklanmoqda...</p>
            ) : data.length > 0 ? (
              data.map((result, index) => (
                <SearchResultCard key={index} result={result} />
              ))
            ) : (
              data?.count > 0 || data?.results?.length > 0 ? <div className='flex flex-col items-center'>

                <img className='lg:mt-10 h-[40vh] w-full' src="../../public/NoData.svg " alt="Resursiv rasm" />
                <p className='text-gray-400 text-md lg:text-lg font-medium mt-5'>Qidruv natijasi topilmadi </p>
              </div> : <div className='flex flex-col items-center'>
                <picture>
                  <source srcSet="../../public/BigSearch.svg" media="(min-width: 1024px)" />
                  <source srcSet="../../public/Search.svg" media="(max-width: 1024px)" />
                  <img className='lg:mt-10 h-[40vh] w-full' src="../../public/Search.svg " alt="Resursiv rasm" />
                </picture>
                <p className='text-gray-400 text-md lg:text-lg font-medium mt-5'>Qidirmoqchi bo'lgan so'zingizni kiriting</p>
              </div>
            )}
          </div>
          }


          {tape == "lemma" && <div className="flex flex-col h-[70vh] overflow-auto pb-7">
            {loading ? (
              <p className='flex h-full w-full items-center justify-center text-2xl'>Yuklanmoqda...</p>
            ) : data.length > 0 ? (
              data.map((result, index) => (
                <LemmaCard key={index} result={result} />
              ))
            ) : (

              searchWord ? <div className='flex flex-col items-center'>

                <img className='lg:mt-10 h-[40vh] w-full' src="../../public/NoData.svg " alt="Resursiv rasm" />

                <p className='text-gray-400 text-md lg:text-lg font-medium mt-5'>Qidruv natijasi topilmadi </p>
              </div> : <div className='flex flex-col items-center'>
                <picture>
                  <source srcSet="../../public/BigSearch.svg" media="(min-width: 1024px)" />
                  <source srcSet="../../public/Search.svg" media="(max-width: 1024px)" />
                  <img className='lg:mt-10 h-[40vh] w-full' src="../../public/Search.svg " alt="Resursiv rasm" />
                </picture>
                <p className='text-gray-400 text-md lg:text-lg font-medium mt-5'>Qidirmoqchi bo'lgan so'zingizni kiriting</p>
              </div>

            )}
          </div>
          }


          {/* <div className="flex flex-col h-[7  0vh] overflow-auto pb-7">
            <div className='flex flex-col gap-[10px] mx-10  p-10  shadow-[#cccccc] shadow-xl bg-white rounded-md' style={{ marginTop: '50px' }}>
              <h3 className='text-left text-[24px] font-bold'>"ipsLorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium?.um"</h3>
              <p className='text-left text-[18px] text-gray-500 text-medium'> "Lorem ipsum dolor amet consectetur adipisicing elit. Praesentium? dolor sit amet consectetur adipisicing elit. Praesentium?  consectetur adipisicing elit. Praesentium? sit amet consectetur adipisicing elit. Praesentium? dolor sit amet consectetur adipisicing elit. Praesentium?  consectetur adipisicing elit. Praesentium?" : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium?"
                <Link to="/" className="text-blue-500 hover:cursor-pointer hover:underline pl-2">ko'proq...</Link>
              </p>
            </div>
          </div> */}
        </div>
      </div >
    </>
  )
}


// import React from 'react'
// import Search from './Search'

// export default function Dictonary() {
//   return (
//     <div><Search /></div>
//   )
// }
