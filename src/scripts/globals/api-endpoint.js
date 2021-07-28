const baseUrl = process.env.BASE_URL;
const keyApi = process.env.KEY_API;

const apiEndpoint = {
  async getDetailMovie(id) {
    const response = await fetch(`${baseUrl}/movie${id}?api_key=${keyApi}`);
    return await response.json();
  },

  async getMovies(category) {
    const response = await fetch(
      `${baseUrl}/movie${category}?api_key=${keyApi}`
    );
    return await response.json();
  },

  async getVideoMovies(id) {
    const response = await fetch(
      `${baseUrl}/movie/${id}/videos?api_key=${keyApi}`
    );
    return await response.json();
  },

  async searchMovies(query) {
    const response = await fetch(
      `${baseUrl}/search/movie?api_key=${keyApi}&query=${query}`
    );
    return await response.json();
  },

  async getArtist() {
    const response = await fetch(`${baseUrl}/person/popular?api_key=${keyApi}`);
    return await response.json();
  },

  async getTrendingMovies() {
    const response = await fetch(
      `${baseUrl}/trending/movie/week?api_key=${keyApi}`
    );

    return await response.json();
  },
};

export default apiEndpoint;
