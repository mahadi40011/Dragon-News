import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLink = [
    { id: 1, path: "/category/1", name: "Home" },
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

  const handleLogOut = () => {
    logOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="relative flex justify-between items-center mt-5">
      <div className="font-bold text-3xl">{user && <p>{user.displayName}</p>}</div>
      <div className="absolute left-1/2 -translate-x-1/2">{navItems}</div>
      <div className="flex gap-3">
        <img className="w-12 rounded-full" src={user ? user.photoURL : userIcon} alt="" />
        {user ? (
          <button
            type="button"
            onClick={handleLogOut}
            className="btn btn-primary px-6"
          >
            LogOut
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
