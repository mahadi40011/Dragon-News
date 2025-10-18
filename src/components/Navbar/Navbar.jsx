import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png"

const Navbar = () => {
  const navLink = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/career", name: "Career" },
  ];

  const navItems = navLink.map((navItem) => (
    <NavLink
      className={({ isActive }) =>
        `text-accent m-2 font-semibold pb-1 ${
          isActive ? "border-b-2 border-accent" : "hover:border-b border-accent"
        }`
      }
      key={navItem.id}
      to={navItem.path}
    >
      {navItem.name}
    </NavLink>
  ));
  return (
    <div className="relative flex justify-between items-center mt-5">
      <div className=""></div>
      <div className="absolute left-1/2 -translate-x-1/2">{navItems}</div>
      <div className="flex gap-3">
        <img src={user} alt="" />
        <button className="btn btn-primary px-6">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
