class Footer {
  render() {
    const html = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-content__left-tight">
            <div class="footer__border-top"></div>
            <div class="footer-content-left">
              <img src="img/footer-logo.svg" alt="img" class="footer-logo" />
              <a class="" type="emile:" href="">info@0error.com</a>
              <nav class="footer-left__nav">
                <ul class="footer-left__ul">
                  <li class="footer-left__li">
                    <a href="">
                      <img
                        src="img/foote-facebook.svg"
                        alt="img"
                        class="img__net-1"
                      />
                    </a>
                  </li>
                  <li class="footer-left__li">
                    <a href="">
                      <img
                        src="img/foote-telegram.svg"
                        alt="img"
                        class="img__net-2"
                      />
                    </a>
                  </li>
                  <li class="footer-left__li">
                    <a href="">
                      <img
                        src="img/foote-instagram.svg"
                        alt="img"
                        class="img__net-3"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="footer-content-right">
              <nav class="footer-right__nav">
                <ul class="footer-right__ul-1">
                  <li class="footer-right__li"><span href="">FAQ</span></li>
                  <li class="footer-right__li"><span href="">Support</span></li>
                  <li class="footer-right__li"><span href="">Movie</span></li>
                </ul>
                <ul class="footer-right__ul-2">
                  <li class="footer-right__li"><span href="">Account</span></li>
                  <li class="footer-right__li">
                    <span class="footer-right__a" onclick="headerPage.handleOpenHome();">Home</span>
                  </li>
                  <li class="footer-right__li"><span href="">New</span></li>
                </ul>
                <ul class="footer-right__ul-3">
                  <li class="footer-right__li"><span href="">Random Movie</span></li>
                  <li class="footer-right__li"><span href="">Reviews</span></li>
                </ul>
                <ul class="footer-right__ul-3">
                  <li class="footer-right__li"><span href="">About Us</span></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;

    ROOT_FOOTER.innerHTML = html;
  }
}
const footerPage = new Footer();
footerPage.render();
