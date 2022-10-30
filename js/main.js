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
swiperPause.addEventListener('click', () => {
  swiperPause.classList.remove('show');
  swiperPlay.classList.add('show');
  midSwiper.autoplay.stop();
});
swiperPlay.addEventListener('click', () => {
  swiperPlay.classList.remove('show');
  swiperPause.classList.add('show');
  midSwiper.autoplay.start();
});

const ui_toggle = document.querySelector('.ui-toggle');
ui_toggle.addEventListener('click', () => {
  if (ui_toggle.classList.contains('show')) {
    ui_toggle.classList.remove('show');
  } else {
    ui_toggle.classList.add('show');
  }
});
