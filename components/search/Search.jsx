import Image from "next/image";
import React from "react";
import search from "@/icons/search.svg";
import DropdownMenuMap from "../dropDown/DropDownMap";

export default function Search(props) {
  return (
    <div className="flex justify-center transition-all">
      <div className="flex justify-between items-center w-[400px] lg:w-[830px] transition-all bg-white shadow-lg border-t rounded-full font-semibold text-sm">
        <DropdownMenuMap />
        <div className=" hidden lg:flex flex-col px-8 py-4 rounded-full hover:bg-gray-200 cursor-pointer border-l-2">
          <span>Check in</span>
          <span className="text-[#bcbcbc]">Add dates</span>
        </div>
        <div className="hidden lg:flex flex-col px-8 py-4 rounded-full hover:bg-gray-200 cursor-pointer border-l-2">
          <span>Check out</span>
          <span className="text-[#bcbcbc]">Add dates</span>
        </div>
        <div className="flex items-center justify-between gap-16 lg:pl-10 pr-2 lg:py-3 rounded-full lg:hover:bg-gray-200 cursor-pointer xl:border-l-2">
          <div className="hidden lg:flex flex-col  ">
            <span>Who</span>
            <span className="text-[#bcbcbc]">Add guests</span>
          </div>
          <div className="bg-red-500 flex text-white rounded-full p-4">
            <Image className="invert" src={search} alt="search" width={16} />
          </div>
        </div>
      </div>
    </div>
  );
}