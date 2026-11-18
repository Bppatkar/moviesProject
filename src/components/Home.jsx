import { useEffect, useState } from "react";
import TopNav from "../templates/TopNav";
import { headerWallpaper, trendingOne } from "../utils/moviesApi";
import Header from "../templates/Header";
import Loading from "../templates/Loading";
import HorizontalCards from "../templates/HorizontalCards";

const Home = () => {
  document.title = "Movies_Hub | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
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
  }, []);

  useEffect(() => {
    GetTrending();
  }, [category]);

  return wallpaper && isTrending ? (
    <div className="flex flex-1 flex-col bg-[#1f1e24] min-h-screen">
      <TopNav />
      <Header data={wallpaper} />
      <HorizontalCards
        data={isTrending}
        title="Trending"
        category={category}
        setCategory={setCategory}
      />
    </div>
  ) : (
    <Loading />
  );
};

export default Home;