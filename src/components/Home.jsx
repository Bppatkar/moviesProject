import { useEffect, useState } from "react";
import Sidenav from "../templates/Sidenav";
import TopNav from "../templates/TopNav";
import { headerWallpaper, trendingOne } from "../utils/moviesApi";
import Header from "../templates/Header";
import Loading from "../templates/Loading";
import HorizontalCards from "../templates/HorizontalCards";

const Home = () => {
  document.title = "Movies_Hub | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTrending, setIsTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const GetHeaderWallpaper = async () => {
    try {
      const res = await headerWallpaper();
      if (res && res.length > 0) {
        const randomPoster = res[Math.floor(Math.random() * res.length)];
        setWallpaper(randomPoster);
      }
    } catch (error) {
      console.error("Error Fetching wallpaper :", error);
    }
  };

  const GetTrending = async () => {
    try {
      const res = await trendingOne(category);
      setIsTrending(res);
    } catch (error) {
      console.error("Error Fetching trending :", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
    GetTrending();
  }, [category]);

  return (
    <div className="relative flex min-h-screen w-screen overflow-x-hidden bg-[#1f1e24]">
      {/* Sidebar Container - Mobile par absolute drawer, Desktop par normal flex */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transition-all duration-300 ease-in-out md:relative ${
          isSidebarOpen
            ? "w-72 translate-x-0 md:w-[20%] md:min-w-[240px]"
            : "-translate-x-full overflow-hidden md:w-0 md:min-w-0"
        }`}
      >
        <Sidenav />
      </div>

      {/* Backdrop for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
        ></div>
      )}

      {/* Center Arrow Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-1/2 z-50 flex h-12 w-6 -translate-y-1/2 items-center justify-center rounded-r-md border-y border-r border-zinc-700 bg-[#27272a] text-zinc-300 shadow-xl transition-all hover:bg-[#3f3f46] hover:text-white md:absolute"
        style={{
          left: isSidebarOpen ? "288px md:min(20%, 240px)" : "0px",
        }}
        title={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      >
        <i
          className={
            isSidebarOpen
              ? "ri-arrow-left-s-line text-xl"
              : "ri-arrow-right-s-line text-xl"
          }
        ></i>
      </button>

      {/* Right Content Area */}
      <div className="relative flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
        <TopNav />
        {wallpaper ? <Header data={wallpaper} /> : <Loading />}
        {isTrending ? (
          <HorizontalCards
            data={isTrending}
            title="Trending"
            category={category}
            setCategory={setCategory}
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
