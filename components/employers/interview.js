import React from "react";

const Interview = () => {
  return (
    <div className="bg-blue-400 mt-10 md:px-0 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[800px] md:h-[550px] ">
        <div className="flex flex-col space-y-6  items-start justify-self-center self-center md:pl-48">
          <p className="text-5xl font-semibold">
            We know exactly what to do and say to get the company, title, and
            salary you want.
          </p>
          <p className="font-light text-xl pb-4 text-gray-600">
            Interview prep and job hunting are chaos and pain. We can help.
            Really.
          </p>
          <div
            className="md:px-10 flex justify-center items-center space-x-6 px-16 md:text-lg text-sm text-white hover:opacity-90 bg-black mx-auto md:mx-0 border w-fit border-gray-500 cursor-pointer rounded-sm
             py-3"
          >
            <picture>
              <img
                src="https://interviewing.io/static/images/icon--google-color.svg"
                alt=""
              />
            </picture>
            <p>Get Started for free</p>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <picture>
            <img
              src="https://interviewing.io/static/images/FooterImg.png"
              alt=""
              className="absolute md:inset-[10%]  border-gray-800/20 border-8 md:border-[16px] rounded-2xl"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Interview;
