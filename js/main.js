function uiIntroSetting() {
  // 상단 슬라이더
  $('.wrap-visual').moveContents({
    effect: 'show',
    autoStop: true,
    eventEl: '.area-control > ul > li > a',
    conEl: '.area-con > ul > li',
    changeTimer: 5000,
    changeCallBack: function (a) {
      $('.wrap-visual').attr('class', 'wrap-visual active' + (a * 1 + 1));
    },
  });
}

const midSwiper = new Swiper('.mid_slide', {
  slidesPerView: 3,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 28,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

const swiperPlay = document.querySelector('.play');
const swiperPause = document.querySelector('.pause');
swiperPlay.addEventListener('click', () => {
  swiperPause.classList.add('__off');
  swiperPlay.classList.remove('__off');
  midSwiper.autoplay.start();
});
swiperPause.addEventListener('click', () => {
  swiperPause.classList.remove('__off');
  swiperPlay.classList.add('__off');
  midSwiper.autoplay.stop();
});

const ui_toggle = document.querySelector('.ui-toggle');
const ui_toggle_on = document.querySelector('ui-toggle.on');
ui_toggle.addEventListener('click', () => {
  ui_toggle.classList.remove('on');
});
