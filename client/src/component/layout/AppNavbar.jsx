import React from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-around gap-[150px]">
      <h1 className="text-xl font-bold">Last Assignment</h1>
      <div>
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/about" className="mx-2">
          About
        </Link>
        <Link to="/blog" className="mx-2">
          Blog
        </Link>
        <Link to="/team" className="mx-2">
          Team
        </Link>
        <Link to="/service" className="mx-2">
          Service
        </Link>
        <Link to="/contact" className="mx-2">
          Contact
        </Link>
        <Link to="/dashboard" className="mx-2">
          Dashboard
        </Link>
        <>
          <Link
            type="button"
            className="btn ms-3 btn-success d-flex"
            to="/login"
          >
            Login
          </Link>
        </>
      </div>
    </nav>
  );
};

export default AppNavbar;
