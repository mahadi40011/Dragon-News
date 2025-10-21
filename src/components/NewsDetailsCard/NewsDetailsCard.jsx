import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
  const {thumbnail_url, details, title, category_id} = news

  return (
    <div>
      <h1 className="font-semibold  text-xl mb-3">Dragon News</h1>
      <div className="p-7 border border-gray-200 rounded-2xl">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-md object-cover"
        />
        <h2 className="mt-5 mb-1 text-2xl md:text-xl font-bold text-gray-800 ">
          {title}
        </h2>
        <p className="text-accent">{details}</p>
        <Link
          to={`/category/${category_id}`}
          className="btn btn-secondary mt-6"
        >
          <IoIosArrowBack size={20} />
          All news in this category
        </Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;