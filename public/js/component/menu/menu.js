import axios from "axios";
let fetchMenu = async () => {
  let menu = "";
  let res = await axios("http://localhost:3000/menu");
  menu = res.data.map((elem) => {
    return `<div class="w-fit h-[inherit]"><a href="${elem.link}" class="block px-[10px] leading-[40px] text-white/[.5] capitalize font-bold text-[12px] hover:bg-[deeppink] hover:text-black transition-all duration-300">${elem.name}</a></div>`;
  });
  document
    .querySelector(".menu nav")
    .insertAdjacentHTML("afterbegin", menu.join(""));
};
export default fetchMenu;
