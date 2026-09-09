import styles from "./GalleryPreview.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaXmark, FaChevronLeft, FaChevronRight, FaImages } from "react-icons/fa6";
import { GALLERY_PREVIEW_IMAGES } from "../../../constants/media";
import { ROUTES } from "../../../constants/routes";
import { getCloudinaryUrl, getCloudinarySrcSet } from "../../../utils/cloudinary";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Button from "../../Button/Button";

const THUMB_WIDTHS = [300, 450, 600];
const THUMB_SIZES = "(min-width: 64rem) 280px, (min-width: 48rem) 33vw, 45vw";

const LIGHTBOX_WIDTHS = [800, 1200, 1600];
const LIGHTBOX_SIZES = "(min-width: 64rem) 70rem, 90vw";

const SWIPE_THRESHOLD = 50;

const GalleryPreview = () => {
  const { t } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartX = useRef(null);

  const total = GALLERY_PREVIEW_IMAGES.length;
  const selectedImage = selectedIndex !== null ? GALLERY_PREVIEW_IMAGES[selectedIndex] : null;

  const openImage = (index) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showPrev = useCallback(() => {
    setSelectedIndex((current) => (current - 1 + total) % total);
  }, [total]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex, showPrev, showNext]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const nextIndex = (selectedIndex + 1) % total;
    const prevIndex = (selectedIndex - 1 + total) % total;

    [nextIndex, prevIndex].forEach((index) => {
      const preloadImg = new Image();
      preloadImg.src = getCloudinaryUrl(GALLERY_PREVIEW_IMAGES[index].src, {
        width: LIGHTBOX_WIDTHS[1],
      });
    });
  }, [selectedIndex, total]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    if (deltaX > 0) {
      showPrev();
    } else {
      showNext();
    }
  };

  return (
    <>
      <section id="galerija" className={styles.section} aria-labelledby="gallery-preview-title">
        <div className={styles.container}>
          <SectionTitle subtitle={t("gallery.subtitle")}>{t("gallery.title")}</SectionTitle>

          <div className={styles.gallery}>
            {GALLERY_PREVIEW_IMAGES.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className={styles.imageButton}
                onClick={() => openImage(index)}
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
              </button>
            ))}
          </div>

          <div className={styles.action}>
            <Button as="link" to={ROUTES.GALLERY} size="medium" icon={FaImages}>
              {t("gallery.viewAll")}
            </Button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={t(selectedImage.altKey)}
          onClick={closeImage}
        >
          <button
            type="button"
            className={styles.closeButton}
            onClick={closeImage}
            aria-label={t("common.close")}
          >
            <FaXmark aria-hidden="true" />
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navButtonPrev}`}
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label={t("common.previous")}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            className={`${styles.navButton} ${styles.navButtonNext}`}
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={t("common.next")}
          >
            <FaChevronRight aria-hidden="true" />
          </button>

          <div
            className={styles.lightboxContent}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={selectedImage.id}
              src={getCloudinaryUrl(selectedImage.src, { width: LIGHTBOX_WIDTHS[1] })}
              srcSet={getCloudinarySrcSet(selectedImage.src, LIGHTBOX_WIDTHS)}
              sizes={LIGHTBOX_SIZES}
              alt={t(selectedImage.altKey)}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPreview;
