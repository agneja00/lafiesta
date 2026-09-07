const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const LOGO_URL = `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/logoo_aoovzs`;
export const HERO_URL = `${CLOUDINARY_BASE}/f_auto,q_auto/heroo_wqvkfe`;
export const HERO_DESKTOP = `${CLOUDINARY_BASE}/f_auto,q_auto/hero_desktop_xhnwvj`;
export const FLOWERS_DECORATION = `${CLOUDINARY_BASE}/f_auto,q_auto/flowers_decoration_wbqyup`;

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
  section3: {
    card1: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s3n1_xt0xz6`,
    card2: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s3n2_lfi4sh`,
    card3: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s3n3_ra4siu`,
    card4: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s3n4_imeb0x`,
  },
};

export const GALLERY_PREVIEW_IMAGES = [
  {
    id: 36,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/36_rbtwa1.jpg`,
    altKey: "galleryPreview.images.36",
  },
  {
    id: 51,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/51_pthacg.jpg`,
    altKey: "galleryPreview.images.51",
  },
  {
    id: 56,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/56_w1prfl.jpg`,
    altKey: "galleryPreview.images.56",
  },
  {
    id: 11,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/11_zefvr4.jpg`,
    altKey: "galleryPreview.images.11",
  },
  {
    id: 34,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/34_vivqte.jpg`,
    altKey: "galleryPreview.images.34",
  },
  {
    id: 38,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/38_czjg79.jpg`,
    altKey: "galleryPreview.images.38",
  },
  {
    id: 17,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/17_vgulqn.jpg`,
    altKey: "galleryPreview.images.17",
  },
  {
    id: 49,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/49_igbpoz.jpg`,
    altKey: "galleryPreview.images.49",
  },
  {
    id: 54,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/54_lvdfks.jpg`,
    altKey: "galleryPreview.images.54",
  },
  {
    id: 57,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/57_imx9ek.jpg`,
    altKey: "galleryPreview.images.57",
  },
  {
    id: 60,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/60_htaitw.jpg`,
    altKey: "galleryPreview.images.60",
  },
  {
    id: 41,
    src: `${CLOUDINARY_BASE}/f_auto,q_auto/41_sw8skx.jpg`,
    altKey: "galleryPreview.images.41",
  },
];
