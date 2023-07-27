import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
const array = [
  {
    category: "Development & IT",
    rating: "4.85",
    skills: "1853",
    link: "",
  },
  {
    category: "AI Services",
    rating: "4.8",
    skills: "294",
    link: "",
  },
  {
    category: "Design & Creative",
    rating: "4.91",
    skills: "968",
    link: "",
  },
  {
    category: "Sales and Marketing",
    rating: "4.77",
    skills: "392",
    link: "",
  },
  {
    category: "Writing & Translation",
    rating: "4.92",
    skills: "505",
    link: "",
  },
  {
    category: "Admin & Customer Support",
    rating: "4.77",
    skills: "508",
    link: "",
  },
  {
    category: "Finance & Accounting",
    rating: "4.79",
    skills: "214",
    link: "",
  },
  {
    category: "Engineering & Architecture",
    rating: "4.85",
    skills: "650",
    link: "",
  },
];

const BrowseTalent = () => {
  return (
    <div className="md:px-48 px-4 pt-6 pb-10">
      <p className="text-gray-700 text-3xl md:text-[34px]">Browse Talent by Category</p>
      <div className="flex items-center mt-1 ">
        <p>Looking for work ? &nbsp;</p>
        <Link href={""} className="underline text-lime-600">
          Browse jobs
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-4 md:gap-y-6 align-middle mt-10  ">
        {array.map((item) => {
          return (
            <Link href={""} className="bg-slate-50 pl-2 md:pl-4 pt-4 pb-12 rounded-lg hover:shadow-md transition-shadow duration-300 ">
              <div>
                <p className="text-base font-semibold text-gray-800">{item.category}</p>
                <div className="flex space-x-6 items-center mt-3 text-gray-500 text-sm">
                  <div className="flex space-x-1 items-center">
                    <AiFillStar className="text-lime-600" />
                    <p>{item.rating}/5</p>
                  </div>
                  <p>{item.skills} skills</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseTalent;
