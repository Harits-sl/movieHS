import dateFormat from '../utils/dateFormat.js';
import './movie-item.js';

class MovieAside extends HTMLElement {
  set movies(movies) {
    this._movies = movies.results.slice(0, 3);
    this.render();
    this.afterRender();
  }

  async render() {
    this.innerHTML = `
      <div class="text-white">
        <h1 class="h4 mb-3">Popular Movies</h1>
        <div class="item pt-3">

        </div>
      </div>
    `;
  }

  async afterRender() {
    const itemElement = document.querySelector('.item');

    this._movies.forEach((movie) => {
      itemElement.innerHTML += `

      <div class="row mb-3">
        <div class="col-5">
          <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" 
          class="w-100 rounded-lg" alt="...">
        </div>
        <div class="col-7">
          <div class="d-flex align-items-start flex-column h-100">
            <p class="font-weight-light mb-1">${movie.title}</p>
            <p class="text-white-50 font-weight-light" 
              style="font-size: 0.8rem;">
              ${dateFormat(movie.release_date)}
            </p>
            <div class="d-flex mt-2">
              <i class="fas fa-star mr-2"
                style="line-height: unset; font-size: 0.8rem; color: #c4dc00;">
              </i>
              <p class=" text-white-50 font-weight-light"
                style="margin-block-end: unset; font-size: 0.8rem;"
              >
                ${movie.vote_average}
              </p>
            </div>
            
          </div>
          
        </div>
      </div>

      `;
    });
  }
}

customElements.define('movie-aside', MovieAside);
