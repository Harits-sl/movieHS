class NavBar extends HTMLElement {
  set movieList(movie) {
    this._movieList = movie;
    this.render();
  }

  render() {
    console.log('slider');
    console.log(this._movieList);
    const listMovies = this._movieList.results.slice(0, 3);

    this.innerHTML = `
      <style>
        .caption-img {
          position: absolute;
          top: 11%;
          left: 2%;
          max-width: 60%;
          color: #fff;
          font-family: 'Source Sans Pro', sans-serif;
        }
        .poster-img {
          position: absolute;
          top: 7%;
          right: 4%;
          width: 33%;
          height: 88%;
          border: thin solid black;
          border-radius: 2%;
        }
        .opacity-img {
          opacity: 0.5;
        }
        .carousel-indicators {
          left: -13%;
          right: unset;
        }
        .carousel-indicators > li {
          width: 9px;
          height: 8px;
          background-clip: unset;
          border: none;
          border-radius: 50%;
        }
        @media only screen and (max-width: 562px) {
          .poster-img {
            top: 15%;
            width: 35%;
            height: 55%;
          }
          .w-100 {
            width: 200%!important;
          }
          .caption-img {
            max-width: 53%;
            top: 11%;
            font-size: 0.83rem;
          }
          .caption-img > h2 {
            margin-bottom: -20px;
          }
        }
      </style>
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
        <div class="carousel-inner" id="img-carousel">
          
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

    const imgCarouselElement = document.getElementById('img-carousel');
    listMovies.forEach((movie) => {
      imgCarouselElement.innerHTML += `
        <div class="carousel-item">
          <img
            src="https://image.tmdb.org/t/p/w780${movie.backdrop_path}"
            alt="..."
            class="d-block w-100 opacity-img"
            style="max-height: 600px;"
            loading=”lazy”
          />
          <div class="caption-img d-block text-left">
            <h2>Upcoming Movies</h2>
            <h3>${movie.title}</h3>
            <p class="mt-n3">Release On ${movie.release_date}</p>
            <p>${movie.overview}</p>
          </div>
          <img 
            src="https://image.tmdb.org/t/p/w342${movie.poster_path}"
            alt="..."
            class="poster-img"
            loading=”lazy”

          />
        </div>
      `;
    });
    // add class active
    const imgElement = document.querySelector('.carousel-item');
    imgElement.classList.add('active');
  }
}

customElements.define('nav-bar', navBar);
