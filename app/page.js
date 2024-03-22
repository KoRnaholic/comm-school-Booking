"use client";

import { fetchApi } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import hotemImg from "@/images/hotel.jpg";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchApi("records?limit=20");
      setData(data.results);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="p-10 flex flex-wrap gap-8 justify-center items-center">
      {data.map((item) => {
        const { host_location, price, xl_picture_url } = item;
        // console.log(host_location, price, xl_picture_url);
        return (
          <div
            key={item?.id}
            className="w-[300px] h-[400px]  rounded overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              className="w-full h-[250px] rounded-md"
              src={item?.xl_picture_url || hotemImg}
              width={250}
              height={250}
              alt="Hotel"
              quality={100}
              priority={false}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {item?.host_location}
              </div>
              <p className="text-gray-700 text-base">{}</p>
              <p className="text-gray-700 text-base">
                ${item?.price} per night
              </p>
              <p className="text-gray-700 text-base">Rating: {}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
