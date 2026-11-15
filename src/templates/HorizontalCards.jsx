import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCards = ({ data, title, category, setCategory }) => {
  const scrollRef = useRef(null);

  if (!data || data.length === 0) return null;

  // Mouse wheel se horizontal scroll karne ke liye function
  const handleWheel = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="w-full px-6 py-5">
      {/* Header section with Title and Dropdown aligned horizontally */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-zinc-300 md:text-3xl">
          {title}
        </h1>

        {/* Dropdown filter (e.g., All, Movie, TV) */}
        {setCategory && (
          <Dropdown
            title="Category"
            options={["all", "movie", "tv"]}
            func={(e) => setCategory(e.target.value)}
          />
        )}
      </div>

      {/* Horizontal Scrollable Row with smooth mouse wheel support */}
      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="flex w-full cursor-grab scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent gap-5 overflow-x-auto overflow-y-hidden pb-4 active:cursor-grabbing"
      >
        {data.map((item, idx) => {
          const imagePath =
            item.poster_path || item.backdrop_path || item.profile_path;
          const cardTitle =
            item.title ||
            item.name ||
            item.original_name ||
            item.original_title;

          const linkPath =
            item.media_type === "person"
              ? `/person/${item.id}`
              : `/${item.media_type || "movie"}/${item.id}`;

          return (
            <Link
              to={linkPath}
              key={idx}
              className="group flex w-35 shrink-0 cursor-pointer flex-col overflow-hidden rounded-lg bg-[#1f1e24] transition-transform duration-300 hover:scale-105 sm:w-40 md:w-50"
            >
              {/* Poster Image */}
              <div className="h-52.5 w-full shrink-0 overflow-hidden bg-zinc-800 sm:h-60 md:h-75">
                <img
                  src={
                    imagePath
                      ? `https://image.tmdb.org/t/p/original${imagePath}`
                      : "/no-image.png"
                  }
                  alt={cardTitle}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/no-image.png";
                  }}
                />
              </div>

              {/* Title & Info */}
              <div className="flex flex-1 flex-col justify-between p-3">
                <h1 className="truncate text-sm font-semibold text-zinc-200 transition-colors group-hover:text-[#6556CD]">
                  {cardTitle}
                </h1>
                <div className="mt-2 flex items-center justify-between text-xs text-zinc-400">
                  <span>
                    {item.release_date?.split("-")[0] ||
                      item.first_air_date?.split("-")[0] ||
                      "N/A"}
                  </span>
                  <span className="rounded bg-zinc-800 px-1.5 py-0.5 font-medium text-zinc-300 uppercase">
                    {item.media_type || "movie"}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCards;
