import React, { useEffect, useState } from "react";
import { getMovies } from "../utils/SearchMovie";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  // using debouncing
  useEffect(() => {
    if (!query.trim()) {
      setSearches([]);
      return;
    }

    const timer = setTimeout(async () => {
      const results = await getMovies(query);
      setSearches(results);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="relative ml-[15%] flex h-[10vh] w-full items-center justify-start">
      <i className="ri-search-line text-3xl text-zinc-400"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
        placeholder="Search Any Movie"
        className="mx-10 w-[50%] bg-transparent p-5 text-xl text-zinc-200 outline-none"
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="ri-close-fill text-3xl text-zinc-400"
        ></i>
      )}

      {searches.length > 0 && (
        <div className="absolute top-[90%] z-50 max-h-[50vh] w-[50%] overflow-auto rounded bg-[#58575e]">
          {searches.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="flex w-full items-center justify-start border-b-2 border-zinc-100 p-4 font-semibold text-zinc-200 duration-300 hover:bg-zinc-300 hover:text-black"
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/no-image.png"
                }
                alt={movie.title || movie.name}
                className="mr-4 h-16 w-12 rounded object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/no-image.png";
                }}
              />
              <span>
                {movie.title || movie.name} (
                {movie.release_date ? movie.release_date.split("-")[0] : "N/A"})
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNav;
