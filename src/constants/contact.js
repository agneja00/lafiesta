export const PHONE_NUMBER = "+370 600 00000";
export const PHONE_HREF = "tel:+37060000000";

export const INSTAGRAM_URL = "https://www.instagram.com/lafiestalietuva/";
export const INSTAGRAM_DM_URL = "https://ig.me/m/lafiestalietuva";

export const FACEBOOK_URL = "https://www.facebook.com/lafiestalietuva";
export const FACEBOOK_DM_URL = "https://m.me/lafiestalietuva";

const COORDINATES = "54.6613334,25.2749752";

export const GOOGLE_MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${COORDINATES}&z=17&output=embed`;
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${COORDINATES}`;
export const WAZE_URL = `https://waze.com/ul?ll=${COORDINATES}&navigate=yes`;

export const ADDRESS = "Kapsų g. 2 (Naujininkų Turgelis)";
export const WORKING_TIME = "9:00 – 20:00";

const PHONE_RAW = PHONE_HREF.replace("tel:", "");

export const getSmsHref = (body = "") =>
  `sms:${PHONE_RAW}${body ? `?&body=${encodeURIComponent(body)}` : ""}`;
