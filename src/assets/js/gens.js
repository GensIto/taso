import '@babel/polyfill';
import {gnavScreen} from './gnavScreen';

gnavScreen();

// ======================================================================
//
// ## swiper
//
// ======================================================================

window.addEventListener('load', () => {
  const clientW = window.innerWidth;
  const spSize = 768;
  const clientSp = clientW < spSize;

  const sliderWrap = document.querySelectorAll('.slider-wrap');
  const sliderMain = document.querySelectorAll('.slider');
  const sliderNext = document.querySelectorAll('.swiper-button-next');
  const sliderPrev = document.querySelectorAll('.swiper-button-prev');
  const sliderPagination = document.querySelectorAll('.swiper-pagination');

  for (let i = 0; i < sliderWrap.length; i++) {
    const num = ('00' + (i + 1)).slice(-2);
    sliderWrap[i].className += num;
    sliderMain[i].className += num;
    sliderNext[i].className += num;
    sliderPrev[i].className += num;
    sliderPagination[i].className += num;

    const campSwiper = new Swiper('.slider' + num, {
      speed: 400,
      slidesPerView: 1,
      autoHeight: true,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination' + num,
        clickable: true
      },
      autoplay: {
        delay: 3000
      },
      navigation: {
        nextEl: '.swiper-button-next' + num,
        prevEl: '.swiper-button-prev' + num
      }
    });
  }
  const enjoySwiperToL = () =>
    new Swiper('.top-enjoy-swiper-to-l', {
      loop: true, // ループ有効
      slidesPerView: clientSp ? 2 : 4.5, // 一度に表示する枚数
      centeredSlides: true,
      speed: 5000, // ループの時間
      allowTouchMove: false, // スワイプ無効
      spaceBetween: 20,
      autoplay: {
        delay: 0, // 途切れなくループ
        disableOnInteraction: false
      }
    });
  enjoySwiperToL();
  const enjoySwiperToR = () =>
    new Swiper('.top-enjoy-swiper-to-r', {
      loop: true, // ループ有効
      slidesPerView: clientSp ? 2 : 4.5, // 一度に表示する枚数
      centeredSlides: true,
      speed: 5000, // ループの時間
      allowTouchMove: false, // スワイプ無効
      spaceBetween: 20,
      autoplay: {
        delay: 0, // 途切れなくループ
        disableOnInteraction: false,
        reverseDirection: true // 逆方向有効化
      }
    });
  enjoySwiperToR();
  // const bannerSwiper = new Swiper('.bnr-list-swiper', {
  // slidesPerView: clientSp ? 2 : 4,
  // spaceBetween: clientSp ? 10 : 30,
  // centeredSlides: true
  // loop: true,
  // pagination: {
  //   el: '.bnr-list-swiper-pagination',
  //   clickable: true
  // },
  // navigation: {
  //   nextEl: '.bnr-list-swiper-button-next',
  //   prevEl: '.bnr-list-swiper-button-prev'
  // }
  // });

  const topKvSwiper = () =>
    new Swiper('.slider-kv', {
      spaceBetween: 30,
      effect: 'fade',
      autoplay: {
        delay: 3000
      },
      loop: true,
      allowTouchMove: false,
      thumbs: {
        swiper: topKvTxtSwiper
      }
    });
  topKvSwiper();

  const topKvTxtSwiper = new Swiper('.slider-kv-thumbnail', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000
    },
    loop: true,
    allowTouchMove: false
  });

  const stayShinglePage = new Swiper('.stay-shingle-page', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});
// ###
// ----------------------------------------------------------------------
window.onload = function () {
  const header = document.querySelector('#js-header');
  const headerH = header.getBoundingClientRect().height;
  if (window.location.hash.indexOf('#') != -1) {
    scrollBy(0, -headerH - 50);
  }
};

const pageLinks = document.querySelectorAll('a');

