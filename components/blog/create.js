import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
import Link from "next/link";

const client = createClient({
  projectId: "qkq2pa17",
  dataset: "production",
  useCdn: false,
});

const Create = ({ title, slug, category, publishedAt, body, mainImage }) => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => builder.image(source);

  return (
    <Link href={`/blog/${slug.current}`}>
      <div className=" cursor-pointer relative">
        <div className="flex flex-col space-y-3 group">
          <picture>
            <img
              src={urlFor(mainImage).url()}
              alt=""
              className="w-full h-60 opacity-90 group-hover:opacity-80 transition-transform group-hover:scale-[101%] duration-300  overflow-clip"
            />
          </picture>
          <div className="font-semibold text-xl group-hover:text-blue-600 text-gray-800 pr-4">
            {title}
          </div>
          <div className="text-gray-600 font-medium pr-4">{body}</div>
          <div className="font-semibold text-gray-600 ">{publishedAt}</div>
        </div>
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/50 text-white uppercase font-semibold text-sm ">
          {category}
        </div>
      </div>
    </Link>
  );
};

export default Create;
