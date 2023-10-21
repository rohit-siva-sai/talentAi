import Link from "next/link";
import React from "react";

const Workforce = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-48 justify-items-start align-top  ">
        <div className="    flex flex-col">
          <p className="font-semibold text-3xl md:text-[40px] text-gray-800 leading-snug  md:leading-[52px] ">
            A new way to build your <br /> tech workforce
          </p>
          <p className="text-gray-700 font-medium text-sm md:text-base mt-5">
            Forget the old rules. You can have the best people.
            <br /> Right now. Right here.
          </p>

          <div className="flex space-x-4 mt-8">
            <Link href={"/sanityProfile"}>
              <div
                className="px-8 md:px-10 cursor-pointer mx-auto md:mx-0 w-fit text-white  bg-lime-600 rounded-md
             py-2 text-sm hover:opacity-90"
              >
                Browse Talents
              </div>
            </Link>
            <Link href={"/training"}>
              <div
                className="px-10 md:px-12 cursor-pointer mx-auto md:mx-0 w-fit text-white  bg-blue-500 rounded-md
             py-2 text-sm hover:opacity-90"
              >
                Hire now
              </div>
            </Link>
          </div>
          <div className="mt-10">
            <p className="text-gray-400 font-semibold text-2xl ">Trusted By</p>
            <div className="flex space-x-8 items-center mt-2">
              <picture>
                <img
                  src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
                  alt=""
                  className="w-32 "
                />
              </picture>
              <picture>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
                  alt=""
                  className="w-28"
                />
              </picture>
              <picture>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Bissell_logo.svg/1200px-Bissell_logo.svg.png"
                  alt=""
                  className="w-20"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="justify-self-end ">
          <picture>
            <img
              src="https://d2mk45aasx86xg.cloudfront.net/Turing_Developers_d3807bfc1c.svg"
              alt=""
              className="h-[450px] w-fit "
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Workforce;