pageLinks.forEach((pageLink) =>
  pageLink.addEventListener('click', () => {
    const header = document.querySelector('#js-header');
    const headerH = header.getBoundingClientRect().height;
    setTimeout(() => {
      scrollBy(0, -headerH - 70);
    }, 1);
  })
);
// ======================================================================
//
// ## モーダル
//
// ======================================================================
const createMovieBox = document.querySelector('#createMovieBox');
const createMovieVilla = () =>
  createMovieBox.insertAdjacentHTML(
    'afterbegin',
    '<iframe id="addIframe" width="940" height="529" src="https://www.youtube.com/embed/ZkvCyyFrvXM" title="ISE-SHIMA OCEAN VILLA 倭〔伊勢志摩オーシャンヴィラ倭〕" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );
const createMovieCamp = () =>
  createMovieBox.insertAdjacentHTML(
    'afterbegin',
    '<iframe id="addIframe"  width="674" height="379" src="https://www.youtube.com/embed/fsDK3QCGBFQ" title="TASO FOREST CAMP〔田曽フォレストキャンプ〕" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );
const createMovieMarina = () =>
  createMovieBox.insertAdjacentHTML(
    'afterbegin',
    '<iframe id="addIframe"  width="940" height="529" src="https://www.youtube.com/embed/lAqGyGMX9kg" title="TASO FOREST MARINA〔田曽フォレストマリーナ〕三重県南伊勢田曽白浜のキャンプ場" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );
const createMovieSkydiving = () =>
  createMovieBox.insertAdjacentHTML(
    'afterbegin',
    '<iframe id="addIframe" width="940" height="529" src="https://www.youtube.com/embed/rfyQHzEod-Y" title="伊勢志摩スカイダイビングクラブ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );
const createMovieBuggy = () =>
  createMovieBox.insertAdjacentHTML(
    'afterbegin',
    '<iframe id="addIframe"  width="560" height="315" src="https://www.youtube.com/embed/ckLtfkt1JA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );
const createMovieMarine = () =>
  createMovieBox.insertAdjacentHTML(
    'afterbegin',
    '<iframe id="addIframe"  width="560" height="315" src="https://www.youtube.com/embed/01siuCEh3FY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  );

const deleteMovie = () => document.querySelector('#addIframe').remove();
if (document.querySelector('#movie-villa')) {
  MicroModal.init({
    onShow: createMovieVilla,
    onClose: deleteMovie,
    disableScroll: true
  });
}
if (document.querySelector('#movie-camp')) {
  MicroModal.init({
    onShow: createMovieCamp,
    onClose: deleteMovie,
    disableScroll: true
  });
}
if (document.querySelector('#movie-marina')) {
  MicroModal.init({
    onShow: createMovieMarina,
    onClose: deleteMovie,
    disableScroll: true
  });
}
if (document.querySelector('#movie-skydiving')) {
  MicroModal.init({
    onShow: createMovieSkydiving,
    onClose: deleteMovie,
    disableScroll: true
  });
}
if (document.querySelector('#movie-buggy')) {
  MicroModal.init({
    onShow: createMovieBuggy,
    onClose: deleteMovie,
    disableScroll: true
  });
}
if (document.querySelector('#movie-marine')) {
  MicroModal.init({
    onShow: createMovieMarine,
    onClose: deleteMovie,
    disableScroll: true
  });
}

// ======================================================================
//
// ## 高さ揃え
//
// ======================================================================
const autoHeight = (match, align) => {
  const targetH = match.getBoundingClientRect();
  for (let i = 0; i < align.length; i++) {
    align[i].style.height = targetH.height + 'px';
  }
};

const matchEverytime = document.querySelector('#js-match-everytime');
const alignEverytime = document.querySelectorAll('#js-match-align-everytime');

const matchEverytimeContent = document.querySelector('#matchEverytimeContent');
const alignEverytimeContent = document.querySelectorAll(
  '#alignEverytimeContent'
);

const matchEat = document.querySelector('#js-match-eat');
const alignEat = document.querySelectorAll('#js-match-align-eat');

const matchCafe = document.querySelector('#js-match-cafe');
const alignCafe = document.querySelectorAll('#js-match-align-cafe');

const matchCafeImg = document.querySelector('#js-match-cafe-img');
const alignCafeImg = document.querySelectorAll('#js-match-align-cafe-img');

const matchBbq = document.querySelector('#js-match-bbq');
const alignBbq = document.querySelectorAll('#js-match-align-bbq');

window.addEventListener('load', () => {
  const clientW = window.innerWidth;
  const spSize = 768;
  const clientSp = clientW < spSize;

  if (!clientSp) {
    if (matchEverytime && alignEverytime)
      autoHeight(matchEverytime, alignEverytime);
    if (matchEat && alignEat) autoHeight(matchEat, alignEat);
    if (matchEverytimeContent && alignEverytimeContent)
      autoHeight(matchEverytimeContent, alignEverytimeContent);
    if (matchBbq && alignBbq) autoHeight(matchBbq, alignBbq);
    if (matchCafe && alignCafe) autoHeight(matchCafe, alignCafe);
    if (matchCafeImg && alignCafeImg) autoHeight(matchCafeImg, alignCafeImg);
  }
});
window.addEventListener('resize', () => {
  const clientW = window.innerWidth;
  const spSize = 768;
  const clientSp = clientW < spSize;
  if (!clientSp) {
    if (matchEverytime && alignEverytime)
      autoHeight(matchEverytime, alignEverytime);
    if (matchEat && alignEat) autoHeight(matchEat, alignEat);
    if (matchEverytimeContent && alignEverytimeContent)
      autoHeight(matchEverytimeContent, alignEverytimeContent);
    if (matchBbq && alignBbq) autoHeight(matchBbq, alignBbq);
    if (matchCafe && alignCafe) autoHeight(matchCafe, alignCafe);
    if (matchCafeImg && alignCafeImg) autoHeight(matchCafeImg, alignCafeImg);
  }
});
