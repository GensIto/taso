export const gnavScreen = () => {
  // ### gnav
  // ----------------------------------------------------------------------
  const gnavPlay = document.querySelector('#js-gnav-play');
  const gnavEat = document.querySelector('#js-gnav-eat');
  const gnavStay = document.querySelector('#js-gnav-stay');
  const gnavMenu = document.querySelector('#js-gnav-menu');
  const gnavLayer = document.querySelector('.p-modal-layer');
  // ### sp-fixed-btn
  // ----------------------------------------------------------------------
  const fixedPlay = document.querySelector('#js-fixed-play');
  const fixedEat = document.querySelector('#js-fixed-eat');
  const fixedStay = document.querySelector('#js-fixed-stay');

  // ### gnavと紐つけたいスクリーン
  // ----------------------------------------------------------------------
  const screen = document.querySelector('#js-screen');
  const screenPlay = document.querySelector('#js-screen-play');
  const screenEat = document.querySelector('#js-screen-eat');
  const screenStay = document.querySelector('#js-screen-stay');
  const screenMenu = document.querySelector('#js-screen-menu');

  const clientW = window.innerWidth;
  const spSize = 768;
  const clientSp = clientW < spSize;

  const pc = () => {
    // ### play
    // ----------------------------------------------------------------------
    gnavPlay.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavPlay.classList.add('active');
      screen.classList.add('active');
      screenPlay.classList.add('active');
      gnavLayer.classList.add('active');
    });
    screenPlay.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavPlay.classList.add('active');
      screen.classList.add('active');
      screenPlay.classList.add('active');
      gnavLayer.classList.add('active');
    });
    gnavPlay.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavPlay.classList.remove('active');
      screen.classList.remove('active');
      screenPlay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    screenPlay.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavPlay.classList.remove('active');
      screen.classList.remove('active');
      screenPlay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    gnavPlay.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavPlay.classList.remove('active');
      screen.classList.remove('active');
      screenPlay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    screenPlay.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavPlay.classList.remove('active');
      screen.classList.remove('active');
      screenPlay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    // ### eat
    // ----------------------------------------------------------------------
    gnavEat.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavEat.classList.add('active');
      screen.classList.add('active');
      screenEat.classList.add('active');
      gnavLayer.classList.add('active');
    });
    screenEat.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavEat.classList.add('active');
      screen.classList.add('active');
      screenEat.classList.add('active');
      gnavLayer.classList.add('active');
    });
    gnavEat.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavEat.classList.remove('active');
      screen.classList.remove('active');
      screenEat.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    screenEat.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavEat.classList.remove('active');
      screen.classList.remove('active');
      screenEat.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    gnavEat.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavEat.classList.remove('active');
      screen.classList.remove('active');
      screenEat.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    screenEat.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavEat.classList.remove('active');
      screen.classList.remove('active');
      screenEat.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    // ### stay
    // ----------------------------------------------------------------------
    gnavStay.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavStay.classList.add('active');
      screen.classList.add('active');
      screenStay.classList.add('active');
      gnavLayer.classList.add('active');
    });
    screenStay.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavStay.classList.add('active');
      screen.classList.add('active');
      screenStay.classList.add('active');
      gnavLayer.classList.add('active');
    });
    gnavStay.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavStay.classList.remove('active');
      screen.classList.remove('active');
      screenStay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    screenStay.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavStay.classList.remove('active');
      screen.classList.remove('active');
      screenStay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    gnavStay.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavStay.classList.remove('active');
      screen.classList.remove('active');
      screenStay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    screenStay.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavStay.classList.remove('active');
      screen.classList.remove('active');
      screenStay.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    // ### menu
    // ----------------------------------------------------------------------
    gnavMenu.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavMenu.classList.add('active');
      screen.classList.add('active');
      screenMenu.classList.add('active');
      gnavLayer.classList.add('active');
    });
    screenMenu.addEventListener('mouseover', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      gnavMenu.classList.add('active');
      screen.classList.add('active');
      screenMenu.classList.add('active');
      gnavLayer.classList.add('active');
    });
    gnavMenu.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavMenu.classList.remove('active');
      screen.classList.remove('active');
      screenMenu.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
    screenMenu.addEventListener('mouseleave', () => {
      document
        .querySelector('html')
        .classList.remove('is-locked', 'gnav-is-active');
      gnavMenu.classList.remove('active');
      screen.classList.remove('active');
      screenMenu.classList.remove('active');
      gnavLayer.classList.remove('active');
    });
  };

  const sp = () => {
    const btn = document.querySelector('#js-gnav-trg');
    btn.addEventListener('click', () => {
      screen.classList.remove('active');
      screenPlay.classList.remove('active');
      fixedEat.classList.remove('active');
      screenEat.classList.remove('active');
      fixedStay.classList.remove('active');
      screenStay.classList.remove('active');
    });
    fixedPlay.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      if (!btn.classList.contains('is-active')) btn.classList.add('is-active');
      fixedPlay.classList.add('active');
      screen.classList.add('active');
      screenPlay.classList.add('active');
      //
      fixedEat.classList.remove('active');
      screenEat.classList.remove('active');
      fixedStay.classList.remove('active');
      screenStay.classList.remove('active');
    });
    fixedEat.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      if (!btn.classList.contains('is-active')) btn.classList.add('is-active');
      fixedEat.classList.add('active');
      screen.classList.add('active');
      screenEat.classList.add('active');
      //
      fixedPlay.classList.remove('active');
      screenPlay.classList.remove('active');
      fixedStay.classList.remove('active');
      screenStay.classList.remove('active');
    });
    fixedStay.addEventListener('click', () => {
      document
        .querySelector('html')
        .classList.add('is-locked', 'gnav-is-active');
      if (!btn.classList.contains('is-active')) btn.classList.add('is-active');
      fixedStay.classList.add('active');
      screen.classList.add('active');
      screenStay.classList.add('active');
      //
      fixedPlay.classList.remove('active');
      screenPlay.classList.remove('active');
      fixedEat.classList.remove('active');
      screenEat.classList.remove('active');
    });
  };

  clientSp ? sp() : pc();
};
