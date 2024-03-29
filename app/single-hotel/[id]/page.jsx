"use client";
import { fetchApi } from "../../../lib/api";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchApi("records?limit=20");
      const hotelData = data.results.filter((item) => item.id === params.id);
      setData(hotelData);
    }
    fetchData();
  }, [params.id]);

  return (
    <div className="mt-[200px] flex justify-center items-center">
      {data.map((item) => {
        let {
          xl_picture_url,
          review_scores_rating: rating,
          id,
          name,
          description,
          number_of_reviews: reviews,
          bedrooms,
          bathrooms,
          guests_included: guest,
        } = item;

        return (
          <div key={item.id}>
            <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
              <Image
                className="w-full h-[450px]"
                src={xl_picture_url}
                width={500}
                height={500}
                quality={100}
                alt={name}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
                <p className="text-gray-600 mb-4">{item.host_location}</p>
                <p className="flex gap-3 mb-5">
                  <span>{guest} guests</span>
                  <span>{bedrooms} bedroom</span>
                  <span>{bathrooms} bath</span>
                </p>
                <div className="flex items-center mb-4">
                  <svg
                    className="w-6 h-6 fill-current text-yellow-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2M12 15.76L14.47 17.16L13.76 14.18L16.24 12.42L13.23 12.29L12 9.5L10.77 12.29L7.76 12.42L10.24 14.18L9.53 17.16L12 15.76Z" />
                  </svg>
                  <span className="text-gray-800">4.5</span>
                  <span className="text-gray-600"> ({reviews} reviews)</span>
                </div>
                <p className="text-gray-700 mb-4">{description}</p>
                <div className="flex items-center">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                    Book Now
                  </button>
                  <p className="text-gray-600 ml-4">
                    Price: ${item?.price}/night
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
