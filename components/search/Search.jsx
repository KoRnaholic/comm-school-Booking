import Image from "next/image";
import React from "react";
import search from "@/icons/search.svg";
import DropdownMenuMap from "../dropDown/DropDownMap";

export default function Search(props) {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center w-[830px] bg-white shadow-lg border-t rounded-full font-semibold text-sm">
        {/* <div className="group flex flex-col px-12 py-4 rounded-full hover:bg-gray-200 cursor-pointer">
          <span>Where</span>
          <input
            className="group-hover:bg-gray-200 focus:outline-none"
            placeholder="Search destinations"
          />
        </div> */}
        <DropdownMenuMap />
        <div className="flex flex-col px-8 py-4 rounded-full hover:bg-gray-200 cursor-pointer border-l-2">
          <span>Check in</span>
          <span className="text-[#bcbcbc]">Add dates</span>
        </div>
        <div className="flex flex-col px-8 py-4 rounded-full hover:bg-gray-200 cursor-pointer border-l-2">
          <span>Check out</span>
          <span className="text-[#bcbcbc]">Add dates</span>
        </div>
        <div className="flex items-center justify-between gap-16 pl-10 pr-2 py-3 rounded-full hover:bg-gray-200 cursor-pointer border-l-2">
          <div className="flex flex-col  ">
            <span>Who</span>
            <span className="text-[#bcbcbc]">Add guests</span>
          </div>
          <div className="bg-red-500 text-white rounded-full p-4">
            <Image className="invert" src={search} alt="search" width={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
