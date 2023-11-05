class Header {
  handleOpenHome() {
    homePage.render();
    location.reload();
  }

  render() {
    const html = `
    <header class="header">
    <div class="container">
      <div class="header-contant">
          <div class="logo-container">
            <span class="logo" onclick="headerPage.handleOpenHome();"><span class="OE">0E</span>rror</span>
          </div>
          <nav class="header-nav">
            <li class="header-li header-li__1">
              <span
              onclick="headerPage.handleOpenHome();"
                href=""
                class="header-a header-a__home"
                >Home</span
              >
              <div class="header-a_border-1"></div>
            </li>
            <li class="header-li header-li__2">
              <span href="" class="header-a header-a__movies" >Movies</span>
              <div class="header-a_border-2"></div>
            </li>
            <li class="header-li header-li__3">
              <span href="" class="header-a header-a__news">News</span>
              <div class="header-a_border-3"></div>
            </li>
            <li class="header-li header-li__4">
              <span href="" class="header-a header-a__randomm-movie"
                >Random Movie</span
              >
              <div class="header-a_border-4"></div>
            </li>
          </nav>


        <div class="burger-menu">
        <button class="burger-menu__button">
          <span class="burger-menu__lines"></span>
        </button>

        <nav class="burger-menu__nav">
          <span  class="burger-menu__link"
            >Home</span
          >
          <span  class="burger-menu__link"
            >Movies</span
          >
          <span  class="burger-menu__link"
            >News</span
          >
          <span  class="burger-menu__link"
            >Random Movie</span
          >
        </nav>

        <div class="burger-menu__overlay"></div>
      </div>
          <div class="input-search__icon-1">
          <div class="input-search__icon">
            <span class="input-icon"
              ><img class="search-img" src="img/search.svg" alt="search"
            /></span>
            <input class="header-search" placeholder="Search" type="search" />
            </div>
            <button class="header-button__singin" type="button">Sing in</button>
          </div>

      </div>
    </div>
  </header>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}
const headerPage = new Header();
headerPage.render();
