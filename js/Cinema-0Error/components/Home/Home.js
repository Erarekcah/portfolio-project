class Home {
  render() {
    const html = `
    <section class="main-section__1">
    <div class="container">
      <div class="section-1__container">
        <div class="section-1__container-left">
          <p class="container-left-p">
            If you want to spend a wonderful<br />evening, then welcome
            to<br /><span>0Error</span>
          </p>
          <h2 class="container-left-h2">
            Movies, TV shows and much <br />more without limits
          </h2>
          <div class="container-left__buttons">
            <button class="container-left__button_1 btn-1" type="button">
              Subscribe
            </button>
            <button class="container-left__button_2 btn-2" type="button" >
              Go to films
            </button>
          </div>
        </div>
        <div class="section-1__container-right">
          <div class="section-1__circle"></div>
          <div class="section-1__content">
            <img src="img/foto - main - 1.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Section - 2  -->
  <section class="main-section__2">
    <div class="container">
      <div class="section-2__container">
        <h2 class="section-2__container-h2">Recommendations</h2>
        <!-- Slider main container -->
        <div class="swiper">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
  
            <div class="swiper-slide swiper-slide-1">
              <img src="img/film1.png" alt="img" class="swiper-img" />
              <img src="img/hover-swiper-img.png" alt="img" class="hover-swiper-img" />
              <p>Ride on</p>
            </div>
            <div class="swiper-slide">
              <img src="img/film2.png" alt="img" class="swiper-img" />
              <img src="img/hover-swiper-img.png" alt="img" class="hover-swiper-img" />
              <p>Barbie 2023</p>
            </div>
            <div class="swiper-slide">
              <img src="img/film5.png" alt="img" class="swiper-img" />
              <img src="img/hover-swiper-img.png" alt="img" class="hover-swiper-img" />
              <p>Heart of Stone</p>
            </div>
            <div class="swiper-slide">
              <img src="img/film3.png" alt="img" class="swiper-img" />
              <img src="img/hover-swiper-img.png" alt="img" class="hover-swiper-img" />
              <p>Oppenheimer</p>
            </div>
            <div class="swiper-slide">
              <img src="img/film4.png" alt="img" class="swiper-img" />
              <img src="img/hover-swiper-img.png" alt="img" class="hover-swiper-img" />
              <p>SPIDER-MAN: ACROSS THE SPIDER-VERSE</p>
            </div>
          </div>
        </div>
        <div class="container-company">
          <div class="container-company__content">
            <img src="img/company 1.svg" alt="img" class="company-1" />
            <img src="img/company 2.svg" alt="img" class="company-2" />
            <img src="img/company 3.svg" alt="img" class="company-3" />
            <img src="img/company 4.svg" alt="img" class="company-4" />
            <img src="img/company 5.svg" alt="img" class="company-5" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section - 3  -->
  <section class="main-section__3">
    <div class="container">
      <div class="section-3__subscription">
        <div class="subscription__1-container">
          <div class="subscription__1-container__content">
            <h2 class="subscription__1-h2">Base</h2>
            <span class="subscription__1-span-mony">$8.99</span>
            <p class="subscription__1-p">
              For warm and cozy views with the family
            </p>
            <span class="subscription__1-span-days">30 days free</span>
            <div class="subscription__1-container-fact">
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >Unlimited movies, TV series and more</span
                >
              </div>
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >Simultaneous viewing on 1 screen</span
                >
              </div>
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >No HD quality</span
                >
              </div>
              <button
                class="subscription__1-btn subscription-btn"
                type="button"
              >
                Choose a tariff
              </button>
            </div>
          </div>
        </div>
        <div class="subscription__1-container">
          <div class="subscription__1-container__content">
            <h2 class="subscription__1-h2">Premium</h2>
            <span class="subscription__1-span-mony">$11.99</span>
            <p class="subscription__1-p">
              For warm and cozy views with the family
            </p>
            <span class="subscription__1-span-days">30 days free</span>
            <div class="subscription__1-container-fact">
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >Unlimited movies, TV series and more</span
                >
              </div>
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >Simultaneous viewing on 2 screen</span
                >
              </div>
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >HD quality</span
                >
              </div>
              <button
                class="subscription__1-btn subscription-btn"
                type="button"
              >
                Choose a tariff
              </button>
            </div>
          </div>
        </div>
        <div class="subscription__1-container">
          <div class="subscription__1-container__content">
            <h2 class="subscription__1-h2">Premium Plus</h2>
            <span class="subscription__1-span-mony">$25.00</span>
            <p class="subscription__1-p">
              For warm and cozy views with the family
            </p>
            <span class="subscription__1-span-days">35 days free</span>
            <div class="subscription__1-container-fact">
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >Unlimited movies, TV series and more</span
                >
              </div>
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >Simultaneous viewing on 5 screen</span
                >
              </div>
              <div class="fact-container">
                <img src="img/check-mark.svg" alt="img" /><span
                  >Ultra HD quality</span
                >
              </div>
              <button
                class="subscription__1-btn subscription-btn"
                type="button"
              >
                Choose a tariff
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="section-3__random-support">
        <img class="random-support_effect" src="img/efect.png" alt="img" />
        <div class="section-3__random-support-top">
          <img
            class="section-3-top__left-img"
            src="img/foto section - 3.png"
            alt="img"
          />
          <p class="section-3__random-support-top-p">
            If you do not know what to watch,<br />
            we will choose a movie for you:<br />
            <span>Random Movie</span>
          </p>
        </div>
        <div class="random-support-bottom__circle"></div>
        <div class="section-3__random-support-bottom">
          <div class="section-3__computer-background">
            <p class="section-3__computer-background__p">
              In case of problems, write to support
              <a id="section-3_!"></a>
            </p>
          </div>
          <img
            class="section-3__computer"
            src="img/section3-computer.png"
            alt="img"
          />
        </div>
      </div>
    </div>
  </section>
    `;
    ROOT_HOME.innerHTML = html;
  }
}
const homePage = new Home();
homePage.render();
