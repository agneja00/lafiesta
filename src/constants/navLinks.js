import { ROUTES } from "./routes";
import {
  IoHomeOutline,
  IoFlowerOutline,
  IoImagesOutline,
  IoLocationOutline,
} from "react-icons/io5";

export const navLinks = [
  {
    label: "links.home",
    to: ROUTES.HOME,
    icon: IoHomeOutline,
  },
  {
    label: "links.services",
    to: ROUTES.HOME,
    hash: "#paslaugos",
    icon: IoFlowerOutline,
  },
  {
    label: "links.gallery",
    to: ROUTES.GALLERY,
    icon: IoImagesOutline,
  },
  {
    label: "links.contacts",
    to: ROUTES.HOME,
    hash: "#kontaktai",
    icon: IoLocationOutline,
  },
];
