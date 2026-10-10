import styles from "./Lightbox.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ContactActions from "@/components/ContactActions/ContactActions";
import { getPhotoUrl } from "@/hooks/usePhotoDeepLink";
import { getCloudinaryUrl, getCloudinarySrcSet } from "@/utils/cloudinary";

const IMAGE_WIDTHS = [800, 1200, 1600, 2400];
const IMAGE_SIZES = "(min-width: 64rem) 70rem, 90vw";
const SWIPE_THRESHOLD = 50;
const TAP_MOVE_LIMIT = 10;
const DOUBLE_TAP_DELAY = 300;
const MAX_SCALE = 4;
const DOUBLE_TAP_SCALE = 2.5;
const ZOOM_ANIMATION_MS = 200;

const Lightbox = ({ images, selectedIndex, onNavigate, onClose }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const transformRef = useRef(null);
  const touchStart = useRef(null);
  const lastTap = useRef(0);
  const lastTouchToggle = useRef(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const total = images.length;

  const isOpen = selectedIndex !== null;
  const selectedImage = isOpen ? images[selectedIndex] : null;

  const getScale = () => transformRef.current?.instance.transformState.scale ?? 1;

  const showPrev = useCallback(() => {
    setIsZoomed(false);
    onNavigate((selectedIndex - 1 + total) % total);
  }, [selectedIndex, total, onNavigate]);

  const showNext = useCallback(() => {
    setIsZoomed(false);
    onNavigate((selectedIndex + 1) % total);
  }, [selectedIndex, total, onNavigate]);

  const handleClose = useCallback(() => {
    setIsZoomed(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, showPrev, showNext]);

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

  const toggleZoomAt = (clientX, clientY) => {
    const api = transformRef.current;
    if (!api) return;

    if (getScale() > 1.01) {
      api.resetTransform(ZOOM_ANIMATION_MS);
      setIsZoomed(false);
      return;
    }

    const rect = api.instance.wrapperComponent.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    api.setTransform(
      x * (1 - DOUBLE_TAP_SCALE),
      y * (1 - DOUBLE_TAP_SCALE),
      DOUBLE_TAP_SCALE,
      ZOOM_ANIMATION_MS
    );
    setIsZoomed(true);
  };

  const handleTouchStart = (event) => {
    if (event.touches.length > 1) {
      touchStart.current = null;
      return;
    }

    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (event) => {
    if (event.touches.length > 1) touchStart.current = null;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    const isTap = Math.abs(deltaX) < TAP_MOVE_LIMIT && Math.abs(deltaY) < TAP_MOVE_LIMIT;

    if (isTap && event.target.tagName === "IMG") {
      const now = Date.now();

      if (now - lastTap.current < DOUBLE_TAP_DELAY) {
        lastTap.current = 0;
        lastTouchToggle.current = now;
        toggleZoomAt(touch.clientX, touch.clientY);
      } else {
        lastTap.current = now;
      }

      return;
    }

    if (getScale() > 1.01) return;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX > 0) showPrev();
    else showNext();
  };

  const handleDoubleClick = (event) => {
    event.stopPropagation();
    if (Date.now() - lastTouchToggle.current < 500) return;
    toggleZoomAt(event.clientX, event.clientY);
  };

  const handleOverlayClick = () => {
    if (getScale() <= 1.01) handleClose();
  };

  const handleTransformed = (_, state) => {
    setIsZoomed(state.scale > 1.01);
  };

  const stopPropagation = (event) => event.stopPropagation();

  return (
    <div
      className={styles.lightbox}
      role="dialog"
      aria-modal="true"
      aria-label={t(selectedImage.altKey)}
      onClick={handleOverlayClick}
    >
      <span className={styles.counter} aria-hidden="true">
        {selectedIndex + 1} / {total}
      </span>

      <button
        type="button"
        className={styles.closeButton}
        onClick={(event) => {
          event.stopPropagation();
          handleClose();
        }}
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
        onTouchStartCapture={handleTouchStart}
        onTouchMoveCapture={handleTouchMove}
        onTouchEndCapture={handleTouchEnd}
      >
        <TransformWrapper
          key={selectedImage.id}
          ref={transformRef}
          minScale={1}
          maxScale={MAX_SCALE}
          centerOnInit
          limitToBounds
          wheel={{ step: 0.15 }}
          doubleClick={{ disabled: true }}
          onTransformed={handleTransformed}
        >
          <TransformComponent wrapperClass={styles.zoomWrapper} contentClass={styles.zoomContent}>
            <img
              className={isZoomed ? styles.imageZoomed : styles.image}
              src={getCloudinaryUrl(selectedImage.src, { width: IMAGE_WIDTHS[1] })}
              srcSet={getCloudinarySrcSet(selectedImage.src, IMAGE_WIDTHS)}
              sizes={IMAGE_SIZES}
              alt={t(selectedImage.altKey)}
              decoding="async"
              fetchPriority="high"
              draggable={false}
              onClick={stopPropagation}
              onDoubleClick={handleDoubleClick}
            />
          </TransformComponent>
        </TransformWrapper>

        <div className={styles.cta} onClick={stopPropagation}>
          <p className={styles.hint}>{t("galleryContactCta.lightboxHint")}</p>
          <ContactActions variant="lightbox" photoUrl={getPhotoUrl(lang, selectedImage.id)} />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
