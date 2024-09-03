import axios from "axios";
let fetchAmazing = async () => {
  let product = "";
  let res = await axios("http://localhost:3000/amazingProducts");
  product = res.data.map((item) => {
    return `<div class="swiper-slide"><img src=${item.images} loading="lazy"></div>`;
  });
  document
    .querySelector(".kamal")
    .insertAdjacentHTML("beforeend", product.join(""));
};
export default fetchAmazing;
