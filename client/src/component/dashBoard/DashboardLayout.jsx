import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LogOut, LayoutDashboard, FileText, Users, Briefcase } from "lucide-react";
import UserStore from "../../store/UserStore.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DashboardLayout = () => {
  let { logout } = UserStore();
  let navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex-1">
          <ul className="space-y-3">
            <li>
              <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700">
                <LayoutDashboard size={20} /> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/blogs" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700">
                <FileText size={20} /> Blogs
              </Link>
            </li>
            <li>
              <Link to="/dashboard/teams" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700">
                <Users size={20} /> Team
              </Link>
            </li>
            <li>
              <Link to="/dashboard/services" className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700">
                <Briefcase size={20} /> Services
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleLogout} className="mt-auto flex items-center gap-3 p-3 bg-red-600 rounded-md hover:bg-red-700">
          <LogOut size={20} /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
