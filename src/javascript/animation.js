var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim"),
  renderer: "canvas",
  loop: true,
  autoplay: true,
  // path: "/data_anim.json",
  path: "/data_new_anim.json",
});

var animation = bodymovin.loadAnimation({
  container: document.getElementById("anim2"),
  renderer: "canvas",
  loop: true,
  autoplay: true,
  // path: "/data_anim.json",
  path: "/data_new_anim.json",
});

animation.addEventListener("DOMLoaded", function () {
  const svg = document.querySelector("#anim svg");
  if (svg) {
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.style.willChange = "transform, opacity"; // помогает Safari с производительностью
  }
});
