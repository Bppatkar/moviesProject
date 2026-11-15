import React, { useEffect, useState } from "react";
import { getMovies } from "../utils/moviesApi";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    if (!query.trim()) {
      setSearches([]);
      return;
    }

    const timer = setTimeout(async () => {
      const results = await getMovies(query);
      setSearches(
        results.filter((item) => item.poster_path || item.profile_path),
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="absolute top-0 left-0 z-30 flex h-[12vh] w-full items-center justify-start bg-linear-to-b from-black/80 via-black/40 to-transparent px-6 md:px-10">
      <i className="ri-search-line text-2xl text-zinc-300 md:text-3xl"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Any Movie, TV Show or Person..."
        className="mx-4 w-[70%] bg-transparent p-3 text-base text-zinc-100 placeholder-zinc-400 outline-none md:w-[50%] md:text-xl"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill cursor-pointer text-2xl text-zinc-300 md:text-3xl"
        ></i>
      )}

      {searches.length > 0 && (
        <div className="absolute top-full left-6 z-50 max-h-[50vh] w-[80%] overflow-auto rounded-lg border border-zinc-700 bg-[#18181b]/95 shadow-2xl backdrop-blur-md md:left-16 md:w-[50%]">
          {searches.map((item) => {
            const isPerson = item.media_type === "person";
            const imagePath = isPerson ? item.profile_path : item.poster_path;
            const title = item.title || item.name;
            const year = item.release_date || item.first_air_date;
            const linkPath = isPerson
              ? `/person/${item.id}`
              : `/movie/${item.id}`;

            return (
              <Link
                key={item.id}
                to={linkPath}
                onClick={() => setQuery("")}
                className="flex w-full items-center justify-start border-b border-zinc-800 p-3 font-semibold text-zinc-200 duration-300 hover:bg-zinc-800 hover:text-white md:p-4"
              >
                <img
                  src={
                    imagePath
                      ? `https://image.tmdb.org/t/p/original${imagePath}`
                      : "/no-image.png"
                  }
                  alt={title}
                  className={`mr-4 h-14 w-10 object-cover md:h-16 md:w-12 ${
                    isPerson ? "rounded-full" : "rounded"
                  }`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/no-image.png";
                  }}
                />
                <div className="flex flex-col truncate">
                  <span className="truncate text-sm md:text-base">{title}</span>
                  <span className="text-xs text-zinc-400">
                    {isPerson
                      ? "Actor"
                      : `${item.media_type?.toUpperCase()} (${
                          year ? year.split("-")[0] : "N/A"
                        })`}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TopNav;
