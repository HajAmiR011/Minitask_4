import fetchMenu from "./component/menu/menu";
import fetchSlider from "./component/slider/slider";
import fetchProduct from "./component/products/product";
import fetchAmazing from "./component/amazing/amazing";
function initSlider() {
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
  });
}

let amazingInit = () => {
  var swiper = new Swiper(".myAmazing", {
    slidesPerView: 7.5,
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
async function allData() {
  await fetchMenu();
  await fetchSlider();
  await fetchProduct();
  await fetchAmazing();
  initSlider();
  amazingInit();
}
allData();
