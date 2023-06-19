import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-48 py-4 border-b border-gray-600">
      <div className="uppercase text-base font-semibold text-gray-600 tracking-wide pb-4">
        filter by category
      </div>
      <div className="flex space-x-10 justify-start items-center">
        <Link href={"/blog?category=all"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            All
          </div>
        </Link>
        <Link href={"/blog?category=product"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            Products
          </div>
        </Link>
        <Link href={"/blog?category=community"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            Community
          </div>
        </Link>
        <Link href={"/blog?category=guide"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            Guides
          </div>
        </Link>
        <Link href={"/blog?category=Case Study"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            Case Studies
          </div>
        </Link>
        <Link href={"/blog?category=company"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            Company
          </div>
        </Link>
        <Link href={"/blog?category=content strategy"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            Content Strategy
          </div>
        </Link>
        <Link href={"/blog?category=digitalStrategy"}>
          <div className="hover:text-gray-900 font-semibold text-gray-600 text-base">
            Digital Strategy
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
