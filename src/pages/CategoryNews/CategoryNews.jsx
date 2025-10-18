import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const [news, setNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") return setNews(data);
    else if (id === "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      return setNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === parseInt(id)
      );
      return setNews(filteredNews);
    }
  }, [data, id]);

  return <div>{news.length} news found</div>;
};

export default CategoryNews;
