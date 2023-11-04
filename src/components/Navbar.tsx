import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="text-zinc-50 font-bold flex items-center justify-between px-6 h-24 bg-orange-400">
      <div>logo</div>
      <div>
        <input type="text" placeholder="search" />
      </div>
      <div>
        <ul className="flex  gap-10">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/post">Posts</Link>
          {/* <Link to="/create">New</Link> */}
          <Link to="/signin">Login</Link>
          <Link to="/register">Register</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
