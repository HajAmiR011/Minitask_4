let fetchProduct = async () => {
  let product = "";
  let data = await fetch("http://localhost:3000/products");
  let res = await data.json();
  product = res.map((elem) => {
    return `<div class="w-[45%] flex gap-y-[15px] flex-col">
      <h1 class="text-center font-bold text-[40px]">${elem.title}</h1>
      <p class="text-justify leading-[25px] text-[14px] text-ellipsis overflow-hidden text-nowrap">${elem.description}</p>
      <img src="${elem.image}" alt="${elem.alt}" class="w-[50%] object-cover block mx-auto h-[190px]">
    </div>`;
  });
  document
    .querySelector(".products")
    .insertAdjacentHTML("afterbegin", product.join(""));
  let Button = document.createElement("button");
  Button.className =
    "btn w-[100px] h-[30px] bg-[green] text-white rounded-[7px] capitalize font-bold hover:bg-[deeppink] transition-all duration-300 mx-auto";
  Button.innerHTML = "more!";
  document
    .querySelector(".products")
    .insertAdjacentElement("beforeend", Button);
  let elements = [];
  document.querySelector(".btn").addEventListener("click", function () {
    elements = [...document.getElementsByTagName("p")];
    elements.map((elem) => {
      if (elem.style.whiteSpace == "normal") {
        elem.style.whiteSpace = "nowrap";
      } else {
        elem.style.whiteSpace = "wrap";
      }
    });
    if (document.querySelector(".btn").innerHTML == "more!") {
      document.querySelector(".btn").innerHTML = "less!";
    } else {
      document.querySelector(".btn").innerHTML = "more!";
    }
  });
};
export default fetchProduct;
