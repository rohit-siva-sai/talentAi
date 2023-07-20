import React from "react";

const Heading = () => {
  return (
    <div className="md:px-48 px-4">
      <div className="flex flex-col justify-center py-10  items-center space-y-8 md:space-y-16">
        <picture>
          <img
            src="https://interviewing.io/static/images/cheetah.svg"
            alt=""
            className="w-[400px]"
          />
        </picture>
        <div className="flex flex-col items-center space-y-6">
          <p className="font-semibold  text-gray-900 text-2xl text-center  md:text-[45px]">Your best-converting channel for hiring engineers</p>
          <p className="md:text-xl text-lg font-medium w-3/4 text-center text-gray-600">
            Resumes suck. We track how candidates do in live, rigorous technical
            interviews and get you the best performers. Go from first
            conversation to offer in as little as a week.
          </p>
        </div>
        <div
              className="md:px-20 px-20 md:text-xl text-xl text-white hover:opacity-90 bg-blue-500 cursor-pointer rounded-sm
             py-3"
            >
              Get Started
            </div>
      </div>
    </div>
  );
};

export default Heading;
