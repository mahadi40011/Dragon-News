import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <img className="w-[470px] h-15" src={logo} alt="" />
      <p className="text-accent text-lg mt-5 mb-2">
        Journalism Without Fear or Favour
      </p>
      <span className="text-accent font-semibold">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </span>
    </div>
  );
};

export default Header;
