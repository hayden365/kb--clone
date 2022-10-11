import Swiper from "swiper";
import "swiper/css";

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const swiper = new Swiper(".swiper-container", {
  slidesPerView: "one",
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
