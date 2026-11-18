import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  if (!data) return null;

  return (
    <div className="w-full bg-[#1f1e24] px-6 py-4 md:px-10">
      {title && (
        <h1 className="mb-5 text-2xl font-bold text-zinc-300 md:text-3xl">
          {title}
        </h1>
      )}

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((item, idx) => {
          const isPerson = item.media_type === "person";
          const imagePath = item.poster_path || item.backdrop_path || item.profile_path;
          const cardTitle = item.title || item.name || item.original_name || item.original_title;
          const year = item.release_date || item.first_air_date;

          const linkPath = isPerson
            ? `/person/${item.id}`
            : `/${item.media_type || "movie"}/${item.id}`;

          return (
            <Link
              to={linkPath}
              key={idx}
              className="group flex flex-col cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="h-60 sm:h-72 w-full overflow-hidden rounded-lg bg-zinc-800 shadow-lg">
                <img
                  src={
                    imagePath
                      ? `https://image.tmdb.org/t/p/w500${imagePath}`
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

              <div className="mt-2 flex flex-col">
                <h1 className="truncate text-sm font-semibold text-zinc-200 transition-colors group-hover:text-[#6556CD] md:text-base">
                  {cardTitle}
                </h1>
                <span className="text-xs text-zinc-400">
                  {isPerson
                    ? "Actor"
                    : `${item.media_type?.toUpperCase() || "MOVIE"} (${year ? year.split("-")[0] : "N/A"
                    })`}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;