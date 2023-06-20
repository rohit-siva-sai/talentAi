import { createClient } from "@sanity/client";
import React from "react";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "qkq2pa17",
  dataset: "production",
  useCdn: false,
});

const Post = ({ blog }) => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => builder.image(source);
  // console.log("in slug", blog);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-y-0 gap-y-6 pt-16 gap-x-6 place-items-start px-4 md:px-48">
        <div className=" col-span-3 flex flex-col space-y-5">
          <p className="uppercase font-semibold text-gray-600 tracking-wide">
            published {blog.publishedAt}
          </p>
          <div className="text-gray-900 font-semibold leading-tight text-4xl md:text-[45px] ">
            {blog.title}
          </div>
          <div className="text-gray-700 font-medium leading-8 text-xl ">
            {blog.body}
          </div>
          
        </div>
        <div className=" relative col-span-4 md:pl-4">
          <picture>
            <img src={urlFor(blog.mainImage).url()} alt="" className="h-full" />
          </picture>
          <div className="absolute top-3 left-3 md:left-6 px-2 py-1 bg-black/40 text-white uppercase font-semibold text-sm ">
          {blog.category}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const query2 = `*[_type == "post" && slug.current == '${slug}'][0]  `;
  const blog = await client.fetch(query2);

  

  return {
    props: {
      blog,
    },
  };
};
