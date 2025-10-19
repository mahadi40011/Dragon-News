import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="bg-base-200 flex flex-col min-h-screen">
      <div className="my-container ">
        <header>
          <Navbar />
        </header>
        <main className='flex-1'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;