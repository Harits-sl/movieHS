import apiEndpoint from '../globals/api-endpoint';

const detailMovie = async (id) => {
  return await apiEndpoint.getDetailMovie(id);
};

const upcomingMovies = async () => {
  return await apiEndpoint.getMovies('/upcoming');
};

const popularMovies = async () => {
  return await apiEndpoint.getMovies('/popular');
};

const topRatedMovies = async () => {
  return await apiEndpoint.getMovies('/top_rated');
};

const videoMovie = async (id) => {
  return await apiEndpoint.getVideoMovies(id);
};

const searchMovies = async (query) => {
  return await apiEndpoint.searchMovies(query);
};

const trendingMovies = async () => {
  return await apiEndpoint.getTrendingMovies();
};

const artist = async () => {
  return await apiEndpoint.getArtist();
};

export {
  detailMovie,
  upcomingMovies,
  popularMovies,
  topRatedMovies,
  videoMovie,
  searchMovies,
  trendingMovies,
  artist,
};
