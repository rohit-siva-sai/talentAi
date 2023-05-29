import React from "react";

const Aiaccelerator = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-2 px-24 align-middle ">
        <div className=" pr-24 self-center flex flex-col">
          <p className="font-semibold text-3xl text-gray-700 ">
            AI accelerator program
          </p>
          <p className="text-gray-600 text-base pt-5">
            Get extensive Ai knowledge and experience to revolutionize your business. Trusted by hundreds of comapnies and VCs, Turing is offering AI advice from our experts.
          </p>
          <p className="text-gray-600 pt-5 ">
            This free service empowers companies to realize the numerous benifits of AI, gain a solid understanding of its fundamentals and core technologies, and ultimately unlock the full potential of AI and machine learning. With Ai Advisory, companies will gain access to Turing&#39;s extensive knowledge and experience, enabling them to frame their Ai strategy and stay ahead of the curve.
          </p>

          <div
            className="px-6 cursor-pointer w-fit text-white mt-10 bg-blue-500 rounded-md
             py-2 text-sm hover:opacity-90"
          >
            Sign up to learn more
          </div>
        </div>
        <div className="justify-self-center ">
          <picture>
            <img
              src="https://d2mk45aasx86xg.cloudfront.net/Turing_Developers_d3807bfc1c.svg"
              alt=""
              className="h-[500px] "
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Aiaccelerator;
