//=====Accordion===

const accordion = document.querySelector(".footer__group");
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
  const triggerEvent =
    event.target.classList.contains("footer__navigation-header") ||
    event.target.classList.contains("footer__contacts-header") ||
    event.target.closest(".footer__navigation-header") ||
    event.target.closest(".footer__contacts-header");

  if (!triggerEvent) {
    return;
  }

  const currentAccordionItem = event.target.closest(".accordion-item");
  const { navGroup } = getSelectors(currentAccordionItem);
  const isAccordionItemHidden = navGroup.classList.contains("hide");

  accordionItems.forEach(hideAccordionItem);

  if (isAccordionItemHidden) {
    showAccordionItem(currentAccordionItem);
  }
});
