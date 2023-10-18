import { create } from "zustand";
import { persist } from "zustand/middleware";

const filterProfile = (set) => ({
  profiles: [],
  temp: [],
  allProfiles: [],
  titleActive: "",
  newRfq: 0,
  changeUser: 0,

  updateProfiles: async (value) => set((store) => ({ profiles: value })),
  updateAllProfiles: async (value) => set((store) => ({ allProfiles: value })),
  filterByCategory: async (value) =>
    set((store) => ({
      profiles:
        value == "All categories"
          ? store.allProfiles
          : store.allProfiles.filter((item) => item.role.includes(value)),
      temp: store.profiles,
    })),
  filterBySkill: async (value) =>
    set((store) => ({
      profiles:
        value == "all skills"
          ? store.allProfiles
          : store.temp.filter((profile) => {
              return profile.skills.some((user) =>
                user.skill.map((word) => word.toLowerCase()).includes(role)
              );
            }),
    })),
  
  updateNewRfq: async (value) => set((store) => ({ newRfq: Math.random() })),
  updateChangeUser: async (value) =>
    set((store) => ({ changeUser: Math.random() })),
});

export const profileFilter = create(filterProfile, { name: "filterProfile" });
