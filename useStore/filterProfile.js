import { create } from "zustand";
import { persist } from "zustand/middleware";

const filterProfile = (set) => ({
  profiles: [],
  tempProfiles: [],
  allProfiles: [],
  titleActive: "",
  newRfq: 0,
  changeUser: 0,
  category: "All categories",

  updateProfiles: async (value) => set((store) => ({ profiles: value })),
  updateAllProfiles: async (value) => set((store) => ({ allProfiles: value })),
  updateTempProfiles: async (value) =>
    set((store) => ({ tempProfiles: value })),
  filterByCategory: async (value) =>
    set((store) => ({
      profiles:
        value == "All categories"
          ? store.allProfiles
          : store.allProfiles.filter((item) => item.role.includes(value)),
      tempProfiles:
        value == "All categories"
          ? store.allProfiles
          : store.allProfiles.filter((item) => item.role.includes(value)),
          category: value
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
