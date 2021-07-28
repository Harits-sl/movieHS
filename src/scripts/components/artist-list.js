import { listViewArtistTemplates } from '../views/templates';
import './artist-item.js';
import swiper from '../utils/swiper';

class ArtistList extends HTMLElement {
  set artist(artist) {
    this._artist = artist.results;
    this.render();
  }

  async render() {
    this.innerHTML = listViewArtistTemplates('Best Artists');

    const artistListElement = document.querySelector('.artist-list');
    this._artist.forEach((artist) => {
      const createArtistItemElement = document.createElement('artist-item');
      createArtistItemElement.artist = artist;
      artistListElement.appendChild(createArtistItemElement);
    });
  }
}

customElements.define('artist-list', ArtistList);
