import { itemViewMovieTemplates } from '../views/templates';

class MovieItem extends HTMLElement {
  connectedCallback() {
    const artistItemElement = document.querySelectorAll('movie-item');
    for (let i = 0; i < artistItemElement.length; i++) {
      artistItemElement[i].classList.add('swiper-slide-list', 'swiper-slide');
    }
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = itemViewMovieTemplates(this._movie);
  }
}

customElements.define('movie-item', MovieItem);
