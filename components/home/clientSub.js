import React from "react";

const ClientSub = ({ text, post, imgUrl,name }) => {
  return (
    <div className="rounded-xl bg-white flex flex-col justify-start shadow-md border">
      <div className="bg-gradient-to-r rounded-t-xl flex justify-end from-blue-500 to-white px-6">
        <picture>
          <img src="/bg.png" alt="" className="w-10" />
        </picture>
      </div>
      <p className="px-6 text-gray-600 pt-4 pb-8 leading-6">"{text}"</p>
      <div className="flex flex-col px-6 space-y-1 h-fit mt-auto pb-10 items-center">
        <span class="inline-block h-1 w-10 rounded bg-blue-500 mb-3"></span>
        <h2 class="text-gray-900 font-medium uppercase title-font tracking-wider text-sm">
          {name}
        </h2>
        <p class="text-gray-500 text-center text-sm">{post}</p>
      </div>
    </div>
  );
};

export default ClientSub;
