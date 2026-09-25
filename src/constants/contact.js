export const PHONE_NUMBER = "+370 600 00000";
export const PHONE_HREF = "tel:+37060000000";
export const INSTAGRAM_URL = "https://www.instagram.com/lafiestalietuva/";
export const GOOGLE_MAPS_EMBED_SRC =
  "https://www.google.com/maps?q=Vilnius,Kapsų+g.+2&output=embed";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=Vilnius,Kapsų+g.+2";
export const WAZE_URL = "https://waze.com/ul?q=Vilnius,Kapsų+g.+2";

export const INSTAGRAM_DM_URL = "https://ig.me/m/lafiestalietuva";

const PHONE_RAW = PHONE_HREF.replace("tel:", "");

export const ADDRESS = "Kapsų g. 2 (Naujininkų Turgelis)";
export const WORKING_DAYS = "I–VII";
export const WORKING_TIME = "9:00 – 20:00";

export const getSmsHref = (body = "") =>
  `sms:${PHONE_RAW}${body ? `?&body=${encodeURIComponent(body)}` : ""}`;
