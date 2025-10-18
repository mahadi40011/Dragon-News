import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());
const Category = () => {
  const categories = use(categoryPromise);

  const category = categories.map((category) => (
    <NavLink
      to={`/category/${category.id}`}
      className={({ isActive }) =>
        ` border-0  text-start py-2.5 pl-10 text-accent ${
          isActive
            ? "bg-base-300 rounded-md"
            : "hover:bg-base-200 hover:font-medium rounded-md"
        }`
      }
      key={category.id}
    >
      {category.name}
    </NavLink>
  ));

  return (
    <div>
      <h1 className="font-bold">All Categories</h1>
      <div className="grid grid-cols-1 gap-2 mt-5">{category}</div>
    </div>
  );
};

export default Category;
