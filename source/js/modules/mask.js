import iMask from "imask";
import pristine from "pristinejs";

const form = new pristine(document.getElementById("form-mask"));

document.addEventListener("submit", (event) => {
  if (!form.validate()) {
    event.preventDefault();
  }
});

const maskOptions = {
  mask: "+{7}(000)0000000",
};

iMask(document.querySelector("#phone-mask"), maskOptions);
