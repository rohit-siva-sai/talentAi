import Link from "next/link";
import React from "react";

const SolutionSub = ({imgUrl,head,text,link}) => {
  return (
    <div className="flex flex-col space-y-4 hover:scale-95 scale-100 transition-transform duration-500  px-5 py-4 border rounded-lg">
      <picture>
        <img src={imgUrl} alt="" className="rounded" />
      </picture>
      <p className="font-semibold text-lg text-gray-800 " >{head}</p>
      <p className="text-sm font-extralight text-gray-600 " >{text}</p>
      <Link href={link}>
        <div className="px-4 py-1 border w-fit h-fit mb-auto hover:bg-blue-50 rounded border-blue-500 text-blue-500">
          Read more
        </div>
      </Link>
    </div>
  );
};

export default SolutionSub;
