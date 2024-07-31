const LANG_BTN = document.querySelector(".multi");

LANG_BTN.addEventListener("click", function() {
  LANG_BTN.innerHTML =
    LANG_BTN.innerHTML ===
    `<svg class="icon icon--lang">
      <use href="./img/svgsprite/sprite.symbol.svg#lang"></use>
    </svg> RU`
      ? (LANG_BTN.innerHTML = `<svg class="icon icon--lang">
      <use href="./img/svgsprite/sprite.symbol.svg#lang"></use>
    </svg> ENG`)
      : (LANG_BTN.innerHTML = `<svg class="icon icon--lang">
      <use href="./img/svgsprite/sprite.symbol.svg#lang"></use>
    </svg> RU`);
});

// function switchLang() {
//   LANG_BTN.addEventListener("click", () => {
//     LANG_BTN.textContent = "ENG";
//   });
// }
