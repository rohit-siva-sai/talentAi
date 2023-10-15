import React, { useState } from "react";
import { createClient } from "@sanity/client";
import { Drawer } from "antd";
import { BsFilterCircle } from "react-icons/bs";
import CategoryFilter from "@/components/profiles/categoryFilter";
import ProfileCard from "@/components/profiles/profileCard";

const client = createClient({
  projectId: "qkq2pa17",
  dataset: "production",
  useCdn: false,
});

export const getServerSideProps = async (context) => {
  const { slug } = context.query;

  const query2 = `*[_type == "profile"] {...,skills[]->}`;
  const profiles = await client.fetch(query2);

  return {
    props: {
      profiles,
    },
  };
};

const SanityProfile = ({ developersData, profiles }) => {
  console.log("profiels", profiles[0].skills);

  const [filterDeveloperData, setFilterDeveloperData] = useState(profiles);

  const [showFilter, setShowFilter] = useState(false);
  const [placement, setPlacement] = useState("top");

  const onClose = () => {
    setShowFilter(!showFilter);
  };
  const filterSkill = (email) => {
    const data = skills.filter((item) => item.email === email);
    return data;
  };

  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const filterDeveloper = (role) => {
    if (role == "All categories") {
      setFilterDeveloperData(profiles);
      return;
    }

    const data = profiles.filter((item) => item.role === role);
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
        {filterDeveloperData?.length < 1 && (
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
                skills={developerData.skills}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SanityProfile;


