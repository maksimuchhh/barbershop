(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const modalMenu = document.querySelector('.nav-menu')
  const overlay = document.querySelector('.overlay')

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    document.body.classList.toggle('hidden');
    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
  overlay.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('page-nav-link') || evt.target.classList.contains('nav-contacts-button') || evt.target.classList.contains('overlay')) {
      const expanded =
        menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
      document.body.classList.remove('hidden');
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open');
    }
  });
})();
