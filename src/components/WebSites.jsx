import React, { useEffect, useState } from 'react'
import { endpoints } from '../config/endpoints';
import { DataService } from '../config/Dataservice';
import { Link } from 'react-router-dom';

export default function WebSites() {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints.oxirtgifoydalisaytlar);
      setApiData(response);
      console.log("BU foydali sattrtrtrtrtr", response);

    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };
  useEffect(() => {
    fetchData();


  }, []);
  return (

    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="xl:flex xl:items-center xl:justify-between">
          <h3 to="/websites" className="text-xl font-bold text-center text-gray-400 xl:text-left font-pj"><Link to="/websites">+{apiData?.count} Foydali sahifalar</Link></h3>

          <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
            {apiData?.latest_useful_links?.map((e) => (
              <a className='flex gap-2 mx-auto' href={e?.link} target='_blank'>
                <img className="object-contain w-auto   rounded-md h-9" src={e?.image} alt="" key={e?.id} /> <h3 className='text-3xl text-gray-600 font-medium'>{e?.title}  </h3>
              </a>))}
            <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg" alt="" />
            <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg" alt="" />
            {/* <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg" alt="" /> */}
            <img className="object-contain w-auto mx-auto h-9" src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
