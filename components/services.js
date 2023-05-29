import React from "react";

const Services = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 px-24 align-middle ">
        <div className=" pr-48 self-center flex flex-col">
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
              className="px-5 text-white hover:opacity-90 bg-blue-500 cursor-pointer rounded-sm
             py-2"
            >
              Talk to an Expert
            </div>
          </div>
        </div>
        <div>
          <picture>
            <img
              src="https://img.freepik.com/free-vector/scientists-studying-neural-connections-programmers-writing-codes-machine-brain_74855-14157.jpg?w=996&t=st=1685380602~exp=1685381202~hmac=1c3fd5e39faefdd7ac40e4f9ffb503873233e2067c0fa75548ce89005b71a916"
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
