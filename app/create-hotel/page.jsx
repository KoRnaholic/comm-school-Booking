"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../lib/firebase";

export default function Page() {
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");
  const [file, setFile] = useState(null);

  const handeImageChange = (e) => {
    setFile([...e.target.files]);
  };

  console.log(file);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      address.length < 1 ||
      description.length < 1 ||
      pricePerNight.length < 1
    ) {
      return;
    }
    const imgURL = await Promise.all(
      file.map(async (file) => {
        const imgRef = ref(storage, `hotelimages/${file.name}`);
        const uploadResult = await uploadBytes(imgRef, file);
        return getDownloadURL(uploadResult.ref);
      })
    );
    console.log(imgURL);

    const data = {
      address,
      description,
      pricePerNight,
      imgURL,
    };
    await addDoc(collection(db, "hotels"), data);

    window.location.href = "/";
  };
  return (
    <div className=" mt-64 container mx-auto px-4">
      <h1 className="text-center text-4xl text-red-500 font-bold">
        Airbnb your home
      </h1>
      <form
        className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pricePerNight"
          >
            Price per Night
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pricePerNight"
            type="number"
            placeholder="Price per Night"
            value={pricePerNight}
            onChange={(e) => setPricePerNight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image Upload
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            onChange={handeImageChange}
          />
        </div>
        <div className="mb-6">
          <button
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Place your Hotel
          </button>
        </div>
      </form>
    </div>
  );
}
