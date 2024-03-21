import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/icons/airbnb-logo.svg";
import globus from "@/icons/globus.svg";
import hamburger from "@/icons/burger-menu.svg";
import person from "@/icons/person.svg";

export default function Header() {
  return (
    <header className="flex justify-between  items-center px-20 py-4">
      <span className="flex items-center gap-2 text-[rgb(255,56,92)] text-2xl font-bold cursor-pointer">
        <Image src={logo} alt="logo" width={30} />
        airbnb
      </span>
      <nav>
        <ul className="flex gap-2">
          <li className="py-3 px-5 hover:bg-slate-100 rounded-full">
            <Link href="">Stays</Link>
          </li>
          <li className="py-3 px-5 hover:bg-slate-100 rounded-full">
            <Link href="">Experiences</Link>
          </li>
          <li className="py-3 px-5 hover:bg-slate-100 rounded-full">
            <Link href="">Online Experiences</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-2 items-center">
        <Link
          className="text-sm px-4 py-2 hover:bg-slate-100 rounded-full text-black font-semibold"
          href=""
        >
          Airbnb your home
        </Link>

        <span className="px-3 py-3 hover:bg-slate-100 rounded-full cursor-pointer">
          <Image src={globus} alt="logo" width={16} />
        </span>
        <span className="flex items-center gap-3 border rounded-full px-4 py-2 hover:shadow-md cursor-pointer">
          <Image src={hamburger} alt="logo" width={16} />
          <Image src={person} alt="logo" width={30} />
        </span>
      </div>
    </header>
  );
}
