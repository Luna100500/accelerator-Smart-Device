import iMask from "imask";

document.addEventListener("submit", (event) => console.log("event"));

const maskOptions = {
  mask: "+{7}(000)0000000",
};

iMask(document.querySelector("#phone-mask"), maskOptions);
iMask(document.querySelector("#modal-phone-mask"), maskOptions);
