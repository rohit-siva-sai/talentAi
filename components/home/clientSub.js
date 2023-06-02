import React from "react";

const ClientSub = ({ text, post, imgUrl }) => {
  return (
    <div className="rounded-xl bg-white flex flex-col justify-start shadow-md border">
      <div className="bg-gradient-to-r rounded-t-xl flex justify-end from-indigo-500 to-sky-500 px-6">
        <picture>
          <img src="https://www.turing.com/icons/quote.svg" alt="" />
        </picture>
      </div>
      <p className="px-6 text-gray-600 pt-4 pb-8 leading-6" >{text}</p>
      <div className="flex px-6 space-x-2 h-fit mt-auto pb-10 items-center" >
        <picture>
            <img src={imgUrl} alt="" />
        </picture>
        <p className="text-sky-500"  >{post}</p>
      </div>
    </div>
  );
};

export default ClientSub;
