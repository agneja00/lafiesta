export const PHONE_NUMBER = "+370 656 50079";
export const PHONE_HREF = "tel:+37065650079";

const isAndroid = typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);

const getAndroidAppUrl = (webUrl, packageName) => {
  const path = webUrl.replace("https://", "");
  return `intent://${path}#Intent;package=${packageName};scheme=https;S.browser_fallback_url=${encodeURIComponent(webUrl)};end`;
};

const INSTAGRAM_USERNAME = "lafiestalietuva";
const INSTAGRAM_WEB_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;

export const INSTAGRAM_URL = isAndroid
  ? getAndroidAppUrl(`https://instagram.com/_u/${INSTAGRAM_USERNAME}/`, "com.instagram.android")
  : INSTAGRAM_WEB_URL;
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_USERNAME}`;

const FACEBOOK_USERNAME = "lafiestalietuva";
const FACEBOOK_WEB_URL = `https://www.facebook.com/${FACEBOOK_USERNAME}`;

export const FACEBOOK_URL = isAndroid
  ? getAndroidAppUrl(FACEBOOK_WEB_URL, "com.facebook.katana")
  : FACEBOOK_WEB_URL;
export const FACEBOOK_DM_URL = `https://m.me/${FACEBOOK_USERNAME}`;

const COORDINATES = "54.6613334,25.2749752";

export const GOOGLE_MAPS_EMBED_SRC = `https://maps.google.com/maps?q=${COORDINATES}&z=17&output=embed`;
export const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${COORDINATES}`;
export const WAZE_URL = `https://waze.com/ul?ll=${COORDINATES}&navigate=yes`;

export const ADDRESS = "Kapsų g. 2 (Naujininkų Turgelis)";
export const WORKING_TIME = "9:00 – 20:00";

const PHONE_RAW = PHONE_HREF.replace("tel:", "");

export const getSmsHref = (body = "") =>
  `sms:${PHONE_RAW}${body ? `?&body=${encodeURIComponent(body)}` : ""}`;
