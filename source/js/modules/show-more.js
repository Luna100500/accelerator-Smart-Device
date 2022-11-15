//==========About company========

const mobExtraText = document.querySelector(".about-company__text-mob");

const hideElementMobMin = (mobMin) => {
  mobMin.classList.add("hidden-mobile");
};

const mobMin = document.querySelector(".about-company__extra-text-mob");

const showElementMobMin = (mobMin) => {
  mobMin.classList.remove("hidden-mobile");
};

const extraText = document.querySelector(".about-company__extra-text");

const showElementExtraText = (extraText) => {
  extraText.classList.remove("hidden");
};

const hideElementExtraText = (extraText) => {
  extraText.classList.add("hidden");
};

const buttonAbout = document.querySelector(".about-company__button");

const showAboutCompanyButton = (buttonAbout) => {
  buttonAbout.classList.remove("button-no-js");
};

const buttonMore = document.querySelector(".button-more");
const buttonHide = document.querySelector(".button-hide");

const showButtonHide = (buttonHide, buttonMore) => {
  buttonHide.classList.remove("hidden");
  buttonMore.classList.add("hidden");
};

const showButtonMore = (buttonHide, buttonMore) => {
  buttonHide.classList.add("hidden");
  buttonMore.classList.remove("hidden");
};

buttonHide.addEventListener("click", () => {
  hideElementMobMin(mobMin);
  hideElementExtraText(extraText);
  showButtonMore(buttonHide, buttonMore);
});

buttonMore.addEventListener("click", () => {
  showElementMobMin(mobMin);
  showElementExtraText(extraText);
  showButtonHide(buttonHide, buttonMore);
});

const minimizeTextIfJsEnabled = () => {
  hideElementMobMin(mobMin);
  hideElementExtraText(extraText);
  showAboutCompanyButton(buttonAbout);
};

minimizeTextIfJsEnabled();
