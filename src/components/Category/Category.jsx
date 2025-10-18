import React, { use } from "react";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Category = () => {
  const categories = use(categoryPromise)
  console.log(categories);
  return (
    <div>
      <h1 className="font-bold">All Categories</h1>
    </div>
  );
};

export default Category;
