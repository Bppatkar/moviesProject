import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  if (!data) return null;

  const imagePath = data.backdrop_path || data.poster_path || data.profile_path;

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7), rgba(0,0,0,0.95)), url(https://image.tmdb.org/t/p/original${imagePath})`,
        backgroundPosition: "center top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}

      className="relative flex h-[65vh] w-full flex-col justify-end p-6 pt-28 md:p-12"
    >
      <h1 className="w-full text-3xl leading-tight font-black text-white drop-shadow-md md:w-[70%] md:text-5xl">
        {data.title || data.name || data.original_name}
      </h1>

      <p className="mt-2 w-full text-xs text-zinc-300 drop-shadow md:w-[70%] md:text-sm">
        {data.overview
          ? data.overview.slice(0, 150) + "..."
          : "No description available"}{" "}
        <Link
          to={`/${data.media_type || "movie"}/${data.id}`}
          className="font-semibold text-blue-400"
        >
          more
        </Link>
      </p>

      <p className="mt-3 flex items-center gap-4 text-xs text-zinc-200 md:text-sm">
        <span>
          <i className="ri-megaphone-fill mr-1 text-yellow-500"></i>
          {data.release_date || data.first_air_date || "No Date"}
        </span>
        <span>
          <i className="ri-album-fill mr-1 text-yellow-500"></i>
          {data.media_type ? data.media_type.toUpperCase() : "MOVIE"}
        </span>
      </p>

      <Link
        to={`/${data.media_type || "movie"}/${data.id}/trailer`}
        className="mt-4 w-fit rounded bg-[#6556CD] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-[#5244b5]"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
