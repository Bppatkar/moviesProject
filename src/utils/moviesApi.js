import tmdbApi from "./axios"

export const getTrendingMovies = async () => {
  try {
    const { data } = await tmdbApi.get('/trending/movie/day');
    return data.results || [];
  } catch (error) {
    console.error("TMDB Error:", error.response?.data || error.message);
    return [];
  }
};

export const getMovies = async (query) => {
  try {
    const { data } = await tmdbApi.get('/search/multi', {
      params: { query }
    });
    return data.results || [];
  } catch (error) {
    console.error("Search Error:", error);
    return [];
  }
};

export const headerWallpaper = async () => {
  try {
    const { data } = await tmdbApi.get(`/trending/all/day`);
    return data.results;
  } catch (error) {
    console.error("Search Error:", error);
    return;
  }
}


export const trendingOne = async (category) => {
  try {
    const { data } = await tmdbApi.get(`/trending/${category}/day`);
    return data.results;
  } catch (error) {
    console.error("Search Error:", error);
    return;
  }
}

export const trendingWithCategoryandDuration = async (category =
  "all", duration = "day") => {
  try {
    const { data } = await tmdbApi.get(`/trending/${category}/${duration}`);
    return data.results || [];
  } catch (error) {
    console.error("Search Error:", error);
    return;
  }
}

export const popularWithCategory = async (category = "all") => {
  try {
    if (category === "all") {
      const [movies, tvShows] = await Promise.all([
        tmdbApi.get("/movie/popular"),
        tmdbApi.get("/tv/popular"),
      ]);
      return [
        ...movies.data.results.map((item) => ({ ...item, media_type: "movie" })),
        ...tvShows.data.results.map((item) => ({ ...item, media_type: "tv" })),
      ];
    }

    const { data } = await tmdbApi.get(`/${category}/popular`);
    return (data.results || []).map((item) => ({
      ...item,
      media_type: category,
    }));
  } catch (error) {
    console.error("TMDB Popular Error:", error.response?.data || error.message);
    return [];
  }
};