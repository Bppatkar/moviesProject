import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGY0MTczOWY2Y2NkNDFhY2IwYWE0MDg2YzU1NGNlOSIsIm5iZiI6MTc5NDcyNDc1OS43MzEsInN1YiI6IjZhZjk1Mzk3YjIwNGU2ZjcyMDI3MGVlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T8GVJd8DIWNe6frjGKKYGj2qZMAufjElyDuvXhjBbQE",
  },
});

export default tmdbApi;
