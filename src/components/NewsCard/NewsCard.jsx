import { Link } from "react-router";
import { FaStar, FaRegEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-base-100 rounded-xl shadow-sm mb-5">
      {/* Header */}
      <div className="flex justify-between items-center bg-base-200 p-2 mb-2">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500 ">
          <FaRegBookmark className="cursor-pointer" size={18} />
          <FaShareAlt className="cursor-pointer" size={18} />
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 text-lg md:text-xl font-bold text-gray-800 leading-snug">
        {title}
      </h2>

      {/* Thumbnail */}
      <div className="px-4 mt-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-md object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-600">
        <p>
          {details.slice(0, 200)}...
          <Link
            to={`/news/${id}`}
            className="text-orange-500 font-semibold hover:underline ml-1"
          >
            Read More
          </Link>
        </p>

        <div className="mt-3 text-xs text-gray-400">
          <span className="font-medium text-gray-500">Tags:</span>{" "}
          {tags.join(", ")}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t px-4 py-3">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-600 font-medium">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;