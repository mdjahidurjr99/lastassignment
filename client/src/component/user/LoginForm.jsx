import React from "react";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserStore from "../../store/UserStore.js";

const LoginForm = () => {
  const { LoginFormOnChange, LoginFormData, UserEmailRequest } = UserStore();
  const navigate = useNavigate();

  const OnFormSubmit = async (event) => {
    event.preventDefault(); // Prevent page refresh

    if (!ValidationHelper.IsEmail(LoginFormData.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!LoginFormData.password) {
      toast.error("Password is required");
      return;
    }

    try {
      let res = await UserEmailRequest(LoginFormData.email, LoginFormData.password); // Pass password as well

      if (res) {
        toast.success("Login Successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (error) {
      toast.error("An error occurred during login. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form className="flex flex-col" onSubmit={OnFormSubmit}>
          <input
            value={LoginFormData.email}
            onChange={(e) => LoginFormOnChange("email", e.target.value)}
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
            required
            aria-label="Email address"
          />
          <input
            value={LoginFormData.password}
            onChange={(e) => LoginFormOnChange("password", e.target.value)}
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
            required
            aria-label="Password"
          />
          <div className="flex items-center justify-between flex-wrap">
            <p className="text-gray-900 mt-4">
              Don't have an account?{" "}
              <a 
                href="#" 
                onClick={() => navigate("/signup")} // Use navigate for signup
                className="text-sm text-blue-500 hover:underline"
              >
                Signup
              </a>
            </p>
          </div>
          <button
            type="submit" // Corrected button type
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginForm;







// import React from "react";
// import ValidationHelper from "../../utility/ValidationHelper.js";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import UserStore from "../../store/UserStore.js";

// const LoginForm = () => {
//   let { LoginFormOnChange, LoginFormData, UserEmailRequest } = UserStore();
//   let navigate = useNavigate();

//   const OnFormSubmit = async (event) => {
//     event.preventDefault(); // ✅ Prevent page refresh

//     if (!ValidationHelper.IsEmail(LoginFormData.email)) {
//       toast.error("Please enter a valid email");
//       return;
//     }

//     if (!LoginFormData.password) {
//       toast.error("Password is required");
//       return;
//     }

//     let res = await UserEmailRequest(LoginFormData.email); // ✅ Remove password from request

//     if (res) {
//       toast.success("Login Successful!");
//       navigate("/dashboard");
//     } else {
//       toast.error("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
//         <form className="flex flex-col" onSubmit={OnFormSubmit}>
//           <input
//             value={LoginFormData.email}
//             onChange={(e) => LoginFormOnChange("email", e.target.value)}
//             type="email"
//             className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             placeholder="Email address"
//             required
//           />
//           <input
//             value={LoginFormData.password}
//             onChange={(e) => LoginFormOnChange("password", e.target.value)}
//             type="password"
//             className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
//             placeholder="Password"
//             required
//           />
//           <div className="flex items-center justify-between flex-wrap">
//             <p className="text-gray-900 mt-4">
//               Don't have an account?{" "}
//               <a href="#" className="text-sm text-blue-500 hover:underline">
//                 Signup
//               </a>
//             </p>
//           </div>
//           <button onClick={OnFormSubmit}
//             type="submit" // ✅ Corrected button type
//             className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

