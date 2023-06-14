import Link from "next/link";
import React from "react";

const Advisory = () => {
  return (
    <div className="py-6">
      <div className="md:grid flex flex-col-reverse md:grid-cols-2 px-4 md:px-48 justify-items-start  align-middle ">
        <div className="">
          <picture>
            <img
              src="https://d2mk45aasx86xg.cloudfront.net/Turing_Services_9913a8f414.svg"
              alt=""
              className="h-[450px] "
            />
          </picture>
        </div>
        <div className="   self-center justify-self-end flex flex-col">
          <p className="font-semibold text-3xl text-gray-700 ">
            AI advisory services
          </p>
          <p className="text-gray-600 text-base pt-5">
            Supercharge software develpment with our Ai-enhanced development pilot program . By leveraging our cutting-edge Ai models. Turing developers can build with unparalleld speed, efficiency, ad accuracy for faster project delivery, cost savings, and a competitive edge for your business.
          </p>
          <p className="text-gray-600 pt-5 ">
           Discover streamlined workflows, enhanced productivity, seamless integration, expert support, and continous improvement from the leader in Ai-driven development.
          </p>

          <Link href={"/advisory"}>
          <div
            className="px-6 cursor-pointer w-fit text-white mt-10 bg-blue-500 rounded-md
           py-2 text-sm hover:opacity-90 "
          >
            Sign up to learn more
          </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Advisory;
