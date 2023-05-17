import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "../DarkMode/DarkModeSwitch";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <>
      <header className="flex justifycenter items-center py-4 px-4 md:px-6 fixed bg-neutral-400 shadow-md w-full ">
        <nav className="container max-w-6xl mx-auto flex items-center select-none justify-between">
          <div className="flex items-center">
            <div className="left flex items-center bgblack rounded-lg font-bold">
              <Link
                href="/"
                className="flex lg:mx-6 hover:text-amber-600 py-2 px-3"
              >
                <AiFillHome className="text-2xl sm:hidden" />
                <span className="hidden sm:inline">Home</span>
              </Link>
              <Link
                href="/about"
                className="flex lg:mx-6 hover:text-amber-600 py-2 px-3"
              >
                <BsFillInfoCircleFill className="text-2xl sm:hidden" />
                <span className="hidden sm:inline">About</span>
              </Link>
            </div>
          </div>

          <div className="right flex items-center space-x-5">
            <DarkModeSwitch />

            <Link href="/">
              <h2 className="text-2xl">
                <span className="font-bold bg-amber-500 py-2 px-3 rounded-lg mr-1">
                  IMDb
                </span>
                <span className="text-xl hidden sm:inline">Clone</span>
              </h2>
            </Link>
          </div>
        </nav>
      </header>
      <NavBar />
    </>
  );
};

export default Header;
