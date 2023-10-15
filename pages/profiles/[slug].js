import Explore from "@/components/profiles/explore";

import Developer from "@/models/Developer";
import Skill from "@/models/Skill";
import { createClient } from "@sanity/client";
import mongoose from "mongoose";
import Link from "next/link";
import React from "react";
import { BsArrowBarLeft, BsArrowLeftCircleFill } from "react-icons/bs";
import { RiArrowLeftCircleLine } from "react-icons/ri";

const client = createClient({
  projectId: "qkq2pa17",
  dataset: "production",
  useCdn: false,
});

const UserProfile = ({ developer, skills }) => {
  // console.log("skils", skills, developer);

  return (
    <div className="md:mx-48 mx-4 my-12 ">
      <Link href={"/profiles"}>
        <RiArrowLeftCircleLine size={30} className="my-4" />
      </Link>
      <Explore developer={developer} skills={skills} />
    </div>
  );
};

export default UserProfile;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let developer = [];
  let skills = [];
  const { slug } = context.query;

  if (!context.resolvedUrl.includes("-")) {
    developer = await Developer.findOne({ _id: slug });

    skills = await Skill.find({ email: developer?.email });
  } else {
    const query1 = `*[_type == "profile"   && _id == '${slug}'][0] {...,skills[]->}`;
    developer = await client.fetch(query1);
    skills = developer.skills;
  }

  // console.log(context.resolvedUrl);

  // const developersData = await fetchAllDevelopersData();

  return {
    props: {
      developer: JSON.parse(JSON.stringify(developer)),
      skills: JSON.parse(JSON.stringify(skills)),
    },
  };
}

