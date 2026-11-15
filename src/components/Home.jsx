import { useEffect, useState } from "react";
import Sidenav from "../templates/Sidenav";
import TopNav from "../templates/TopNav";
import { headerWallpaper } from "../utils/SearchMovie";
import Header from "../templates/Header";
import Loading from "../templates/Loading";

const Home = () => {
  document.title = "Movies_Hub | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return (
    <div className="flex min-h-screen w-screen overflow-hidden bg-[#1f1e24]">
      <div
        className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "min-w-60} w-[20%]" : "w-0 overflow-hidden"}`}
      >
        <Sidenav />
      </div>

      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-1/2 z-50 flex h-10 w-6 -translate-y-1/2 items-center justify-center rounded-r-md border-y border-r border-zinc-700 bg-[#27272a] text-zinc-300 shadow-lg transition-all hover:bg-[#3f3f46] hover:text-white"
        style={{
          left: isSidebarOpen
            ? "calc(20% - min(20%, 240px))"
            : "0px" /* Handle min-width logic smoothly */,
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

      <div className="relative flex flex-1 flex-col overflow-y-auto">
        <TopNav />
        {wallpaper ? <Header data={wallpaper} /> : <Loading />}
      </div>
    </div>
  );
};

export default Home;
