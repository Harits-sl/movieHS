import Navigo from 'navigo';
import homePage from '../views/pages/homePage';
import detailPage from '../views/pages/detailPage';
import swiper from '../utils/swiper';

window.addEventListener('load', () => {
  const router = new Navigo('/');
  const render = (content) =>
    (document.getElementById('mainContent').innerHTML = content);

  router
    .on(
      '/',
      () => {
        swiper();
      },
      {
        async before(done) {
          render(await homePage.render());
          await homePage.afterRender();

          done();
        },
      }
    )
    .updatePageLinks()
    .resolve();

  router
    .on('movie/detail/:id', async ({ data }) => {
      render(await detailPage.render());
      await detailPage.afterRender(data.id);
    })
    .resolve();

  // router
  //   .on('artist/detail/:id', async ({ data }) => {
  //     document.getElementById(
  //       'mainContent'
  //     ).innerHTML = `<h1 class="text-white">detail artist page</h1>`;

  //     console.log('detail artist page');
  //     console.log(data);
  //   })
  //   .resolve();
});
