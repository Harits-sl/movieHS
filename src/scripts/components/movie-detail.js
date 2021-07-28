import { itemViewJumbotronMovieTemplate, linkButton } from '../views/templates';

class MovieDetail extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="detail-movie">
        ${itemViewJumbotronMovieTemplate(this._movie[0])}
      </div>
    `;

    console.log(this._movie);

    linkButton(this._movie[1], false);
  }
}

customElements.define('movie-detail', MovieDetail);
