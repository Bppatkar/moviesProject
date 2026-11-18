import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "../templates/TopNav";
import Dropdown from "../templates/Dropdown";
import Cards from "../templates/Cards";
import Loading from "../templates/Loading";
import { trendingWithCategoryandDuration } from "../utils/moviesApi";

const Trending = () => {
  document.title = "Movies_Hub | Trending";
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trendingData, setTrendingData] = useState(null);

  const fetchTrendingData = async () => {
    try {
      setTrendingData(null); // Load dikhane ke liye data reset
      const response = await trendingWithCategoryandDuration(category, duration);
      setTrendingData(response);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    }
  };

  useEffect(() => {
    fetchTrendingData();
  }, [category, duration]);

  return trendingData ? (
    <div className="min-h-screen w-screen bg-[#1f1e24] text-white px-6 py-4 md:px-10 overflow-x-hidden">
      {/* Header Bar */}
      <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center">
        
        {/* Left Side: Back Arrow & Title */}
        <div className="flex items-center gap-3">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-left-line cursor-pointer text-2xl text-zinc-400 transition-colors hover:text-[#6556CD]"
          ></i>

          <h1 className="text-2xl font-semibold text-zinc-300 md:text-3xl">
            Trending
            <small className="ml-2 text-xs font-normal text-zinc-500 uppercase">
              ({category} • {duration})
            </small>
          </h1>
        </div>

        {/* Right Side: Search + Dropdowns */}
        <div className="flex flex-1 flex-col items-stretch justify-end gap-4 md:flex-row md:items-center">
          <div className="w-full md:flex-1">
            <TopNav isFloating={false} />
          </div>

          <div className="flex items-center gap-3">
            <Dropdown
              title="Category"
              options={["all", "movie", "tv"]}
              func={(e) => setCategory(e.target.value)}
            />
            <Dropdown
              title="Duration"
              options={["day", "week"]}
              func={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Reusable Cards Component */}
      <div className="mt-6">
        <Cards data={trendingData} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending; 