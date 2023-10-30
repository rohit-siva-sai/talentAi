import { profileFilter } from "@/useStore/filterProfile";
import { useRouter } from "next/router";
import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const Colleagues = () => {
  const router = useRouter();
  const [allProfiles, filterByCategory] = profileFilter((store) => [
    store.allProfiles,
    store.filterByCategory,
  ]);
  return (
    <div className="pt-2 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-48 justify-items-start align-top  ">
        <div className="    flex flex-col space-y-8 pr-12">
          <p className="font-semibold text-gray-800 text-4xl">
            The Best Colleagues you've never met
          </p>
          <p className="text-gray-600 font-medium">
            Logo designers. App developers. Customer support gurus. Marketing
            agencies. Make the right connection and it'll last a lifetime
          </p>
          <div className="flex flex-wrap pr-16 ">
            <div
              className="flex items-center rounded-3xl border mr-8  bg-lime-50 py-1 cursor-pointer px-3 w-fit space-x-2"
              onClick={() => {
                router.push("/profiles");
              }}
            >
              <p className="text-gray-700 font-medium">Data Analyst</p>
              <FaArrowRight className="text-gray-600" size={15} />
            </div>
            <div
              className="flex items-center rounded-3xl border  mr-8 bg-lime-50 py-1 px-3 w-fit space-x-2"
              onClick={() => {
                router.push("/profiles");
              }}
            >
              <p className="text-gray-700 font-medium">Data Engineer</p>
              <FaArrowRight className="text-gray-600" size={15} />
            </div>
            <div
              className="flex items-center rounded-3xl border mr-8 mt-4  bg-lime-50 py-1 px-3 w-fit space-x-2"
              onClick={() => {
                router.push("/profiles");
              }}
            >
              <p className="text-gray-700 font-medium">Data Scientist</p>
              <FaArrowRight className="text-gray-600" size={15} />
            </div>
            <div
              className="flex items-center rounded-3xl border mt-4 bg-lime-50 py-1 px-3 w-fit space-x-2"
              onClick={() => {
                router.push("/profiles");
              }}
            >
              <p className="text-gray-700 font-medium">ML Engineer</p>
              <FaArrowRight className="text-gray-600" size={15} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 ">
          <div className="flex flex-col px-4 space-y-2 border-t-2 py-2">
            <div className="flex  space-x-4 items-center">
              <BsStarFill size={28} className="text-blue-500" />
              <p className="text-3xl font-semibold text-gray-600">4.9/5</p>
            </div>
            <p className="text-sm font-semibold text-gray-500">
              Average rating of talent from 2M+ reviews
            </p>
          </div>
          <div className="flex flex-col px-4 space-y-2 border-t-2 py-2">
            <p className="text-3xl font-semibold text-gray-600">8K+</p>

            <p className="text-sm font-semibold text-gray-500">
              Skills represented by talent on upwork
            </p>
          </div>
          <div className="flex flex-col px-4 space-y-2 border-t-2 py-2">
            <p className="text-3xl font-semibold text-gray-600">8K+</p>
            <p className="text-sm font-semibold text-gray-500">
              Skills represented by talent on upwork
            </p>
          </div>
          <div className="flex flex-col px-4 space-y-2 border-t-2 py-2">
            <p className="text-3xl font-semibold text-gray-600">8K+</p>
            <p className="text-sm font-semibold text-gray-500">
              Skills represented by talent on upwork
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colleagues;
