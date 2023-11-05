class MobileFooter {
  render() {
    const html = `
    <footer class="footer-mobile">
    <div class="container-footer">
      <img class="mobile-footer__img-1" src="img/mobile-footer-icon-1.svg" alt="img" />
      <div class="mobile-footer__img-2"></div>
      <img class="mobile-footer__img-3" src="img/mobile-footer-icon-3.svg" alt="img" />
    </div>
  </footer>
    `;
    ROOT_MOBILE_FOOTER.innerHTML = html;
  }
}
const mobileFooterPage = new MobileFooter();
mobileFooterPage.render();
