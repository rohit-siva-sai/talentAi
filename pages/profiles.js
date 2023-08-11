// import connectDb from '@/middleware/mongoose';
import Developer from "@/models/Developer";
// import Skills from "@/models/Skills";
// import Experience from "@/models/Experience";
import Identity from "@/models/Identity";
import Education from "@/models/Education";
import mongoose from "mongoose";
import ProfileCard from "@/components/profiles/profileCard";
import CategoryFilter from "@/components/profiles/categoryFilter";
import { useEffect, useState } from "react";


const fetchAllDevelopersData = async () => {
  try {
    const developers = await Developer.find();
    const developersData = [];
    for (const developer of developers) {
      // const { email } = developer;
      // const skills = await Skills.find({ email });
      // const experience = await Experience.findOne({ email });
      // const identity = await Identity.findOne({ email });
      // const education = await Education.findOne({ email });

      const combinedData = {
        developer,
        // skills,
        // experience,
      };
      developersData.push(combinedData);
    }

    return developersData;
  } catch (error) {
    console.error("Error fetching developers data:", error);
    return [];
  }
};

const Profiles = ({ developersData }) => {
  // console.log("hgsachgsa", developersData);
  const [skills, setSkills] = useState([]);
  const [filterDeveloperData, setFilterDeveloperData] =
    useState(developersData);
  const fetchSkill = async (email) => {
    const data = await fetch("https://talent-ai-ochre.vercel.app/api/skill");
    const skill = await data.json();
    // console.log('sdsds',skill);
    
    setSkills(skill);
  };
  const filterSkill = (email) => {
    const data = skills.filter((item) => item.email === email);
    return data;
  };

  useEffect(() => {
    fetchSkill()
    // console.log(skills,"sahxfashgvsahxgv")
  },[developersData]);
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const filterDeveloper = (role) => {
    if (role == "All categories") {
      setFilterDeveloperData(developersData);
      return;
    }

    const data = developersData.filter((item) => item.developer.role === role);
    setFilterDeveloperData(data);
  };

  return (
    <div className="px-48 py-8 min-h-screen ">
      <div className="grid grid-cols-12 gap-x-1 ">
        <CategoryFilter
          categoryFilter={categoryFilter}
          filterDeveloper={filterDeveloper}
        />
        {filterDeveloperData.length < 1 && (
          <picture className="place-self-center col-span-9 ">
            <img
              src="https://img.freepik.com/premium-photo/white-people-examines-folder_58466-2854.jpg"
              alt=""
              className=""
            />
          </picture>
        )}
        <div className="flex flex-col space-y-0 col-span-9 ">
          {filterDeveloperData.map((developerData) => {
            return (
              <ProfileCard
                developer={developerData.developer}
                // education={developerData.education}
                // experience={developerData.experience}
                // identity={developerData.identity}
                skills={filterSkill(developerData.developer.email)}
              />
            );
          })}
        </div>
      </div>
      {/* {developersData.map((developerData, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <h2>{developerData.developer.userName}</h2>
            <p>Email: {developerData.developer.email}</p>
            <p>Role: {developerData.developer.role}</p>

            <h3>Skills</h3> */}
      {/* {developerData.skills ? (
              <ul>
                {developerData.skills.skill.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p>No skills data available.</p>
            )} */}

      {/* Similarly, add sections for experience, identity, and education */}
      {/* </div>
        ))} */}
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const developersData = await fetchAllDevelopersData();
 
  return {
    props: {
      developersData: JSON.parse(JSON.stringify(developersData)),
    },
  };
}

export default Profiles;
