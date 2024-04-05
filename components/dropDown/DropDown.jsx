"use client";

import * as React from "react";
import hamburger from "../../icons/burger-menu.svg";
import person from "../../icons/person.svg";

// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu className="shadow-lg">
      <DropdownMenuTrigger asChild>
        {/* <Button variant="outline"> */}
        <span className="flex items-center gap-3 border rounded-full px-4 py-2 hover:shadow-md cursor-pointer">
          <Image src={hamburger} alt="logo" width={16} />
          <Image src={person} alt="logo" width={30} />
        </span>
        {/* </Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup
          className="flex flex-col py-2 gap-2"
          value={position}
          onValueChange={setPosition}
        >
          <DropdownMenuRadioItem value="top">
            <Link href="/signup">Sign up</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            <Link href="/login">Log in</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="right">
            Gift cards
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            <Link href="/create-hotel"> Airbnb your home</Link>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            Help center
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
