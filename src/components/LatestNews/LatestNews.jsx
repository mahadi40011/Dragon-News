import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-4 p-3 bg-base-200">
      <p className="text-base-100 bg-secondary py-2 px-4">Latest</p>
      <Marquee className="flex gap-5 font-bold" pauseOnHover={true} speed={100}>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain
        </p>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
