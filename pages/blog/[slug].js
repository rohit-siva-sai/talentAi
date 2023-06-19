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
  console.log("in slug", blog);
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-7 pt-16 gap-x-6 place-items-start px-48">
        <div className=" col-span-3 flex flex-col space-y-5">
          <p className="uppercase font-semibold text-gray-600 tracking-wide">
            published {blog.publishedAt}
          </p>
          <div className="text-gray-900 font-semibold leading-tight text-[45px] ">
            {blog.title}
          </div>
          <div className="text-gray-700 font-medium leading-8 text-xl ">
            {blog.body}
          </div>
          
        </div>
        <div className=" relative col-span-4 pl-4">
          <picture>
            <img src={urlFor(blog.mainImage).url()} alt="" className="h-full" />
          </picture>
          <div className="absolute top-3 left-6 px-2 py-1 bg-black/40 text-white uppercase font-semibold text-sm ">
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

  // const query = `*[_type == "features" && slug.current == '${slug}'][0] {...,heading->} {...,blogs[]->} {...,services[]->} {...,caseStudy->}
  // // {...,promise->} {...,resources[]->}`;
  // // const query = `*[_type == "features"]    `;
  // const blog = await client.fetch(query);

  // const profileQuery = `*[_type == "profile"][0]`;
  // const profile = await client.fetch(profileQuery);

  return {
    props: {
      blog,
    },
  };
};
