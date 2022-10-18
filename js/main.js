function uiIntroSetting() {
  // 상단 슬라이더
  $(".wrap-visual").moveContents({
    effect: "show",
    autoStop: true,
    eventEl: ".area-control > ul > li > a",
    conEl: ".area-con > ul > li",
    changeTimer: 5000,
    changeCallBack: function (a) {
      $(".wrap-visual").attr("class", "wrap-visual active" + (a * 1 + 1));
    },
  });
}

new Swiper(".mid_slide", {
  slidesPerView: 3,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
