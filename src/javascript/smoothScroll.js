import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  wrapper: ".ScrollWrap",
  content: ".ScrollContent",
  effects: true,
});

// Пинning для FixedElem
gsap.to(".FixedElem", {
  scrollTrigger: {
    trigger: ".FixedElem",
    start: "top-=300", // когда верх FixedElem доходит до верха вьюпорта
    end: "+=1700", // когда нижняя граница FixedElem прокрутится на 500px
    pin: true,
    pinSpacing: true, // чтобы остальной контент не прыгал
    scrub: false,
  },
});

// gsap.to(".W_TabsWrapFirst", {
//   scrollTrigger: {
//     trigger: ".W_TabsWrapFirst",
//     start: "bottom", // когда верх FixedElem доходит до верха вьюпорта
//     end: "+=100", // когда нижняя граница FixedElem прокрутится на 500px
//     pin: true,
//     pinSpacing: true, // чтобы остальной контент не прыгал
//     scrub: false,
//   },
// });
