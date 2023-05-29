import React from "react";

const Company = () => {
  return (
    <div className="py-6">
      <p className="text-blue-500 text-center pb-5 font-semibold text-3xl">
        <span className="text-gray-800 ">For</span>&nbsp;Companies
      </p>
      <div className="grid grid-cols-2 px-24  align-middle ">
        <div className="justify-self-start" >
          <picture>
            <img
              src="https://img.freepik.com/free-vector/cute-chatbot-greeting-people-isometric-icon-with-computer-various-objects-3d_1284-63055.jpg?w=740&t=st=1685382512~exp=1685383112~hmac=1b653bc09183d624f0388a99e3a09329a57fb26c3bb50f5278c41a0c60e507c5"
              alt=""
              className="h-[500px] "
            />
          </picture>
        </div>
        <div className=" pl-6 pr-32 self-center flex flex-col">
          <p className="font-semibold text-3xl text-gray-800 ">
            Managed Staffing
          </p>
          <p className="text-gray-600 text-base pt-5">
            Unlock the full potential your organisation. This 4-week timeboxed
            offering is designed investigate and evaluate the potential impact
            of AI methadologies on your oraganisation
          </p>
          <p className="text-gray-600 pt-5 ">
            We work with you to identify AI and data-driven solutions that can
            solve your business problems. We&#39;ll help you establish on
            impactful and optimized path forward supported by existing data and
            create a roadmap for the implementation of AI solutions. This
            includes data collection and ingestion, AI/ML modeling methods and
            an ROI framework
          </p>

          <div
            className="px-6 cursor-pointer w-fit text-white mt-10 hover:opacity-90 bg-blue-500 rounded-md
             py-2 text-sm"
          >
            Sign up to learn more
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
