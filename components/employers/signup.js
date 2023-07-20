import React from "react";
import { IoArrowForward } from 'react-icons/io5';

const Signup = () => {
  return (
    <div className="md:px-48 px-4 py-12">
      <div className="flex flex-col items-center space-y-10">
        <div className="flex flex-col space-y-6 items-center">
          <p className="text-3xl md:text-5xl text-center font-semibold">
            Signing up takes less than a minute
          </p>
          <p className="text-lg md:text-start text-center md:text-2xl text-gray-600 font-light">
            You only pay us when candidates pass your technical bar
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <div
            className="md:px-20 flex justify-center items-center space-x-1 px-20 md:text-xl text-xl text-white hover:opacity-90 bg-blue-500 cursor-pointer rounded-sm
             py-3"
          >
            <p>Give it a try</p>
            <IoArrowForward/>
          </div>
          <p className="font-light text-gray-500">or</p>
          <div
            className="md:px-20 px-20 underline underline-offset-2 decoration-2 hover:decoration-4 decoration-white text-white md:text-xl text-xl  hover:opacity-100 bg-blue-500 opacity-80 transition-all duration-500 cursor-pointer rounded-sm
             py-3"
          >
            Read our FAQ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
