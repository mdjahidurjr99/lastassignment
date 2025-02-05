import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";

const ServiceStore = create((set) => ({
  serviceList:null,
  serviceListRequest: async () => {
        let res = await axios.get(`${BASE_URL}/all-service`)
        if (res.data["status"] === "success") {
            set({serviceList:res.data['data']});
          }
        
    },


    services: [], // সার্ভিস ডেটা স্টোর করার জন্য
  loading: false, // লোডিং স্টেট
  error: null, // এরর মেসেজ

  // সব সার্ভিস ফেচ করার ফাংশন
  fetchServices: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/all-service`);
      if (res.data.status === "success") {
        set({ services: res.data.data, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // নতুন সার্ভিস তৈরি করার ফাংশন
  createService: async (postBody) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/create-service`, postBody);
      if (res.data.status === "success") {
        set((state) => ({
          services: [res.data.data, ...state.services],
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // সার্ভিস আপডেট করার ফাংশন
  updateService: async (id, postBody) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.put(`${BASE_URL}/update-service/${id}`, postBody);
      if (res.data.status === "success") {
        set((state) => ({
          services: state.services.map((service) =>
            service._id === id ? { ...service, ...res.data.data } : service
          ),
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // সার্ভিস ডিলিট করার ফাংশন
  deleteService: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.delete(`${BASE_URL}/delete-service/${id}`);
      if (res.data.status === "success") {
        set((state) => ({
          services: state.services.filter((service) => service._id !== id),
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
}));

export default ServiceStore;
