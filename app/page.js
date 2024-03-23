"use client";

import { fetchApi } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import hotemImg from "@/images/hotel.jpg";
import heart from "@/icons/heart.svg";
import Location from "@/components/location/Location";

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
    <div className="p-10 mt-52 flex flex-wrap gap-12 justify-center items-center">
      {data.map((item) => {
        let { xl_picture_url, latitude, longitude } = item;
        const hotelLocation = {
          lat: latitude,
          lng: longitude,
        };
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
            className="w-[300px] h-[410px]  rounded overflow-hidden shadow-lg cursor-pointer "
          >
            <span className="relative">
              <Image
                className="w-full h-[250px] rounded-md relative"
                src={xl_picture_url}
                width={250}
                height={250}
                alt="Hotel"
                quality={100}
                priority={false}
              />
              <Image
                className="absolute top-2 right-6 w-[25px] border-1 hover:scale-150 transition-all"
                src={heart}
                alt="heart"
              />
            </span>

            <div className="px-6 py-4">
              <div className="font-bold text-md mb-2">
                {item?.host_location}
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-base">
                  <Location hotelLocation={hotelLocation} />
                </p>
                <p className="text-gray-500 text-base flex gap-2">
                  <span className="text-black font-bold ">${item?.price}</span>
                  per night
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
