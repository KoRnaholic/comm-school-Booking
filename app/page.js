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
        let { xl_picture_url } = item;
        if (
          xl_picture_url ===
            "https://a0.muscache.com/im/pictures/12516562/bf7a2598_original.jpg?aki_policy=x_large" ||
          xl_picture_url ===
            "https://a0.muscache.com/im/pictures/fd67b4b2-aa28-407a-80da-0d6707d59833.jpg?aki_policy=x_large" ||
          xl_picture_url ===
            "https://a0.muscache.com/im/pictures/105609373/70e3ceba_original.jpg?aki_policy=x_large" ||
          xl_picture_url === null
        ) {
          xl_picture_url = hotemImg;
        }
        return (
          <div
            key={item?.id}
            className="w-[300px] h-[400px]  rounded overflow-hidden shadow-lg cursor-pointer"
          >
            <Image
              className="w-full h-[250px] rounded-md"
              src={xl_picture_url}
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
