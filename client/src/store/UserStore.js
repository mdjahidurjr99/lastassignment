import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:4000/api/v1";

const UserStore = create((set) => ({
  token: Cookies.get("token") || null,
  isAuthenticated: !!Cookies.get("token"),

  login: async (email, password) => {
    try {
      let res = await axios.post(`${BASE_URL}/login`, { email, password });
      if (res.data.status === "success") {
        Cookies.set("token", res.data.token, { expires: 1 }); // Expires in 1 day
        set({ token: res.data.token, isAuthenticated: true });
        return true;
      }
    } catch (error) {
      return false;
    }
  },

  logout: () => {
    Cookies.remove("token");
    set({ token: null, isAuthenticated: false });
  },
}));

export default UserStore;







// import { create } from "zustand";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { toast } from "react-hot-toast";

// const UserStore = create((set) => ({
//   // Check if the user is logged in by verifying the token in cookies
//   isLogin: () => {
//     return !!Cookies.get("token");
//   },

//   // Track form submission state
//   isFormSubmit: false,

//   // Login form data
//   LoginFormData: { email: "", password: "" },

//   // Update login form data
//   LoginFormOnChange: (name, value) => {
//     set((state) => ({
//       LoginFormData: {
//         ...state.LoginFormData,
//         [name]: value,
//       },
//     }));
//   },

//   // Handle login request
//   UserEmailRequest: async (email, password) => {
//     set({ isFormSubmit: true }); // Set form submission state to true

//     try {
//       // Send a POST request to the login API
//       const res = await axios.post("http://localhost:4000/api/v1/login", { email, password });

//       if (res.data.status === "success") {
//         // Set the token in cookies
//         Cookies.set("token", res.data.token, { expires: 1 }); // Token expires in 1 day
//         toast.success("Login successful!");
//         set({ isFormSubmit: false }); // Reset form submission state
//         return true; // Return true for successful login
//       } else {
//         toast.error(res.data.message || "Login failed");
//         set({ isFormSubmit: false }); // Reset form submission state
//         return false; // Return false for failed login
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("An error occurred during login. Please try again.");
//       set({ isFormSubmit: false }); // Reset form submission state
//       return false; // Return false for failed login
//     }
//   },

//   // Logout function
//   UserLogout: () => {
//     Cookies.remove("token"); // Remove the token from cookies
//     toast.success("Logged out successfully!");
//   },
// }));

// export default UserStore;






// import { create } from "zustand";
// import axios from "axios";
// import { getEmail, setEmail, unauthorized } from "../utility/Utility.js";
// import Cookies from "js-cookie";


// const UserStore = create((set) => ({
//   isLogin: () => {
//     return !!Cookies.get("token");
//   },

//   isFormSubmit: false,

//   LoginFormData: { email: "", password: "" },
//   LoginFormOnChange: (name, value) => {
//     set((state) => ({
//       LoginFormData: {
//         ...state.LoginFormData,
//         [name]: value,
//       },
//     }));
//   },


//   UserEmailRequest: async (email) => {
//     set({ isFormSubmit: true });
//     let res = await axios.get(`api/v1/login`);
//     setEmail(email);
//     set({ isFormSubmit: false });
//     return res.data["status"] === "success";
//   },

// }));

// export default UserStore;