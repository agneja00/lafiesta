const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const CLOUDINARY_BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const LOGO_URL = `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/logoo_aoovzs`;

export const FLOWERS_DECORATION = `${CLOUDINARY_BASE}/f_auto,q_auto,w_500/flowers_decoration_wbqyup`;

export const HERO_URL = `${CLOUDINARY_BASE}/f_auto,q_auto,w_900/heroo_wqvkfe`;
export const HERO_DESKTOP = `${CLOUDINARY_BASE}/f_auto,q_auto,w_1600/hero_desktop_xhnwvj`;

export const ICONS = {
  section1: {
    card1: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s1flower_dmzicu`,
    card2: `${CLOUDINARY_BASE}/f_auto,q_auto,w_160/s1gift_scj9g5.png`,
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

export const RAW_GALLERY_BLOCKS = [
  {
    id: "gifts",
    titleKey: "gallery.blocks.gifts",
    images: [
      {
        id: 51,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/51_pthacg.jpg`,
        altKey: "gallery.images.51",
      },
      {
        id: 34,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/34_vivqte.jpg`,
        altKey: "gallery.images.34",
      },
      {
        id: 48,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/48_nile7h.jpg`,
        altKey: "gallery.images.48",
      },
      {
        id: 43,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/43_pi3aoe.jpg`,
        altKey: "gallery.images.43",
      },
      {
        id: 45,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/45_qtehpi.jpg`,
        altKey: "gallery.images.45",
      },
      {
        id: 46,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/46_bgpcgp.jpg`,
        altKey: "gallery.images.46",
      },
      {
        id: 47,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/47_yctvms.jpg`,
        altKey: "gallery.images.47",
      },
      {
        id: 22,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/v1790770675/22_dtbwls.jpg`,
        altKey: "gallery.images.22",
      },
      {
        id: 10,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/10_lqx0fb.jpg`,
        altKey: "gallery.images.10",
      },
      { id: 7, src: `${CLOUDINARY_BASE}/f_auto,q_auto/07_qluvqg.jpg`, altKey: "gallery.images.07" },
      {
        id: 12,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/12_nnn97u.jpg`,
        altKey: "gallery.images.12",
      },
      {
        id: 36,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/36_rbtwa1.jpg`,
        altKey: "galleryPreview.images.36",
      },
      {
        id: 54,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/54_lvdfks.jpg`,
        altKey: "gallery.images.54",
      },
    ],
  },
  {
    id: "balloons",
    titleKey: "gallery.blocks.balloons",
    images: [
      {
        id: 56,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/56_w1prfl.jpg`,
        altKey: "gallery.images.56",
      },
      {
        id: 57,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/57_imx9ek.jpg`,
        altKey: "gallery.images.57",
      },
      {
        id: 64,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/64_r1jdgo.jpg`,
        altKey: "gallery.images.64",
      },
      {
        id: 23,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/23_twaigg.jpg`,
        altKey: "gallery.images.23",
      },
    ],
  },
  {
    id: "sweets",
    titleKey: "gallery.blocks.sweets",
    images: [
      { id: 3, src: `${CLOUDINARY_BASE}/f_auto,q_auto/03_wakckw.jpg`, altKey: "gallery.images.03" },
      {
        id: 14,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/14_gcfhnc.jpg`,
        altKey: "gallery.images.14",
      },
      {
        id: 41,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/41_sw8skx.jpg`,
        altKey: "gallery.images.41",
      },
      {
        id: 55,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/55_xsbehz.jpg`,
        altKey: "gallery.images.55",
      },
    ],
  },
  {
    id: "bouquets",
    titleKey: "gallery.blocks.bouquets",
    images: [
      { id: 5, src: `${CLOUDINARY_BASE}/f_auto,q_auto/05_bfmour.jpg`, altKey: "gallery.images.05" },
      {
        id: 11,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/11_zefvr4.jpg`,
        altKey: "galleryPreview.images.11",
      },
      {
        id: 17,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/17_vgulqn.jpg`,
        altKey: "galleryPreview.images.17",
      },
      {
        id: 38,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/38_czjg79.jpg`,
        altKey: "galleryPreview.images.38",
      },
      {
        id: 49,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/49_igbpoz.jpg`,
        altKey: "galleryPreview.images.49",
      },
      { id: 6, src: `${CLOUDINARY_BASE}/f_auto,q_auto/06_qlnpje.jpg`, altKey: "gallery.images.06" },
      { id: 8, src: `${CLOUDINARY_BASE}/f_auto,q_auto/08_baupfo.jpg`, altKey: "gallery.images.08" },
      {
        id: 15,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/15_t0qql4.jpg`,
        altKey: "gallery.images.15",
      },
      {
        id: 16,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/16_kz4pbn.jpg`,
        altKey: "gallery.images.16",
      },
      {
        id: 18,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/18_srmnha.jpg`,
        altKey: "gallery.images.18",
      },
      {
        id: 19,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/19_sq1odp.jpg`,
        altKey: "gallery.images.19",
      },
      {
        id: 26,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/26_px5v8s.jpg`,
        altKey: "gallery.images.26",
      },
      {
        id: 27,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/27_bq3yae.jpg`,
        altKey: "gallery.images.27",
      },
      {
        id: 28,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/28_wynn4w.jpg`,
        altKey: "gallery.images.28",
      },
      {
        id: 30,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/30_hn5ey0.jpg`,
        altKey: "gallery.images.30",
      },
      {
        id: 35,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/35_rgyybf.jpg`,
        altKey: "gallery.images.35",
      },
      {
        id: 37,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/37_g1argy.jpg`,
        altKey: "gallery.images.37",
      },
      {
        id: 39,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/39_x6jqaz.jpg`,
        altKey: "gallery.images.39",
      },
      {
        id: 40,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/40_gpar7f.jpg`,
        altKey: "gallery.images.40",
      },
      {
        id: 42,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/42_iyhob5.jpg`,
        altKey: "gallery.images.42",
      },
      {
        id: 50,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/50_gmiewh.jpg`,
        altKey: "gallery.images.50",
      },
      {
        id: 52,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/52_ds9d9k.jpg`,
        altKey: "gallery.images.52",
      },
      {
        id: 62,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/62_iobgcz.jpg`,
        altKey: "gallery.images.62",
      },
      {
        id: 63,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/63_xmhq8p.jpg`,
        altKey: "gallery.images.63",
      },
      {
        id: 65,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/65_jpfb5c.jpg`,
        altKey: "gallery.images.65",
      },
    ],
  },
  {
    id: "baskets",
    titleKey: "gallery.blocks.baskets",
    images: [
      { id: 4, src: `${CLOUDINARY_BASE}/f_auto,q_auto/04_nr62d0.jpg`, altKey: "gallery.images.04" },
      {
        id: 20,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/20_pbl5vk.jpg`,
        altKey: "gallery.images.20",
      },
      {
        id: 21,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/21_f09aaf.jpg`,
        altKey: "gallery.images.21",
      },
      {
        id: 25,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/25_sfbxoi.jpg`,
        altKey: "gallery.images.25",
      },
      {
        id: 29,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/29_flvtgz.jpg`,
        altKey: "gallery.images.29",
      },
      {
        id: 31,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/31_tzekq2.jpg`,
        altKey: "gallery.images.31",
      },
      {
        id: 32,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/32_uynx2i.jpg`,
        altKey: "gallery.images.32",
      },
      {
        id: 33,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/33_o6hcmd.jpg`,
        altKey: "gallery.images.33",
      },
      {
        id: 44,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/44_ftktlz.jpg`,
        altKey: "gallery.images.44",
      },
      {
        id: 53,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/53_go3c90.jpg`,
        altKey: "gallery.images.53",
      },
      {
        id: 58,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/58_ki4izk.jpg`,
        altKey: "gallery.images.58",
      },
      {
        id: 59,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/59_ta8yq2.jpg`,
        altKey: "gallery.images.59",
      },
      {
        id: 60,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/60_htaitw.jpg`,
        altKey: "gallery.images.60",
      },
    ],
  },
  {
    id: "shop",
    titleKey: "gallery.blocks.shop",
    images: [
      { id: 1, src: `${CLOUDINARY_BASE}/f_auto,q_auto/01_ea2e86.jpg`, altKey: "gallery.images.01" },
      { id: 2, src: `${CLOUDINARY_BASE}/f_auto,q_auto/02_w4v5kf.jpg`, altKey: "gallery.images.02" },
      { id: 9, src: `${CLOUDINARY_BASE}/f_auto,q_auto/09_hy4kt8.jpg`, altKey: "gallery.images.09" },
      {
        id: 13,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/13_elscr4.jpg`,
        altKey: "gallery.images.13",
      },
      {
        id: 24,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/24_iapc0f.jpg`,
        altKey: "gallery.images.24",
      },
      {
        id: 61,
        src: `${CLOUDINARY_BASE}/f_auto,q_auto/61_aijl9j.jpg`,
        altKey: "gallery.images.61",
      },
    ],
  },
];
