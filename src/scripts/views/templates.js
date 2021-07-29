import dateFormat from '../utils/dateFormat';

const linkButton = (key, isHomePage = true) => {
  if (!isHomePage) {
    const linkButtonElement = document.querySelector('.link-button');

    linkButtonElement.innerHTML = `
      <a
        href="https://www.youtube.com/watch?v=${key}"
        style="font-size: 1.2rem;"
        class="btn btn-outline-trailer video-trailer"
      >
        Watch Trailer
      </a>
    `;
    return;
  }

  const linkButtonElements = document.querySelectorAll('.link-button');

  for (let i = 0; i < linkButtonElements.length; i++) {
    linkButtonElements[i].innerHTML = `
      <a
        href="https://www.youtube.com/watch?v=${key[i]}"
        style="font-size: 1.2em;"
        class="btn btn-outline-trailer video-trailer"
      >
        Watch Trailer
      </a>
    `;
  }
};

const itemViewJumbotronMovieTemplate = (movie) => `
  <div class="position-relative height-jumbotron">
    <img src="https://image.tmdb.org/t/p/w780${movie.backdrop_path}"
    alt="..."
    class="d-block w-100 h-100 rounded-0 position-absolute"
    loading=”lazy”
    />
    <div class="row position-absolute w-100 h-100">
      <div class="col-md-8 col-sm-12">
        <div class="position-absolute caption-jumbotron text-white d-block text-left">
          <h1 style="font-size: 3.8em">${movie.title}</h1>
          <p style="line-height: 30px; font-size: 1.1em; height: 125px;
          overflow: hidden; text-overflow: ellipsis;" class="mt-3 mb-2">
            ${movie.overview}
          </p>
          <p class="mb-5 text-white-50">
            ${dateFormat(movie.release_date)}
            <span class="mx-1">•</span>${movie.vote_average}
          </p>
          <div class="link-button">
          
          </div>
        </div>
      </div>
      <div class="col-md-4 d-none d-md-block">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="..."
        class="d-block rounded-0 position-absolute caption-jumbotron w-75"
        style="left: 40% !important"
        loading=”lazy”
        />
      </div>
    </div>
  </div>
`;

const listViewArtistTemplates = (title) => `
  <div class="d-flex align-items-center my-3">
    <h1 class="text-white mr-auto heading-title">${title}</h1>
    <i class="fas fa-chevron-circle-left button-prev button-prev-artist mr-3"></i>
    <i class="fas fa-chevron-circle-right button-next button-next-artist"></i>
  </div>
  <div class="swiper-container artist">
    <div class="swiper-wrapper artist-list mb-5">
    </div>
    <div class="swiper-scrollbar"></div>
  </div>
`;

const itemViewArtistTemplates = (artist) => `
  <img 
  src="https://image.tmdb.org/t/p/w185${artist.profile_path}"  alt="..." 
  />
  <div class="position-absolute caption-item-title">
    <p>${artist.name}</p>
  </div>
`;

const listViewMoviesTemplates = (title, isTrending) => {
  return `
    <div class="d-flex align-items-center my-3">
      <h1 class="text-white mr-auto heading-title">${title}</h1>
      ${buttonPrevNextMovie(isTrending)}
    </div>
    <div class="swiper-container ${isTrending ? 'trending' : 'top-rated'} ">
      <div class="swiper-wrapper movie-list ${
        isTrending ? 'list-trending-movie' : 'list-top-rated-movie'
      } mb-5">
      </div>
      <div class="swiper-scrollbar"></div>
    </div>
`;
};

const itemViewMovieTemplates = (movie) => `
  <a href="movie/detail/${movie.id}" 
  data-navigo 
  class="position-relative" 
  style="top: 0;">
    <img 
    src="https://image.tmdb.org/t/p/w185${movie.poster_path}"  alt="..." 
    />
  </a>
`;

const buttonPrevNextMovie = (isTrending) => {
  return isTrending
    ? `<i class="fas fa-chevron-circle-left button-prev button-prev-trending mr-3"></i>
  <i class="fas fa-chevron-circle-right button-next button-next-trending"></i>`
    : `<i class="fas fa-chevron-circle-left button-prev button-prev-top-rated mr-3"></i>
  <i class="fas fa-chevron-circle-right button-next button-next-top-rated"></i>`;
};

export {
  itemViewJumbotronMovieTemplate,
  listViewArtistTemplates,
  itemViewArtistTemplates,
  listViewMoviesTemplates,
  itemViewMovieTemplates,
  linkButton,
};
