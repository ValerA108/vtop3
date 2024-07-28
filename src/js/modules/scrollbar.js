import "overlayscrollbars/overlayscrollbars.css";
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
} from "overlayscrollbars";

// document.addEventListener("DOMContentLoaded", function() {
//   OverlayScrollbars(document.querySelectorAll(".blog-slider"), {});
// });

const osInstance = OverlayScrollbars(document.querySelector(".blog-slider"), {
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [["img", "load"]],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null,
  },
  overflow: {
    x: "hidden",
    y: "scroll",
  },
  scrollbars: {
    theme: "os-theme-dark",
    visibility: "auto",
    autoHide: "never",
    autoHideDelay: 2300,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: true,
    pointers: ["mouse", "touch", "pen"],
  },
});

// const defaultOptions = {
//   paddingAbsolute: false,
//   showNativeOverlaidScrollbars: false,
//   update: {
//     elementEvents: [["img", "load"]],
//     debounce: [0, 33],
//     attributes: null,
//     ignoreMutation: null,
//   },
//   overflow: {
//     x: "scroll",
//     y: "scroll",
//   },
//   scrollbars: {
//     theme: "os-theme-dark",
//     visibility: "auto",
//     autoHide: "never",
//     autoHideDelay: 1300,
//     autoHideSuspend: false,
//     dragScroll: true,
//     clickScroll: false,
//     pointers: ["mouse", "touch", "pen"],
//   },
// };
