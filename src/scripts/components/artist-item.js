import { itemViewArtistTemplates } from '../views/templates';

class ArtistItem extends HTMLElement {
  connectedCallback() {
    const artistItemElement = document.querySelectorAll('artist-item');
    for (let i = 0; i < artistItemElement.length; i++) {
      artistItemElement[i].classList.add('swiper-slide-list', 'swiper-slide');
    }
  }
  set artist(artist) {
    this._artist = artist;
    this.render();
  }

  render() {
    this.innerHTML = itemViewArtistTemplates(this._artist);
  }
}

customElements.define('artist-item', ArtistItem);
