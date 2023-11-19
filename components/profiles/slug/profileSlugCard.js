import React from "react";
import Skills from "../skills";
import Link from "next/link";

const ProfileSlugCard = ({ developer, skills }) => {
  return (
    <div>
      <div className=" border md:px-6 rounded-xl  px-2 flex flex-col space-y-4 py-3 md:py-4 z-10  ">
        <div className="flex justify-between items-start md:items-center ">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-3 md:space-x-3 items-center">
              <div className="relative">
                <picture>
                  <img
                    src={developer?.userImage}
                    className="rounded-full md:w-[70px] w-[60px] h-[60px] md:h-[70px] border"
                    alt=""
                  />
                </picture>
                <div className="w-4 absolute h-4 rounded-full right-0 bottom-2 bg-green-600 border-2 border-white"></div>
              </div>
              <div>
                <p className="font-semibold text-lime-600 text-sm">
                  {developer?.username}
                </p>
                <div className="flex items-center space-x-2">
                  <p className="font-normal text-gray-700 text-xs md:text-sm">
                    {developer?.role}&nbsp; .
                  </p>
                  <p className="text-blue-700 text-sm">
                    {developer?.experience < 3
                      ? "Beginner"
                      : developer?.experience >= 3 && developer?.experience < 5
                      ? "Intermediate"
                      : "Advanced"}
                  </p>
                </div>
                {/* <p className="font-medium text-gray-500 text-xs  md:text-sm">
                  {developer?.country}
                </p> */}
              </div>
            </div>
            {/* <div className="flex w-fit ml-1 bg-white px-3 border-2 border-blue-700 rounded-xl space-x-1  opacity-70 items-center ">
            <AiFillThunderbolt className="text-blue-700" size={13} />
            <p className="text-blue-700 text-sm">
              {developer?.verified ? "verified" : ""}
            </p>
          </div> */}
          </div>

          <Link
            href={"https://client-a550d.web.app/"}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className="px-2 z-20 md:px-4 cursor-pointer border border-lime-500 mx-auto md:mx-0 w-fit text-lime-700  hover:text-white  hover:bg-lime-600 rounded-md
           py-1 text-xs md:text-sm hover:opacity-90"
            >
              Hire {developer?.username}
            </div>
          </Link>
        </div>

        <Skills skills={skills} message={developer?.message} />
      </div>
    </div>
  );
};

export default ProfileSlugCard;
