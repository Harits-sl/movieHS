import dateFormat from '../utils/dateFormat';

class MovieSlider extends HTMLElement {
  set movieList(movie) {
    this._movie = movie.results.slice(0, 3);
    this.render();
  }

  render() {
    this.innerHTML = `
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators text-left">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    `;

    const imgCarouselElement = document.querySelector('.carousel-inner');
    this._movie.forEach((movie) => {
      imgCarouselElement.innerHTML += `
        <div class="carousel-item" data-interval="10000">
          <img
            src="https://image.tmdb.org/t/p/w780${movie.backdrop_path}"
            alt="..."
            class="d-block w-100"
            style="max-height: 90vh"
            loading=”lazy”
          />
          <div class="position-absolute position-caption text-white d-block text-left w-40">
            <h1 style="font-size: 4rem">${movie.title}</h1>
            <p style="line-height: 30px; font-size: 1.1rem" class="mt-3 mb-2">${
              movie.overview
            }</p>
            <p class="mb-5 text-white-50">
              ${dateFormat(movie.release_date)}
              <span class="mx-1">•</span>
              ${movie.vote_average}
            </p>
            <button style="font-size: 1.2rem;" type="button" class="btn btn-outline-trailer">Watch Trailer</button>
          </div>
        </div>
      `;
    });

    // add class active
    const carouselItemElement = document.querySelector('.carousel-item');
    carouselItemElement.classList.add('active');
  }
}

customElements.define('movie-slider', MovieSlider);
