import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import RightAside from "../../components/HomeComponents/RightAside/RightAside";
import NewsDetailsCard from "../../components/NewsDetailsCard/NewsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const foundData = data.find((singleNews) => singleNews.id === id);
    setNews(foundData);
  }, [data, id]);

  return (
    <div className="my-container">
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12 gap-5 mt-10">
        <section className="news-details col-span-9">
          <NewsDetailsCard news={news} />
        </section>
        <aside className="right-aside col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
