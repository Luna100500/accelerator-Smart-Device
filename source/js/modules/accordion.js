//=====Accordion===

const accordion = document.querySelector(".group");
const accordionItems = accordion.querySelectorAll(".accordion-item");

const getSelectors = (accordionItem) => {
  const minusButton = accordionItem.querySelector("button.minus-button");
  const plusButton = accordionItem.querySelector("button.plus-button");
  const navGroup = accordionItem.querySelector("ul.nav-group");

  return { minusButton, plusButton, navGroup };
};

const hideAccordionItem = (accordionItem) => {
  const { minusButton, plusButton, navGroup } = getSelectors(accordionItem);

  minusButton.classList.add("hide");
  plusButton.classList.remove("hide");
  navGroup.classList.add("hide");
};

const showAccordionItem = (accordionItem) => {
  const { minusButton, plusButton, navGroup } = getSelectors(accordionItem);

  minusButton.classList.remove("hide");
  plusButton.classList.add("hide");
  navGroup.classList.remove("hide");
};

const showControlsIfJSEnabled = (navList, telList) => {
  accordion.classList.add("js-enabled");
  accordionItems.forEach(hideAccordionItem);
};

showControlsIfJSEnabled();

accordion.addEventListener("click", (event) => {
  if (!event.target.classList.contains("plus-button")) {
    return;
  }

  accordionItems.forEach(hideAccordionItem);
  const currentAccordionItem = event.target.closest(".accordion-item");
  showAccordionItem(currentAccordionItem);
});

accordion.addEventListener("click", (event) => {
  if (!event.target.classList.contains("minus-button")) {
    return;
  }

  const currentAccordionItem = event.target.closest(".accordion-item");
  hideAccordionItem(currentAccordionItem);
});
