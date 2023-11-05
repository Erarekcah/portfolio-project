const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86";
const API_URL_POPULAR =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1";
const API_URL_SEARCH =
  "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=";
const API_URL_MOVIE_DETAILS =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/";

class MobileHome {
  render() {
    const html = `
    <main class="mobile-main">
    <section class="mobile-section-1">
      <nav class="mobile-nav">
        <ul class="mobile-section-1__ul">
          <li class="mobile-section-1__li">
            <span class="mobile-menu__link">Фильмы</span>
          </li>
          <li class="mobile-section-1__li">
            <span class="mobile-menu__link">Сериалы</span>
          </li>
          <li class="mobile-section-1__li">
            <span class="mobile-menu__link">Мультфильмы</span>
          </li>
        </ul>
      </nav>
    </section>
    <section class="mobile-section-2">
      <div class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide movie-luck">
            <img src="img/swiper-img-1.png" alt="img" />
            <div class="swiper-slide__characteristics">
              <span class="swiper-slide__name-film">Удача</span>
              <span class="swiper-slide__age-film">2023</span>
            </div>
          </div>
          <div class="swiper-slide movie-avatar2023">
            <img src="img/swiper-img-2.png" alt="img" />
            <div class="swiper-slide__characteristics">
              <span class="swiper-slide__name-film">Аватар: Путь Воды</span>
              <span class="swiper-slide__age-film">2023</span>
            </div>
          </div>
          <div class="swiper-slide movie-jonUik4">
            <img src="img/swiper-img-3.png" alt="img" />
            <div class="swiper-slide__characteristics">
              <span class="swiper-slide__name-film">Джон Уик</span>
              <span class="swiper-slide__age-film">2023</span>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!-- If we need pagination -->
      </div>
    </section>
    <form class="mobile-search-form">
    <div class="mobile-search-container">
    <div class="mobile-search__img-container">
    <img class="mobile-search-img" src="img/mobile-footer-icon-2.svg" alt="img" />
    </div>
    <input type="search" placeholder="Поиск" class="mobile-search" />
    </div>
  </form>
    <section class="mobile-section-3">
     <div class="movies"></div>
     <div class="mobile-modal-film"></div>
    </section>
  </main>
    `;
    ROOT_MOBILE_HOME.innerHTML = html;
    // ------

    getMovies(API_URL_POPULAR);
    async function getMovies(url) {
      const resp = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      });
      const respData = await resp.json();
      showMovies(respData);
    }

    function getClassByRate(vote) {
      if (vote >= 7) {
        return "green";
      } else if (vote >= 5) {
        return "orang";
      } else {
        return "red";
      }
    }

    function showMovies(data) {
      const moviesEl = document.querySelector(".movies");
      // Отчишаем предудушие фильмы
      moviesEl.innerHTML = "";

      data.films.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        const rating =
          +movie.rating !== +movie.rating
            ? 7.1
            : +movie.rating === 0
            ? 6.8
            : +movie.rating;

        movieEl.innerHTML = `
    <div class="movie__cover-inner">
      <img class="movie_cover" src="${movie.posterUrlPreview}" alt="${movie.nameRu}" />
      <div class="movie__cover--darkened"> 
      </div>
    </div>
    `;
        movieEl.addEventListener("click", () => openModal(movie.filmId));
        moviesEl.appendChild(movieEl);
      });
    }
    const form = document.querySelector(".mobile-search-form");
    const search = document.querySelector(".mobile-search");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const apiSearchUrl = `${API_URL_SEARCH}${search.value}`;

      if (search.value) {
        getMovies(apiSearchUrl);
        search.value = "";
      }
    });

    // Модал

    const modalEl = document.querySelector(".mobile-modal-film");

    async function openModal(id) {
      const resp = await fetch(API_URL_MOVIE_DETAILS + id, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      });
      const filmvideo = `https://widgets.kinopoisk.ru/discovery/trailer/${id}?onlyPlayer=1&autoplay=1&cover=1`;

      const respData = await resp.json();
      console.log(respData);
      document.body.classList.add("stop-scrolling");
      const time = (respData.filmLength / 60).toFixed(2);
      const resultTime = String(time + ":")
        .replace(/[\./]/g, " ч ")
        .replace(/[\:/]/g, " мин");

      modalEl.classList.add("modal--show");
      modalEl.innerHTML = `
<div class="modal__card">
  <img class="modal__movie-backdrop" src="${respData.posterUrl}" alt="${
        respData.nameRu
      }" />
  <h2>
    <span class="modal__movie-title">${respData.nameRu}</span>
    <span class="modal__movie-release-year"> - ${respData.year}</span>
  </h2>
  <ul class="modal__movie-info">
    <div class="loader"></div>
    <li class="modal__movie-genre">Жанр - ${respData.genres.map(
      (el) => `<span>${el.genre}</span>`
    )}</li>
    ${
      respData.filmLength
        ? `<li class="modal__movie-rutime">Время - ${resultTime} </li>`
        : ""
    }
    <li>Сайт: <a class="modal__movie-site" href="${respData.webUrl}">${
        respData.webUrl
      }</a></li>
    <li class="modal__movie-overview">Описание: ${respData.description}</li>
  </ul>
  <button type="button" class="modal__button-close">Закрыть</button>
</div>

`;

      const btnClose = document.querySelector(".modal__button-close");
      btnClose.addEventListener("click", () => closeModal());
    }

    const luck = document.querySelector(".movie-luck");
    luck.addEventListener("click", () => {
      openModal(1087904);
    });
    const avatar2023 = document.querySelector(".movie-avatar2023");
    avatar2023.addEventListener("click", () => {
      openModal(505898);
    });
    const jonuik4 = document.querySelector(".movie-jonUik4");
    jonuik4.addEventListener("click", () => {
      openModal(1267348);
    });

    function closeModal() {
      modalEl.classList.remove("modal--show");
      document.body.classList.remove("stop-scrolling");
    }

    window.addEventListener("click", (e) => {
      if (e.target === modalEl) {
        closeModal();
      }
    });

    // при нажатие на кнопку Esc закрываем модалку

    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        closeModal();
      }
    });
  }
}

const mobileHomePage = new MobileHome();
mobileHomePage.render();
const form = document.querySelector(".mobile-search-form");
