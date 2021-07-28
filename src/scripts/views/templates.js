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
        style="font-size: 1.2rem;"
        class="btn btn-outline-trailer video-trailer"
      >
        Watch Trailer
      </a>
    `;
  }
};

const itemViewJumbotronMovieTemplate = (movie) => `
  <div class="position-relative" style="height: 100vh">
    <img src="https://image.tmdb.org/t/p/w780${movie.backdrop_path}"
    alt="..."
    class="d-block w-100 rounded-0 position-absolute"
    style="height: 100vh"
    loading=”lazy”
    />
    <div class="row position-absolute w-100 h-100">
      <div class="col-8">
        <div class="position-absolute position-caption text-white d-block text-left">
          <h1 style="font-size: 4rem">${movie.title}</h1>
          <p style="line-height: 30px; font-size: 1.1rem" class="mt-3 mb-2">
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
      <div class="col-4">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="..."
        class="d-block rounded-0 position-absolute position-caption w-75"
        style="left: 40% !important"
        loading=”lazy”
        />
      </div>
    </div>
  </div>
`;

const listViewArtistTemplates = (title) => `
  <div class="d-flex align-items-center my-3">
    <h1 class="text-white mr-auto">${title}</h1>
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
  <a href="artist/detail/${artist.id}" 
  data-navigo 
  class="position-relative" 
  style="top: 0;">
    <img 
    src="https://image.tmdb.org/t/p/w185${artist.profile_path}"  alt="..." 
    />
    <div class="position-absolute caption-item-title">
      <p>${artist.name}</p>
    </div>
  </a>
`;

const listViewMoviesTemplates = (title, isTrending) => {
  return `
    <div class="d-flex align-items-center my-3">
      <h1 class="text-white mr-auto">${title}</h1>
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
    <div class="position-absolute caption-item-title">
      <p>${movie.title}</p>
    </div>
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
