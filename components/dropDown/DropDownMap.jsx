"use client";

import * as React from "react";
import europe from "@/images/map/europe.webp";
import italy from "@/images/map/italy.webp";
import turkey from "@/images/map/turkey.webp";
import usa from "@/images/map/USA.webp";
import world from "@/images/map/world.jpg";
import southAmerica from "@/images/map/south-america.webp";

// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function DropdownMenuMap() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu className="shadow-lg flex ">
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline"> */}
        <div className="group flex flex-col px-12 py-4 rounded-full hover:bg-gray-200 cursor-pointer">
          <span>Where</span>
          <input
            className="group-hover:bg-gray-200 focus:outline-none"
            placeholder="Search destinations"
          />
        </div>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 flex flex-col p-5 rounded-2xl items-center justify-center">
        <div className="text-black font-bold">Search by region</div>
        <div className="flex w-96 justify-center items-center">
          <DropdownMenuRadioGroup
            className="flex flex-wrap w-1/3  py-2 gap-2"
            value={position}
            onValueChange={setPosition}
          >
            <DropdownMenuRadioItem
              className="flex flex-col w-80  items-center justify-center"
              value="top "
            >
              <Image
                className="rounded-xl"
                width={150}
                src={world}
                alt="europe"
              />
              <span>i am flexible</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className="flex flex-col w-80 items-center justify-center"
              value="bottom"
            >
              <Image
                className="rounded-xl"
                width={150}
                src={usa}
                alt="europe"
              />
              <span>United States</span>
            </DropdownMenuRadioItem>
            <DropdownMenuSeparator />
          </DropdownMenuRadioGroup>
          <DropdownMenuRadioGroup
            className="flex flex-wrap w-1/3 py-2 gap-2 "
            value={position}
            onValueChange={setPosition}
          >
            <DropdownMenuRadioItem
              className="flex flex-col w-80 items-center justify-center"
              value="top"
            >
              <Image
                className="rounded-xl"
                width={150}
                src={europe}
                alt="europe"
              />
              <span>Europe</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className="flex flex-col w-80 items-center justify-center"
              value="bottom"
            >
              <Image
                className="rounded-xl"
                width={150}
                src={turkey}
                alt="europe"
              />
              <span>Turkey</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuRadioGroup
            className="flex flex-wrap w-1/3 py-2 gap-2 "
            value={position}
            onValueChange={setPosition}
          >
            <DropdownMenuRadioItem
              className="flex flex-col w-80 items-center justify-center"
              value="top"
            >
              <Image
                className="rounded-xl"
                width={150}
                src={italy}
                alt="europe"
              />
              <span>Italy</span>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem
              className="flex flex-col w-80 items-center justify-center"
              value="bottom"
            >
              <Image
                className="rounded-xl"
                width={150}
                src={southAmerica}
                alt="europe"
              />
              <span>South America</span>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
