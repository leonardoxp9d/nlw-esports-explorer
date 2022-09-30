const body = document.querySelector("body");
const buttonSwitch = document.querySelector(".switch");
const switchSound = new Audio("./src/audio/switchSound.mp3");

const changeThemeSwitch = () => {
  body.classList.toggle("light");
  switchSound.play();
};

buttonSwitch.addEventListener("click", changeThemeSwitch);
