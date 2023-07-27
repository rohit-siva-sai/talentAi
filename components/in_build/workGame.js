import Link from "next/link";
import React from "react";
import { TbEdit,TbMessageStar } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { BsPinAngle } from "react-icons/bs";

const WorkGame = () => {
  return (
    <div className="md:px-48 px-4 pt-6 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 gap-x-6 align-middle justify-items-center space-x-6">
        <div>
          <picture>
            <img
              src="https://img.freepik.com/free-vector/flat-design-join-us-message_23-2148954904.jpg?w=2000"
              alt=""
              className="rounded-xl"
            />
          </picture>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700">
            Up your work game, it's free
          </p>
          <div className="flex flex-col space-y-4 mt-7">
            <div className="flex items-start space-x-3 ">
              <TbEdit size={25} />
              <div className="flex flex-col space-y-1 ">
                <p className="text-gray-800 font-medium text-lg">
                  No cost to join
                </p>
                <p className="text-slate-600 text-sm">
                  Register and browse professionals, explore projects, and even
                  book a consultation
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 ">
              <BsPinAngle size={25} />
              <div className="flex flex-col space-y-1 ">
                <p className="text-gray-800 font-medium text-lg">
                  Post a job and hire top talent
                </p>
                <p className="text-slate-600 text-sm">
                  Finding talent doesn’t have to be a chore. Post a job or we
                  can search for you!
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 ">
              <AiFillStar size={25} />
              <div className="flex flex-col space-y-1 ">
                <p className="text-gray-800 font-medium text-lg">
                  Work with the best—without breaking the bank
                </p>
                <p className="text-slate-600 text-sm">
                  Upwork makes it affordable to up your work and take advantage
                  of low transaction rates.
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-3 md:space-x-6 mt-6">
            <Link href={""}>
              <div
                className="px-6 md:px-10 font-semibold  cursor-pointer w-fit text-white  hover:opacity-90 bg-lime-600 rounded-3xl
             py-2 text-sm"
              >
                Sign up for free
              </div>
            </Link>
            <Link href={""}>
              <div
                className="px-4 md:px-8 font-semibold cursor-pointer text-lime-600 w-fit  hover:opacity-90 border border-lime-600 rounded-3xl
             py-2 text-sm"
              >
                Learn how to hire
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkGame;
