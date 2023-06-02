import React from "react";

const Hirenow = () => {
  return (
    <div className="bg-gray-100 pt-10 pb-4 rounded-lg grid grid-cols-2 w-3/5 mx-auto">
      <div className="flex flex-col space-y-2  justify-self-center">
        <p className="text-2xl text-gray-800 font-semibold" >Hire Ml engineers through <br /> Turing in 4 steps</p>
        <picture>
          <img
            src="https://peopleprofilers.com/wp-content/uploads/2021/07/employment-and-workpass.png"
            alt=""
            className="w-72"
          />
        </picture>
      </div>
      <div className="flex flex-col self-center space-y-8">
        <div className="flex space-x-2 items-center">
          <div className="w-8 h-8 flex justify-center items-center text-base rounded-full border border-blue-500 text-blue-500 font-semibold">
            <p>1</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-gray-800 font-semibold text-sm">
              Tell us the skills you need
            </p>
            <p className="text-xs text-gray-500 font-medium">
              We&#39;ll schedule a call and understand your requirements.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="w-8 h-8 flex justify-center items-center text-base rounded-full border border-blue-500 text-blue-500 font-semibold">
            <p>2</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-gray-800 font-semibold text-sm">
              We find the best talent for you
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Get a list of pre-vetted candidates within days.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="w-8 h-8 flex justify-center items-center text-base rounded-full border border-blue-500 text-blue-500 font-semibold">
            <p>3</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-gray-800 font-semibold text-sm">
              Schedule interviews
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Meet and select the developers you like.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 items-center">
          <div className="w-8 h-8 flex justify-center items-center text-base rounded-full border border-blue-500 text-blue-500 font-semibold">
            <p>4</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-gray-800 font-semibold text-sm">
              Begin your trail
            </p>
            <p className="text-xs text-gray-500 font-medium">
              Start building with a no-risk trail period.
            </p>
          </div>
        </div>
        <div className="text-white bg-blue-500 px-4 py-2 w-fit text-sm rounded ml-8" >
            Hire ML engineers now
        </div>
      </div>
    </div>
  );
};

export default Hirenow;
