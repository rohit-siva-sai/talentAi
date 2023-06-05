import React from "react";

const Services = () => {
  return (
    <div className="py-6 ">
      <div className="grid grid-cols-1  px-4 md:grid-cols-2 md:px-48 justify-items-start align-middle ">
        <div className="self-center md:w-[450px] flex flex-col">
          <p className="font-semibold text-[40px] text-gray-800 ">
            The new standard in AI Services
          </p>
          <p className="text-gray-600 text-base pt-5">
            Business transformation is AI transformation. Get business solutions
            fron the professionals in artificial intellegence and machine
            learning
          </p>
          <p className="text-gray-600 pt-5 ">
            Our experts have mastered AI/ML development and implementation for
            top tech companies, including us.
          </p>
          <div className="flex  pt-12">
            <input
              type="email"
              name=""
              id=""
              className="outline-none border py-1 placeholder:text-sm text-gray-600 px-3 rounded border-gray-300 placeholder:text-gray-400"
              placeholder="Your work email"
            />
            <div
              className="md:px-5 px-2 md:text-base text-xs text-white hover:opacity-90 bg-blue-500 cursor-pointer rounded-sm
             py-2"
            >
              Talk to an Expert
            </div>
          </div>
        </div>
        <div className="justify-self-end">
          <picture>
            <img
              src="https://d2mk45aasx86xg.cloudfront.net/AI_Services_f6eae42bac.svg"
              alt=""
              className="h-[500px]"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Services;
