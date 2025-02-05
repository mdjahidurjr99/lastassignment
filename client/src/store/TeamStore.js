import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";

const TeamStore = create((set) => ({
    teamMembers:null,
    teamListRequest: async () => {
        let res = await axios.get(`${BASE_URL}/all-team`)
        if (res.data["status"] === "success") {
            set({teamMembers:res.data['data']});
          }
        
    },



  teams: [], // টিম ডেটা স্টোর করার জন্য
  loading: false, // লোডিং স্টেট
  error: null, // এরর মেসেজ

  // সব টিম মেম্বার ফেচ করার ফাংশন
  fetchTeams: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/all-team`);
      if (res.data.status === "success") {
        set({ teams: res.data.data, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // নতুন টিম মেম্বার তৈরি করার ফাংশন
  createTeam: async (postBody) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/create-team`, postBody);
      if (res.data.status === "success") {
        set((state) => ({
          teams: [res.data.data, ...state.teams],
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // টিম মেম্বার আপডেট করার ফাংশন
  updateTeam: async (id, postBody) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.put(`${BASE_URL}/update-team/${id}`, postBody);
      if (res.data.status === "success") {
        set((state) => ({
          teams: state.teams.map((team) =>
            team._id === id ? { ...team, ...res.data.data } : team
          ),
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // টিম মেম্বার ডিলিট করার ফাংশন
  deleteTeam: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.delete(`${BASE_URL}/delete-team/${id}`);
      if (res.data.status === "success") {
        set((state) => ({
          teams: state.teams.filter((team) => team['_id'] !== id),
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}))

export default TeamStore;