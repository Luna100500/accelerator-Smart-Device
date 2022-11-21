import iMask from "imask";
import pristine from "pristinejs";

const form = new pristine(document.getElementById("bla-bla-form"));

document.addEventListener("submit", (event) => {
  if (!form.validate()) {
    event.preventDefault();
  }
});

const maskOptions = {
  mask: "+{7}(000)0000000",
};

iMask(document.querySelector("#phone-mask"), maskOptions);
iMask(document.querySelector("#modal-phone-mask"), maskOptions);
