import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";
import { MdKeyboardArrowDown, MdOutlineSegment } from "react-icons/md";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <div className=" bg-white z-50 md:px-48 px-4">
      <div className="flex md:flex-row flex-row items-center justify-between px-4 space-y-0 md:space-y-0 md:justify-around md:items-center md:px-d48 md:py-4 py-2  ">
        <Link href={"/"}>
          <Image
            src={
              "https://images.ctfassets.net/1ftmfglj9bn4/McxHzP0XSWJauXq6Plgnj/691a6817a1415f7aa83c08f4a584a992/logo_ff5506b501.svg"
            }
            width={100}
            height={100}
          />
        </Link>
        <div
          onClick={() => {
            setShowNav(!showNav);
          }}
          className="md:hidden block"
        >
          <MdOutlineSegment size={30} />
        </div>
        <div
          className={`${
            showNav
              ? "flex  absolute top-0 py-8 px-12 md:py-0 left-0 bg-white w-full md:flex-row flex-col shadow-md space-y-16 border-b"
              : "hidden"
          } md:flex flex-col md:flex-row  md:shadow-none md:space-y-0 md:border-none md:items-center  md:space-x-16`}
        >
          <div
            className={`flex space-y-5 md:space-y-0  flex-col md:flex-row items-start md:items-center md:space-x-8  `}
          >
            <div
              className="w-fit md:hidden block ml-auto"
              onClick={() => {
                setShowNav(false);
              }}
            >
              <GiCrossMark size={25} />
            </div>
            <div
              className="group   cursor-pointer flex items-center"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              <p className="group-hover:text-blue-500 text-xl  md:text-[15px] text-gray-700">
                How it works
              </p>
              <MdKeyboardArrowDown
                size={18}
                className={`${
                  dropDown ? "rotate-180" : "rotate-0"
                }  duration-300 `}
              />
            </div>
            <Link href={""}>
              <div className="hover:text-blue-500 text-xl md:text-[15px]  text-gray-700 font-normal">
                Countries
              </div>
            </Link>
            <div
              className="group cursor-pointer flex items-center"
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              <p className="group-hover:text-blue-500 text-xl md:text-[15px] text-gray-700">
                About Us
              </p>
              <MdKeyboardArrowDown
                size={18}
                className={`${
                  dropDown ? "rotate-180" : "rotate-0"
                }  duration-300 `}
              />
            </div>
            <Link href={""}>
              <div className="hover:text-blue-500 text-xl md:text-[15px] text-gray-700 font-normal">
                Partners
              </div>
            </Link>
            <Link href={""}>
              <div className="hover:text-blue-500 text-xl md:text-[15px] text-gray-700 font-normal">
                Pricing
              </div>
            </Link>
            <Link href={"/blog"}>
              <div className="hover:text-blue-500 text-xl md:text-[15px] text-gray-700 font-normal">
                Blog
              </div>
            </Link>
          </div>

          <div className="flex space-y-4 md:space-y-0 md:flex-row flex-col md:justify-center text-[15px] items-center md:items-center  md:space-x-8">
            <Link href={""}>
              <div className="hover:text-blue-500 md:border-none border py-4 md:py-0 px-24 md:px-0 rounded-full text-gray-700 font-normal">
                Log In
              </div>
            </Link>

            <Link href={"/"}>
              <div
                className="md:px-10 px-24  font-semibold   hover:-translate-y-1 duration-300  cursor-pointer md:w-fit text-white  hover:opacity-90 bg-gray-800 rounded-full
             py-4 text-sm "
              >
                Talk to us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
