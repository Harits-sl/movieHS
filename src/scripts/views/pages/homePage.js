import {
  detailMovie,
  popularMovies,
  topRatedMovies,
  artist,
  trendingMovies,
  videoMovie,
} from '../../data/themovieDB-source';

import '../../components/movie-jumbotron';
import '../../components/movie-slider';
import '../../components/artist-list';
import '../../components/movie-list';
import '../../components/movie-aside';

const homePage = {
  async render() {
    return `
      <movie-jumbotron></movie-jumbotron>

      <div class="container-fluid">
        <div class="row">
          <div class="col-9">
            <artist-list></artist-list>
            <movie-list id="movie-top-rated"></movie-list>
            <movie-list id="movie-trending"></movie-list>
          </div>
          <div class="col-3 vertical-line my-4">
            <movie-aside></movie-aside>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movieJumbotronElement = document.querySelector('movie-jumbotron');
    const artistListElement = document.querySelector('artist-list');
    const movieAsideElement = document.querySelector('movie-aside');
    const movieListElement = document.querySelectorAll('movie-list');

    // start fetch detail movie for jumbotron movie
    const idMovie = ['399566', '464052', '637649'];
    let listDetailMovie = [];
    let listKeyYoutubeMovie = [];

    idMovie.map(async (id) => {
      const getVideo = await videoMovie(id);
      listKeyYoutubeMovie.push(await getVideo.results[0].key);

      listDetailMovie.push(await detailMovie(`/${id}`));
    });

    if (listDetailMovie.length < 1 && listKeyYoutubeMovie.length < 1) {
      const listDetail = await Promise.all([
        listKeyYoutubeMovie,
        listDetailMovie,
      ]);
      movieJumbotronElement.movies = listDetail;
    }

    // fetch popular movie for movie-aside
    movieAsideElement.movies = await popularMovies();

    // fetch popular artist for artist-list
    artistListElement.artist = await artist();

    // movie-list
    // movie-list for top rated movie
    movieListElement[0].isTrendingMovie = false;
    movieListElement[0].movies = await topRatedMovies();

    // movie-list for trending movie
    movieListElement[1].isTrendingMovie = true;
    movieListElement[1].movies = await trendingMovies();

    // const searchMovie = async () => {
    //   console.log(await searchMovies('wrath of man'));
    // };
  },
};

export default homePage;
