"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/icons/airbnb-logo.svg";
import globus from "@/icons/globus.svg";
import Search from "../search/Search";
import DropdownMenuRadioGroupDemo from "../dropDown/DropDown";

export default function Header() {
  const [scroll, setSctroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSctroll(true);
        // console.log("Scrolled down 100px");
      }

      if (window.scrollY < 10) {
        setSctroll(false);
        // console.log("Scrolled down 10px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 z-10 bg-white w-full">
      <header className="flex justify-between  items-center px-20 py-4">
        <span className="flex items-center gap-2 text-[rgb(255,56,92)] w-[250px] text-2xl font-bold cursor-pointer">
          <Image src={logo} alt="logo" width={30} />
          <span className="hidden lg:block">airbnb</span>
        </span>
        {!scroll && (
          <nav className="hidden lg:block transition-all">
            <ul className="flex items-center">
              <li className="py-2 px-5 hover:bg-slate-100 rounded-full">
                <Link href="">Stays</Link>
              </li>
              <li className="py-2 px-5 hover:bg-slate-100 rounded-full">
                <Link href="">Experiences</Link>
              </li>
              <li className="py-2 px-5 hover:bg-slate-100 rounded-full">
                <Link href="">Online Experiences</Link>
              </li>
            </ul>
          </nav>
        )}
        {scroll && <Search />}
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
          <DropdownMenuRadioGroupDemo />
        </div>
      </header>
      <div className="flex flex-col justify-center items-center gap-8">
        <nav className="block lg:hidden">
          <ul className="flex items-center">
            <li className="py-2 px-5 hover:bg-slate-100 rounded-full">
              <Link href="">Stays</Link>
            </li>
            <li className="py-2 px-5 hover:bg-slate-100 rounded-full">
              <Link href="">Experiences</Link>
            </li>
            <li className="py-2 px-5 hover:bg-slate-100 rounded-full">
              <Link href="">Online Experiences</Link>
            </li>
          </ul>
        </nav>

        {!scroll && <Search />}
      </div>
    </div>
  );
}
