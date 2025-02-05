import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";

const DashboardStore = create((set) => ({
  blogs: [],
  teams: [],
  services: [],

  fetchBlogs: async () => {
    let res = await axios.get(`${BASE_URL}/all-blog`);
    if (res.data.status === "success") {
      set({ blogs: res.data.data });
    }
  },

  fetchTeams: async () => {
    let res = await axios.get(`${BASE_URL}/all-team`);
    if (res.data.status === "success") {
      set({ teams: res.data.data });
    }
  },

  fetchServices: async () => {
    let res = await axios.get(`${BASE_URL}/all-service`);
    if (res.data.status === "success") {
      set({ services: res.data.data });
    }
  },
}));

export default DashboardStore;
