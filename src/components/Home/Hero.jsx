import React, { useEffect, useState } from 'react'
import { endpoints } from '../../config/endpoints';
import { DataService } from '../../config/Dataservice';
import SEO from '../Seo';


export default function Hero() {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.foydalisaytlar);
      setApiData(response);
      console.log("bu herodan", response);

    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };
  useEffect(() => {
    fetchData();


  }, []);
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <SEO title={"Foydali havolalar"} description={"Foydali havolalar"} image={apiData?.results[0]?.image} url={window.location.href} />
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Foydali havolalar</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {
            apiData?.results?.map((e) =>

              <a className="overflow-hidden bg-white rounded shadow cursor-pointer" href={e?.link} key={e?.id} target='_blank'>
                <div className="p-8">
                  <div className="flex items-center">
                    <img className="flex-shrink-0 w-12 h-12 rounded-md" src={e?.image} alt="bu surat" />
                    <div className="ml-5 mr-auto">
                      <p className="text-xl font-semibold text-black">{e?.title}</p>
                      <p className="mt-px text-sm text-gray-600">{e?.last_title} </p>
                    </div>
                    <svg className="hidden w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <p className="text-base leading-relaxed text-gray-600 mt-7">{e?.text}</p>
                </div>
              </a>
            )}

        </div>


      </div>
    </section>


  )
}
