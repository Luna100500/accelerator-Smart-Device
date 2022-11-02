//==========About company========

const buttonAbout = document.querySelector(".about-company-button");
const buttonMore = document.querySelector(".button-more");
const extraText = document.querySelector(".extra-text");
const buttonHide = document.querySelector(".button-hide");
const mobExtraText = document.querySelector(".extra-text-mob");

const jsWorking = (buttonAbout) => {
  if (document.documentElement.clientWidth < 768) {
    buttonAbout.classList.remove("button-no-js");
    buttonAbout.classList.add("is-closed");
    mobExtraText.style.display = "none";
  } else {
    buttonAbout.classList.remove("button-no-js");
    buttonAbout.classList.add("is-closed");
  }
};

jsWorking(buttonAbout);

const showMore = (extraText, buttonHide, buttonMore) => {
  extraText.classList.remove("hidden");
  mobExtraText.style.display = "block";
  buttonHide.classList.remove("hidden");
  buttonMore.classList.add("hidden");
};

const showLess = (extraText, buttonHide, buttonMore) => {
  extraText.classList.add("hidden");
  buttonHide.classList.add("hidden");
  buttonMore.classList.remove("hidden");
};

buttonMore.addEventListener("click", () => {
  showMore(extraText, buttonHide, buttonMore);
});

buttonHide.addEventListener("click", () => {
  showLess(extraText, buttonHide, buttonMore);
});
