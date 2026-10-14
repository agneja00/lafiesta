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
const DOUBLE_TAP_DELAY = 350;
const DOUBLE_TAP_DISTANCE = 40;
const MAX_SCALE = 4;
const DOUBLE_TAP_SCALE = 2.5;
const ZOOM_ANIMATION_MS = 200;
const ZOOM_START_DELAY_MS = 30;
const ZOOMED_SCALE = 1.01;

const getPoint = (event) => {
  const touch = event.touches?.[0] ?? event.changedTouches?.[0];
  if (!touch) return null;
  return { x: touch.clientX, y: touch.clientY };
};

const Lightbox = ({ images, selectedIndex, onNavigate, onClose }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const controlsRef = useRef(null);
  const zoomAreaRef = useRef(null);
  const imageRef = useRef(null);
  const zoomedRef = useRef(false);
  const touchStart = useRef(null);
  const lastTouchPoint = useRef(null);
  const isMultiTouch = useRef(false);
  const lastTap = useRef(null);
  const lastTouchToggle = useRef(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const total = images.length;

  const isOpen = selectedIndex !== null;
  const selectedImage = isOpen ? images[selectedIndex] : null;

  const setZoomed = (value) => {
    zoomedRef.current = value;
    setIsZoomed(value);
  };

  const showPrev = useCallback(() => {
    zoomedRef.current = false;
    setIsZoomed(false);
    onNavigate((selectedIndex - 1 + total) % total);
  }, [selectedIndex, total, onNavigate]);

  const showNext = useCallback(() => {
    zoomedRef.current = false;
    setIsZoomed(false);
    onNavigate((selectedIndex + 1) % total);
  }, [selectedIndex, total, onNavigate]);

  const handleClose = useCallback(() => {
    zoomedRef.current = false;
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

  const getRenderedScale = () => {
    const content = zoomAreaRef.current?.querySelector(`.${styles.zoomContent}`);
    if (!content) return 1;

    const transform = window.getComputedStyle(content).transform;
    if (!transform || transform === "none") return 1;

    return new DOMMatrixReadOnly(transform).a;
  };

  const isScaled = () => getRenderedScale() > ZOOMED_SCALE;

  const isZoomedNow = () => isScaled() || zoomedRef.current;

  const isOnImage = (point) => {
    const rect = imageRef.current?.getBoundingClientRect();
    if (!rect) return false;

    return (
      point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom
    );
  };

  const syncZoomed = (delay = 0) => {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => setZoomed(isScaled()));
    }, delay);
  };

  const zoomOut = () => {
    setZoomed(false);
    window.setTimeout(() => {
      controlsRef.current?.setTransform(0, 0, 1, ZOOM_ANIMATION_MS);
    }, ZOOM_START_DELAY_MS);
  };

  const zoomInAt = (clientX, clientY) => {
    const area = zoomAreaRef.current;
    if (!controlsRef.current || !area) return;

    const rect = area.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    setZoomed(true);
    window.setTimeout(() => {
      controlsRef.current?.setTransform(
        x * (1 - DOUBLE_TAP_SCALE),
        y * (1 - DOUBLE_TAP_SCALE),
        DOUBLE_TAP_SCALE,
        ZOOM_ANIMATION_MS
      );
    }, ZOOM_START_DELAY_MS);
  };

  const toggleZoomAt = (clientX, clientY) => {
    if (isZoomedNow()) zoomOut();
    else zoomInAt(clientX, clientY);
  };

  const handleTap = (point) => {
    if (!isOnImage(point)) {
      lastTap.current = null;
      return;
    }

    const now = Date.now();
    const previous = lastTap.current;

    const isDoubleTap =
      previous &&
      now - previous.time < DOUBLE_TAP_DELAY &&
      Math.abs(point.x - previous.x) < DOUBLE_TAP_DISTANCE &&
      Math.abs(point.y - previous.y) < DOUBLE_TAP_DISTANCE;

    if (isDoubleTap) {
      lastTap.current = null;
      lastTouchToggle.current = now;
      toggleZoomAt(point.x, point.y);
      return;
    }

    lastTap.current = { time: now, x: point.x, y: point.y };
  };

  const handleTouchStart = (event) => {
    if (event.touches.length > 1) {
      isMultiTouch.current = true;
      touchStart.current = null;
      lastTap.current = null;
      return;
    }

    isMultiTouch.current = false;
    touchStart.current = getPoint(event);
    lastTouchPoint.current = touchStart.current;

    if (!isZoomedNow()) event.stopPropagation();
  };

  const handleTouchMove = (event) => {
    if (event.touches.length > 1) {
      isMultiTouch.current = true;
      touchStart.current = null;
      return;
    }

    lastTouchPoint.current = getPoint(event);

    if (!isZoomedNow()) event.stopPropagation();
  };

  const handleTouchEnd = (event) => {
    const start = touchStart.current;
    touchStart.current = null;

    if (!start || isMultiTouch.current) {
      syncZoomed(50);
      return;
    }

    const point = getPoint(event) ?? lastTouchPoint.current;
    if (!point) return;

    const deltaX = point.x - start.x;
    const deltaY = point.y - start.y;
    const isTap = Math.abs(deltaX) < TAP_MOVE_LIMIT && Math.abs(deltaY) < TAP_MOVE_LIMIT;

    if (isTap) {
      event.stopPropagation();
      handleTap(point);
      return;
    }

    lastTap.current = null;

    if (isZoomedNow()) return;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY)) return;

    if (deltaX > 0) showPrev();
    else showNext();
  };

  const handleTouchCancel = () => {
    touchStart.current = null;
    lastTouchPoint.current = null;
    isMultiTouch.current = false;
    syncZoomed(50);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && !isZoomedNow()) event.stopPropagation();
  };

  const handleMouseDown = (event) => {
    if (!isZoomedNow()) event.stopPropagation();
  };

  const handleDoubleClick = (event) => {
    event.stopPropagation();
    if (Date.now() - lastTouchToggle.current < 700) return;

    const point = { x: event.clientX, y: event.clientY };
    if (!isOnImage(point)) return;

    toggleZoomAt(point.x, point.y);
  };

  const handleAreaClick = (event) => {
    if (isOnImage({ x: event.clientX, y: event.clientY })) event.stopPropagation();
  };

  const handleOverlayClick = () => {
    if (!isZoomedNow()) handleClose();
  };

  const handleInit = (controls) => {
    controlsRef.current = controls;
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

      <div className={styles.lightboxContent}>
        <div
          className={styles.zoomArea}
          ref={zoomAreaRef}
          onTouchStartCapture={handleTouchStart}
          onTouchMoveCapture={handleTouchMove}
          onTouchEndCapture={handleTouchEnd}
          onTouchCancelCapture={handleTouchCancel}
          onPointerDownCapture={handlePointerDown}
          onMouseDownCapture={handleMouseDown}
          onDoubleClickCapture={handleDoubleClick}
          onClick={handleAreaClick}
          onWheel={() => syncZoomed(50)}
        >
          <TransformWrapper
            key={selectedImage.id}
            onInit={handleInit}
            minScale={1}
            maxScale={MAX_SCALE}
            centerOnInit
            limitToBounds
            wheel={{ step: 0.15 }}
            doubleClick={{ disabled: true }}
            panning={{ velocityDisabled: true }}
          >
            <TransformComponent wrapperClass={styles.zoomWrapper} contentClass={styles.zoomContent}>
              <img
                ref={imageRef}
                className={isZoomed ? styles.imageZoomed : styles.image}
                src={getCloudinaryUrl(selectedImage.src, { width: IMAGE_WIDTHS[1] })}
                srcSet={getCloudinarySrcSet(selectedImage.src, IMAGE_WIDTHS)}
                sizes={IMAGE_SIZES}
                alt={t(selectedImage.altKey)}
                decoding="async"
                fetchPriority="high"
                draggable={false}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>

        <div className={styles.cta} onClick={stopPropagation}>
          <p className={styles.hint}>{t("galleryContactCta.lightboxHint")}</p>
          <ContactActions variant="lightbox" photoUrl={getPhotoUrl(lang, selectedImage.id)} />
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
