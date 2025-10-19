import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";
import LeftAside from "../components/HomeComponents/LeftAside/LeftAside";
import RightAside from "../components/HomeComponents/RightAside/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className="my-container py-3">
        <LatestNews />
      </section>
      <nav className="my-container">
        <Navbar />
      </nav>
      <main className="my-container grid grid-cols-12 gap-6 mt-16">
        <aside className="col-span-3 sticky top-2 h-fit">
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3 sticky top-2 h-fit">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
