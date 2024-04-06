"use client";

import Image from "next/image";
import hotemImg from "../images/hotel.jpg";
import heart from "../icons/heart.svg";
import skeleton from "../icons/skeleton.svg";
import Location from "../components/location/Location";
import { fetchApi } from "../lib/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

import NewHotel from "../components/created-hotel/NewHotel";

import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [data, setData] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      console.log(user);
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  const router = useRouter();
  const handleClick = (id, item) => {
    // Set a new URL when the button is clicked
    const hotel = JSON.stringify(item);
    localStorage.setItem("hotel", hotel);
    router.push(`/single-hotel/${id}`);
  };

  useEffect(() => {
    const getHotels = async () => {
      setLoading(true);
      const hotelsCol = collection(db, "hotels");
      const hotelsSnapshot = await getDocs(hotelsCol);
      const hotelsList = hotelsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setHotels(hotelsList);
      setLoading(false);
    };

    getHotels();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchApi("records?limit=20");
      setData(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="p-10 mt-52 flex flex-wrap gap-12 justify-center items-center">
      {loading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return <Image key={index} src={skeleton} alt="skeleton" />;
        })}
      <NewHotel hotels={hotels} />
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
            onClick={() => handleClick(id, item)}
            key={item?.id}
            className="w-[260px] h-[360px]  rounded overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <span className="relative">
              <Image
                className="w-full h-[220px] rounded-md relative"
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
