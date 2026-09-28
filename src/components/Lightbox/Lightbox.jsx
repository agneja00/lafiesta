import styles from "./Lightbox.module.scss";
import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ContactActions from "@/components/ContactActions/ContactActions";
import { getPhotoUrl } from "@/hooks/usePhotoDeepLink";
import { getCloudinaryUrl, getCloudinarySrcSet } from "@/utils/cloudinary";

const IMAGE_WIDTHS = [800, 1200, 1600];
const IMAGE_SIZES = "(min-width: 64rem) 70rem, 90vw";
const SWIPE_THRESHOLD = 50;

const Lightbox = ({ images, selectedIndex, onNavigate, onClose }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const touchStartX = useRef(null);
  const total = images.length;

  const isOpen = selectedIndex !== null;
  const selectedImage = isOpen ? images[selectedIndex] : null;

  const showPrev = useCallback(() => {
    onNavigate((selectedIndex - 1 + total) % total);
  }, [selectedIndex, total, onNavigate]);

  const showNext = useCallback(() => {
    onNavigate((selectedIndex + 1) % total);
  }, [selectedIndex, total, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, showPrev, showNext]);

  useEffect(() => {
    if (!isOpen) return;

    const nextIndex = (selectedIndex + 1) % total;
    const prevIndex = (selectedIndex - 1 + total) % total;

    [nextIndex, prevIndex].forEach((index) => {
      const preloadImg = new Image();
      preloadImg.src = getCloudinaryUrl(images[index].src, { width: IMAGE_WIDTHS[1] });
    });
  }, [isOpen, selectedIndex, total, images]);

  if (!isOpen) return null;

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

    if (deltaX > 0) showPrev();
    else showNext();
  };

  const stopPropagation = (event) => event.stopPropagation();

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={t(selectedImage.altKey)}
      onClick={onClose}
    >
      <span className={styles.counter} aria-hidden="true">
        {selectedIndex + 1} / {total}
      </span>

      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
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
          src={getCloudinaryUrl(selectedImage.src, { width: IMAGE_WIDTHS[1] })}
          srcSet={getCloudinarySrcSet(selectedImage.src, IMAGE_WIDTHS)}
          sizes={IMAGE_SIZES}
          alt={t(selectedImage.altKey)}
          decoding="async"
          fetchPriority="high"
          onClick={stopPropagation}
        />

        <div className={styles.cta} onClick={stopPropagation}>
          <p className={styles.hint}>{t("galleryContactCta.lightboxHint")}</p>
          <ContactActions variant="lightbox" photoUrl={getPhotoUrl(lang, selectedImage.id)} />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
