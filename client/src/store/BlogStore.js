import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:4000/api/v1";

const BlogStore = create((set) => ({
  blogList:null,
  blogListRequest: async () => {
        let res = await axios.get(`${BASE_URL}/all-blog`)
        if (res.data["status"] === "success") {
            set({blogList:res.data['data']});
          }
        
    },


    blogs: [],
  loading: false, 
  error: null, 

  
  fetchBlogs: async () => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get(`${BASE_URL}/all-blog`);
      if (res.data.status === "success") {
        set({ blogs: res.data.data, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },


  createBlog: async (postBody) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.post(`${BASE_URL}/create-blog`, postBody);
      if (res.data.status === "success") {
        set((state) => ({ blogs: [res.data.data, ...state.blogs], loading: false }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // ব্লগ আপডেট করার ফাংশন
  updateBlog: async (id, postBody) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.put(`${BASE_URL}/update-blog/${id}`, postBody);
      if (res.data.status === "success") {
        set((state) => ({
          blogs: state.blogs.map((blog) =>
            blog._id === id ? { ...blog, ...res.data.data } : blog
          ),
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  // ব্লগ ডিলিট করার ফাংশন
  deleteBlog: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.delete(`${BASE_URL}/delete-blog/${id}`);
      if (res.data.status === "success") {
        set((state) => ({
          blogs: state.blogs.filter((blog) => blog._id !== id),
          loading: false,
        }));
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
}));

export default BlogStore;
