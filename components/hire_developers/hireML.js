import React from "react";
import Companies from "./companies";

const HireML = () => {
  return (
    <div className="py-20  md:px-0 px-4" >
      <div className="flex md:flex-row flex-col md:justify-center md:space-y-0 space-y-10 md:space-x-12">
        <div className="md:w-[600px]">
          <p className="md:text-5xl text-3xl font-semibold text-gray-800" >Hire ML engineers remotely within 3-5 days</p>
          <p className="text-gray-600 pt-8 pb-8 " >
            Turing source engineers planet-wide and helps you hire the best
            remorte Ml engineers vetted for a Silicon Valley bar. Hire today and
            leverage our AI-based Intelligent Talent Cloud to spin up your
            engineering team.
          </p>
          <div className="flex pt-2">
            <input
              type="email"
              name=""
              id=""
              className="outline-none border py-1 placeholder:text-sm text-gray-600 px-3 rounded border-gray-300 placeholder:text-gray-400 w-52"
              placeholder="Your work email"
            />
            <div
              className="md:px-5 px-2 md:text-base text-xs text-white hover:opacity-90 bg-blue-500 cursor-pointer rounded-sm
             py-2"
            >
              Hire ML engineers now
            </div>
          </div>
          <p className="text-xs pl-1 text-gray-500 font-semibold pt-2" >Get 2-week risk-free trial</p>
          <Companies/>
        </div>
        <div className="">
          <picture>
            <img
              src="https://img.freepik.com/free-vector/artificial-intelligence-vector-concept-illustration-isolated-white-background_8130-2315.jpg?w=740&t=st=1685631856~exp=1685632456~hmac=2f867ed0deabd50aeb5ffd54945dd6582fe43ddbac1e58b979419560c5b6b527"
              alt=""
              className="w-[450px]"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default HireML;
