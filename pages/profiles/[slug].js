import Explore from "@/components/profiles/explore";
import BasicInfo from "@/components/profiles/slug/basicInfo";
import Education from "@/components/profiles/slug/education";
import ProjectHistory from "@/components/profiles/slug/projectHistory";
import WorkExperience from "@/components/profiles/slug/workExperience";

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
    <div className="md:mx-48 mx-4 mb-12 mt-4 ">
      <Link href={"/sanityProfile"}>
        <RiArrowLeftCircleLine size={30} className="my-4" />
      </Link>
      <div className="flex flex-col space-y-6">
        <BasicInfo developer={developer} skills={skills} />
        <WorkExperience workExperience={developer.workExperience} />
        <ProjectHistory projectHistory={developer.projectHistory} />
        <Education education={developer.education} />
      </div>
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

  // if (!context.resolvedUrl.includes("-")) {
  //   developer = await Developer.findOne({ _id: slug });

  //   skills = await Skill.find({ email: developer?.email });
  // } else {
  //   const query1 = `*[_type == "profile"   && _id == '${slug}'][0] {...,skills[]->}`;
  //   developer = await client.fetch(query1);
  //   skills = developer.skills;
  // }

  const query1 = `*[_type == "profile"  && slug.current == '${slug}'][0] {...,skills[]->} {...,workExperience[]->} {...,education[]->} {...,projectHistory[]->} `;
  developer = await client.fetch(query1);
  skills = developer.skills;

  // console.log(context.resolvedUrl);

  // const developersData = await fetchAllDevelopersData();

  return {
    props: {
      developer: JSON.parse(JSON.stringify(developer)),
      skills: JSON.parse(JSON.stringify(skills)),
    },
  };
}
