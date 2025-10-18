import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className="my-container py-3">
        <LatestNews />
      </section>
      <nav className='my-container'>
        <Navbar/>
      </nav>
      <main>
        <section className="left-aside"></section>
        <section className="main">
          <Outlet />
        </section>
        <section className="right-aside"></section>
      </main>
    </div>
  );
};

export default HomeLayout;