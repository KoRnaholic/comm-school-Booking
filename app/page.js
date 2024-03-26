"use client";

import { fetchApi } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";
import hotemImg from "@/images/hotel.jpg";
import heart from "@/icons/heart.svg";
import Location from "@/components/location/Location";
import { useRouter } from "next/navigation";

export default function Home() {
  const [data, setData] = useState([]);

  const router = useRouter();
  const handleClick = (id) => {
    // Set a new URL when the button is clicked
    router.push(`/single-hotel/${id}`);
  };

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
        let {
          xl_picture_url,
          latitude,
          longitude,
          review_scores_rating: rating,
          id,
        } = item;
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

        if (rating > 95) {
          rating = true;
        } else {
          rating = false;
        }

        return (
          <div
            onClick={() => handleClick(id)}
            key={item?.id}
            className="w-[300px] h-[390px]  rounded overflow-hidden shadow-lg cursor-pointer"
          >
            <span className="relative">
              <Image
                className="w-full h-[250px] rounded-md relative"
                src={xl_picture_url}
                width={150}
                height={150}
                alt="Hotel"
                quality={100}
                priority
              />
              <Image
                className="absolute top-2 right-6 w-[25px] border-1 hover:scale-150 transition-all"
                src={heart}
                alt="heart"
              />
              {rating ? (
                <span className="absolute top-3 left-2 py-1 px-2 bg-slate-50 rounded-2xl text-sm font-medium">
                  Guest favorite
                </span>
              ) : (
                ""
              )}
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
