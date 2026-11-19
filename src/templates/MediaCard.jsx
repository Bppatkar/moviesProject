import React from "react";
import { Link } from "react-router-dom";

const MediaCard = ({ item, variant = "grid", className = "" }) => {
  const isPerson = item.media_type === "person";
  const imagePath =
    item.poster_path || item.backdrop_path || item.profile_path;
  const title =
    item.title ||
    item.name ||
    item.original_name ||
    item.original_title ||
    "Untitled";
  const year = item.release_date || item.first_air_date;
  const linkPath = isPerson
    ? `/person/${item.id}`
    : `/${item.media_type || "movie"}/${item.id}`;

  const cardClass =
    variant === "horizontal"
      ? "w-36 shrink-0 sm:w-40 md:w-48"
      : "w-full";

  return (
    <Link
      to={linkPath}
      className={`group flex cursor-pointer flex-col overflow-hidden rounded-lg bg-[#1f1e24] transition-transform duration-300 hover:scale-105 ${cardClass} ${className}`}
    >
      <div
        className={
          variant === "horizontal"
            ? "h-52 w-full shrink-0 overflow-hidden bg-zinc-800 shadow-lg sm:h-60 md:h-72"
            : "h-60 w-full overflow-hidden bg-zinc-800 shadow-lg sm:h-72"
        }
      >
        <img
          src={
            imagePath
              ? `https://image.tmdb.org/t/p/w500${imagePath}`
              : "/no-image.png"
          }
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(event) => {
            event.target.onerror = null;
            event.target.src = "/no-image.png";
          }}
        />
      </div>

      <div className="mt-2 flex min-w-0 flex-col px-1 pb-1">
        <h2 className="truncate text-sm font-semibold text-zinc-200 transition-colors group-hover:text-[#6556CD] md:text-base">
          {title}
        </h2>
        <span className="text-xs text-zinc-400">
          {isPerson
            ? "Actor"
            : `${item.media_type?.toUpperCase() || "MOVIE"} (${
                year ? year.split("-")[0] : "N/A"
              })`}
        </span>
      </div>
    </Link>
  );
};

export default MediaCard;
