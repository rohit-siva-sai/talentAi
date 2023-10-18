// import connectDb from '@/middleware/mongoose';
import Developer from "@/models/Developer";
// import Skills from "@/models/Skills";
// import Experience from "@/models/Experience";
import Identity from "@/models/Identity";
import Education from "@/models/Education";
import mongoose from "mongoose";
import ProfileCard from "@/components/profiles/profileCard";
import CategoryFilter from "@/components/profiles/filters/categoryFilter";
import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { BsFillFilterCircleFill, BsFilterCircle } from "react-icons/bs";
import { useRouter } from "next/router";
import Skill from "@/models/Skill";

const fetchAllDevelopersData = async () => {
  try {
    const developersData = await Developer.find();
    // console.log('developres',developers);

    // const developersData = [];
    // for (const developer of developers) {
    //   // const { email } = developer;
    //   // const skills = await Skills.find({ email });
    //   // const experience = await Experience.findOne({ email });
    //   // const identity = await Identity.findOne({ email });
    //   // const education = await Education.findOne({ email });

    //   const combinedData = {
    //     developer,
    //     // skills,
    //     // experience,
    //   };
    //   developersData.push(combinedData);
    // }

    return developersData;
  } catch (error) {
    console.error("Error fetching developers data:", error);
    return [];
  }
};

const Profiles = ({developersData,skills}) => {
  // console.log("hgsachgsa", developersData);
  // const [skills, setSkills] = useState([]);
  const [placement, setPlacement] = useState("top");
  const router = useRouter();

  const [showFilter, setShowFilter] = useState(false);
  // const [developersData, setDevelopersData] = useState();
  const [filterDeveloperData, setFilterDeveloperData] = useState(developersData);

  const [loading,setLoading] = useState(false)

  // const fetchDevelopers = async () => {


  //   try {
  //     const data = await fetch("https://talent-ai-ochre.vercel.app/api/developer");
  //     if (!data.ok) {
  //       throw new Error(`Failed to fetch: ${data.status} - ${data.statusText}`);
  //     }
  //     const dev = await data.json();
  //     setDevelopersData(dev);
  //     setFilterDeveloperData(dev);
  //     setLoading(false)
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //   }
  //   // const data = await fetch("https://talent-ai-ochre.vercel.app/api/developer");
  //   // const dev = await data.json();

  //   // setDevelopersData(dev);
  // };

  // const fetchSkill = async (email) => {

  //   try {
  //     const data = await fetch("https://talent-ai-ochre.vercel.app/api/skill");
  //     if (!data.ok) {
  //       throw new Error(`Failed to fetch: ${data.status} - ${data.statusText}`);
  //     }
  //     const skill = await data.json();
  //     setSkills(skill);
     
  //   } catch (error) {
  //     console.error("Fetch error:", error);
  //   }
  //   // const data = await fetch("https://talent-ai-ochre.vercel.app/api/skill");
  //   // const skill = await data.json();
  //   // // console.log('sdsds',skill);

  //   // setSkills(skill);
  // };
  const onClose = () => {
    setShowFilter(!showFilter);
  };
  const filterSkill = (email) => {
    const data = skills.filter((item) => item.email === email);
    return data;
  };

  // useEffect(() => {
  //   fetchDevelopers();
  //   fetchSkill();
  //   // console.log(skills,"sahxfashgvsahxgv")
  // }, [router]);
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const filterDeveloper = (role) => {
    if (role == "All categories") {
      setFilterDeveloperData(developersData);
      return;
    }

    const data = developersData.filter((item) => item.role === role);
    setFilterDeveloperData(data);
  };
  const showDrawer = () => {
    setShowFilter(!showFilter);
  };
  return (
    <div className="px-4 md:px-48 py-4 md:py-8 min-h-screen relative">
      <div
        onClick={showDrawer}
        className="md:hidden flex justify-end mx-4 pb-4"
      >
        <BsFilterCircle size={22} className="text-lime-600 " />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-1  ">
        <Drawer
          placement={placement}
          width={800}
          height={825}
          className="rounded-l-3xl md:hidden block "
          open={showFilter}
          onClose={onClose}
        >
          <CategoryFilter
            categoryFilter={categoryFilter}
            filterDeveloper={filterDeveloper}
          />
        </Drawer>
        <div className={` md:block hidden md:col-span-3`}>
          <CategoryFilter
            categoryFilter={categoryFilter}
            filterDeveloper={filterDeveloper}
          />
        </div>
        {(filterDeveloperData?.length < 1 || loading ) && (
          <picture className="place-self-center col-span-full md:col-span-9 ">
            <img
              src="https://img.freepik.com/premium-photo/white-people-examines-folder_58466-2854.jpg"
              alt=""
              className=""
            />
          </picture>
        )}
        <div className="flex flex-col space-y-0 col-span-full md:col-span-9 ">
          {filterDeveloperData?.map((developerData) => {
            return (
              <ProfileCard
                developer={developerData}
                // education={developerData.education}
                // experience={developerData.experience}
                // identity={developerData.identity}
                skills={filterSkill(developerData.email)}
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

  const developersData = await Developer.find().lean();
  const skills = await Skill.find().lean();

  // const developersData = await fetchAllDevelopersData();

  return {
    props: {
      developersData: JSON.parse(JSON.stringify(developersData)),
      skills: JSON.parse(JSON.stringify(skills)),
    },
  };
}

export default Profiles;
