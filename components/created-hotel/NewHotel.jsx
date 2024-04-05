import Image from "next/image";
import React from "react";

export default function NewHotel({ hotels }) {
  //   const image = imgURL[0];
  return (
    <>
      {hotels.map((hotel) => {
        return (
          <div
            key={hotel?.address}
            className="w-[260px] h-[360px]  rounded overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <span className="relative">
              <Image
                className="w-full h-[220px] rounded-md relative"
                src={hotel?.imgURL[0]}
                width={150}
                height={150}
                alt="Hotel"
                quality={100}
                priority
              />
              {/* <Image
                className="absolute top-2 right-6 w-[25px] border-1 hover:scale-150 transition-all"
                src
                alt="heart"
              /> */}

              <span className="absolute top-3 left-2 py-1 px-2 bg-slate-50 rounded-2xl text-sm font-medium">
                Guest favorite
              </span>
            </span>

            <div className="px-6 py-4">
              <div className="font-bold text-md mb-2">{hotel?.address}</div>

              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-base">
                  {/* <Location hotelLocation={hotelLocation} /> */}
                </p>
                <p className="text-gray-500 text-base flex gap-2">
                  <span className="text-black font-bold ">
                    ${hotel?.pricePerNight}
                  </span>
                  per night
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
