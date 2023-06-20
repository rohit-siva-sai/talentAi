import Create from "@/components/blog/create";
import Navbar from "@/components/blog/navbar";
import { createClient } from "@sanity/client";
import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";

const client = createClient({
  projectId: "qkq2pa17",
  dataset: "production",
  useCdn: false,
});

const Blog = ({ blog }) => {
  const router = useRouter();
  // console.log("sss", router.query.category);
  const [blogs,setBlogs] = useState(blog)

  useEffect(() => {
   
    const sea = blog.filter((item) => item.category === router.query.category);
    setBlogs(sea)
    if(router.query.category==="all")
    {
      setBlogs(blog)
    }
  }, [router]);

  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="grid  grid-cols-1 md:grid-cols-3 py-12 gap-y-12 px-4  md:px-48 md:gap-x-6 ">
        {blogs.map((item) => {
          return (
            <Create
              title={item.title}
              slug={item.slug}
              body={item.body}
              mainImage={item.mainImage}
              publishedAt={item.publishedAt}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const query2 = `*[_type == "post"]`;
  const blog = await client.fetch(query2);

 

  return {
    props: {
      blog,
    },
  };
};
