import { detailMovie, videoMovie } from '../../data/themovieDB-source';

import '../../components/movie-detail';

const detail = {
  async render() {
    return `
      <div class="detail">
        <movie-detail></movie-detail>
      </div>
    `;
  },

  async afterRender(id) {
    const movieDetailElement = document.querySelector('movie-detail');

    const getDetailMovie = async () => {
      return await detailMovie(`/${id}`);
    };

    const getKeyVideoMovie = async () => {
      const getVideo = await videoMovie(id);
      return await getVideo.results[0].key;
    };

    const dataMovie = await Promise.all([getDetailMovie(), getKeyVideoMovie()]);
    console.log(dataMovie);

    movieDetailElement.movie = dataMovie;
  },
};

export default detail;
