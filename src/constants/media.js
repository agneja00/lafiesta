const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const LOGO_URL = `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/logoo_aoovzs`;
export const HERO_URL = `${CLOUDINARY_BASE}/f_auto,q_auto/heroo_wqvkfe`;
export const HERO_DESKTOP = `${CLOUDINARY_BASE}/f_auto,q_auto/hero_desktop_xhnwvj`;

export const ICONS = {
  section1: {
    card1: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s1flower_dmzicu`,
    card2: `${CLOUDINARY_BASE}/f_auto,q_auto/s1gift_scj9g5.png`,
    card3: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s1balloon_yfnjj9`,
    card4: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s1candy_rjhnux`,
  },

  section2: {
    card1: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s2heart_o3jvi7`,
    card2: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s2individual_ekc3jo`,
    card3: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s2fresh_pimwcj`,
    card4: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s2gift_m7bfof`,
  },
};
