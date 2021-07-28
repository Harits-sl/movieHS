import { listViewMoviesTemplates } from '../views/templates.js';
import './movie-item.js';

class MovieList extends HTMLElement {
  set isTrendingMovie(isTrendingMovie) {
    this._isTrendingMovie = isTrendingMovie;
  }

  set movies(movies) {
    this._movies = movies.results;
    this.render();
  }

  async render() {
    let movieElement;

    if (this._isTrendingMovie) {
      this.innerHTML = listViewMoviesTemplates(
        'Trending This Week',
        this._isTrendingMovie
      );
      movieElement = document.querySelector('.list-trending-movie');
    } else {
      this.innerHTML = listViewMoviesTemplates(
        'Top Rated Movies',
        this._isTrendingMovie
      );
      movieElement = document.querySelector('.list-top-rated-movie');
    }

    this._movies.forEach((movie) => {
      const createMovieItemElement = document.createElement('movie-item');
      createMovieItemElement.movie = movie;
      movieElement.appendChild(createMovieItemElement);
    });
  }
}

customElements.define('movie-list', MovieList);
