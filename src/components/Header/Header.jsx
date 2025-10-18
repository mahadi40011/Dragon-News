import React from 'react';
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <img className='w-[470px] h-15' src={logo} alt="" />
      <p className='text-accent text-lg'>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;