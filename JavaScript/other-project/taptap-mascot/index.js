const taptapMascot = document.querySelector("#taptap-mascot");
const taptapHead = document.querySelector("#mascot-head");
const taptapFace = document.querySelector("#mascot-face");

const checkboxAnimation = document.querySelectorAll(
  'input[name="setAnimation"]'
);
checkboxAnimation.forEach((check) => {
  check.onclick = (e) => {
    console.log(e.target.value);
  };
});

taptapMascot.onclick = (e) => {
  console.log(e);
  shakeHead();
};
const shakeHead = () => {
  taptapFace.style.animation = "shake-head infinite 1s";
  // taptapFace.style.transform = "translateX(10px)";
};
