import Link from "next/link";
import React from "react";

const GlobalTalent = () => {
  return (
    <div className="flex flex-col items-center py-12  md:py-40  space-y-6">
      <p className=" text-4xl md:text-6xl font-bold text-gray-800 ">Hire global talent</p>
      <p className="text-4xl md:text-6xl text-center font-bold text-teal-500">
        Leave local HR logistics to us
      </p>
      <p className="md:w-2/5 text-center text-base text-gray-600">
        Via helps companies of all sizes hire and pay international teams with
        on-the-ground employment support. Our platform makes local hiring,
        benefits, payroll, and immigration seamless and compliant.
      </p>
      <Link href={""}>
        <div
          className="px-10 font-semibold hover:-translate-y-1 duration-300  cursor-pointer w-fit text-white  hover:opacity-90 bg-blue-500 rounded-full
             py-4 text-sm"
        >
          Talk to us
        </div>
      </Link>
    </div>
  );
};

export default GlobalTalent;
