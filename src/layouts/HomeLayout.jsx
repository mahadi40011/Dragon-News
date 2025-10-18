import React from 'react';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
      <header></header>
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