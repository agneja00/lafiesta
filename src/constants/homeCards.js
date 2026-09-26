import { ICONS } from "./media";
import { ROUTES } from "./routes";

export const HOME_CREATE_CARDS = [
  {
    id: "bouquets",
    icon: ICONS.section1.card1,
    titleKey: "createCards.bouquets.title",
    descriptionKey: "createCards.bouquets.description",
    to: ROUTES.GALLERY,
    hash: "#bouquets",
  },

  {
    id: "compositions",
    icon: ICONS.section1.card2,
    titleKey: "createCards.compositions.title",
    descriptionKey: "createCards.compositions.description",
    to: ROUTES.GALLERY,
    hash: "#compositions",
  },

  {
    id: "balloons",
    icon: ICONS.section1.card3,
    titleKey: "createCards.balloons.title",
    descriptionKey: "createCards.balloons.description",
    to: ROUTES.GALLERY,
    hash: "#balloons",
  },

  {
    id: "sweets",
    icon: ICONS.section1.card4,
    titleKey: "createCards.sweetGifts.title",
    descriptionKey: "createCards.sweetGifts.description",
    to: ROUTES.GALLERY,
    hash: "#sweets",
  },

  {
    id: "wood",
    icon: ICONS.section1.card5,
    titleKey: "createCards.wood.title",
    descriptionKey: "createCards.wood.description",
    to: ROUTES.GALLERY,
    hash: "#wood",
  },

  {
    id: "funeral",
    icon: ICONS.section1.card6,
    titleKey: "createCards.funeral.title",
    descriptionKey: "createCards.funeral.description",
    to: ROUTES.GALLERY,
    hash: "#funeral",
  },
];

export const HOME_REASONS = [
  {
    id: "personal",
    icon: ICONS.section2.card1,
    titleKey: "reasons.personal.title",
    descriptionKey: "reasons.personal.description",
  },

  {
    id: "individual",
    icon: ICONS.section2.card2,
    titleKey: "reasons.individual.title",
    descriptionKey: "reasons.individual.description",
  },

  {
    id: "fresh",
    icon: ICONS.section2.card3,
    titleKey: "reasons.fresh.title",
    descriptionKey: "reasons.fresh.description",
  },

  {
    id: "choice",
    icon: ICONS.section2.card4,
    titleKey: "reasons.choice.title",
    descriptionKey: "reasons.choice.description",
  },
];

export const ORDER_STEPS = [
  {
    id: "choose",
    icon: ICONS.section3.card1,
    titleKey: "orderSteps.choose.title",
    descriptionKey: "orderSteps.choose.description",
  },
  {
    id: "contact",
    icon: ICONS.section3.card2,
    titleKey: "orderSteps.contact.title",
    descriptionKey: "orderSteps.contact.description",
  },
  {
    id: "prepare",
    icon: ICONS.section3.card3,
    titleKey: "orderSteps.prepare.title",
    descriptionKey: "orderSteps.prepare.description",
  },
  {
    id: "pickup",
    icon: ICONS.section3.card4,
    titleKey: "orderSteps.pickup.title",
    descriptionKey: "orderSteps.pickup.description",
  },
];
