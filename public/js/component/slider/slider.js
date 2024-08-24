let fetchSlider = async () => {
  let slider = "";
  let data = await fetch("http://localhost:3000/slider");
  let res = await data.json();
  slider = res.map((elem) => {
    return `<div class="swiper-slide"><img src="${elem.image}" alt="${elem.alt}"></div>`;
  });
  document
    .querySelector(".swiper-wrapper")
    .insertAdjacentHTML("afterbegin", slider.join(""));
};
export default fetchSlider;
