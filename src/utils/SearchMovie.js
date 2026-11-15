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
    const { data } = await tmdbApi.get('/search/movie', {
      params: { query }
    });
    return data.results || [];
  } catch (error) {
    console.error("Search Error:", error);
    return [];
  }
};