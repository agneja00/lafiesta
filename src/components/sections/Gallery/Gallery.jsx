import styles from "./Gallery.module.scss";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { GALLERY_BLOCKS, GALLERY_IMAGES } from "@/constants/media";
import { getCloudinaryUrl, getCloudinarySrcSet } from "@/utils/cloudinary";
import usePhotoDeepLink from "@/hooks/usePhotoDeepLink";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import Lightbox from "@/components/Lightbox/Lightbox";

const THUMB_WIDTHS = [260, 380, 500];
const THUMB_SIZES = "(min-width: 64rem) 220px, (min-width: 48rem) 28vw, 45vw";

const Gallery = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = usePhotoDeepLink(GALLERY_IMAGES);
  const [activeId, setActiveId] = useState(GALLERY_BLOCKS[0]?.id);
  const chipsRef = useRef(null);

  useEffect(() => {
    const blocks = GALLERY_BLOCKS.map((block) => document.getElementById(block.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    blocks.forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const row = chipsRef.current;
    const chip = row?.querySelector(`[data-id="${activeId}"]`);
    if (!row || !chip) return;

    row.scrollTo({
      left: chip.offsetLeft - row.offsetWidth / 2 + chip.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  const scrollToBlock = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <>
      <section className={styles.section} aria-labelledby="gallery-page-title">
        <div className={styles.container}>
          <SectionTitle subtitle={t("gallery.subtitle")}>{t("gallery.title")}</SectionTitle>

          <nav className={styles.chipsBar} aria-label={t("gallery.title")}>
            <div ref={chipsRef} className={styles.chips}>
              {GALLERY_BLOCKS.map((block) => (
                <button
                  key={block.id}
                  type="button"
                  data-id={block.id}
                  className={`${styles.chip} ${activeId === block.id ? styles.chipActive : ""}`}
                  onClick={() => scrollToBlock(block.id)}
                  aria-current={activeId === block.id ? "true" : undefined}
                >
                  {t(block.titleKey)}
                </button>
              ))}
            </div>
          </nav>

          {GALLERY_BLOCKS.map((block) => (
            <div key={block.id} id={block.id} className={styles.block}>
              <h2 className={styles.blockTitle}>
                {t(block.titleKey)}
                <span className={styles.count}>{block.images.length}</span>
              </h2>

              <div className={styles.gallery}>
                {block.images.map((image) => (
                  <button
                    key={image.id}
                    type="button"
                    className={styles.imageButton}
                    onClick={() => setSelectedIndex(image.globalIndex)}
                    aria-label={t(image.altKey)}
                  >
                    <img
                      src={getCloudinaryUrl(image.src, { width: THUMB_WIDTHS[1] })}
                      srcSet={getCloudinarySrcSet(image.src, THUMB_WIDTHS)}
                      sizes={THUMB_SIZES}
                      alt={t(image.altKey)}
                      loading="lazy"
                      decoding="async"
                    />

                    <span className={styles.zoom} aria-hidden="true">
                      <FaMagnifyingGlassPlus />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        images={GALLERY_IMAGES}
        selectedIndex={selectedIndex}
        onNavigate={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
};

export default Gallery;
