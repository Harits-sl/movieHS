import { itemViewJumbotronMovieTemplate, linkButton } from '../views/templates';

class MovieJumbotron extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
    this.afterRender();
  }

  render() {
    this.innerHTML = `
      <div class="swiper-container header">
        <div class="swiper-wrapper">
          
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    `;
  }

  async afterRender() {
    const swiperWrapperElement = document.querySelector('.swiper-wrapper');

    setTimeout(() => {
      this._movies[1].map((movie) => {
        swiperWrapperElement.innerHTML += `
          <div class="swiper-slide-header swiper-slide">
            ${itemViewJumbotronMovieTemplate(movie)}  
          </div>
        `;
      });

      linkButton(this._movies[0]);
    }, 2000);
  }
}

customElements.define('movie-jumbotron', MovieJumbotron);
