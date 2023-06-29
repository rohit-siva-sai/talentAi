import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="md:px-48 px-0  py-4 border-b border-gray-600">
      <div className="uppercase pl-2 text-sm md:text-base font-semibold text-gray-600 tracking-wide pb-1 md:pb-4">
        filter by category
      </div>
      <div className="flex md:overflow-hidden  w-screen overflow-x-scroll py-2 space-x-4 md:space-x-10 justify-start items-center">
        <Link href={"/blog?category=all"}>
          <div className="hover:text-gray-900 pl-2 font-semibold text-gray-600 text-sm md:text-base">
            All
          </div>
        </Link>
        <Link href={"/blog?category=product"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-sm md:text-base">
            Products
          </div>
        </Link>
        <Link href={"/blog?category=community"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-sm md:text-base">
            Community
          </div>
        </Link>
        <Link href={"/blog?category=guide"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-sm md:text-base">
            Guides
          </div>
        </Link>
        <Link href={"/blog?category=Case Study"}>
          <div className="hover:text-gray-900  w-max   font-semibold text-gray-600 text-sm md:text-base">
            Case Studies
          </div>
        </Link>
        <Link href={"/blog?category=company"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-sm md:text-base">
            Company
          </div>
        </Link>
        <Link href={"/blog?category=content strategy"}>
          <div className="hover:text-gray-900  w-max font-semibold text-gray-600 text-sm md:text-base">
            Content Strategy
          </div>
        </Link>
        <Link href={"/blog?category=digitalStrategy"}>
          <div className="hover:text-gray-900 pr-2 w-max font-semibold text-gray-600 text-sm md:text-base">
            Digital Strategy
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
