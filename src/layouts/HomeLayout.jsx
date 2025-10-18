import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <main>
        <section className="left-aside"></section>
        <section className="main">
          <Outlet/>
        </section>
        <section className="right-aside"></section>
      </main>
    </div>
  );
};

export default HomeLayout;