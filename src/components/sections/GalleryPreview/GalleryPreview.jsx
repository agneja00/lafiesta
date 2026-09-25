import styles from "./GalleryPreview.module.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaImages } from "react-icons/fa6";
import { GALLERY_PREVIEW_IMAGES } from "../../../constants/media";
import { ROUTES } from "../../../constants/routes";
import { getCloudinaryUrl, getCloudinarySrcSet } from "../../../utils/cloudinary";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Button from "../../Button/Button";
import Lightbox from "../../Lightbox/Lightbox";
import { buildTo } from "@/utils/navigation";

const THUMB_WIDTHS = [300, 450, 600];
const THUMB_SIZES = "(min-width: 64rem) 280px, (min-width: 48rem) 33vw, 45vw";

const GalleryPreview = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const galleryPath = buildTo({ to: ROUTES.GALLERY }, lang);

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
                onClick={() => setSelectedIndex(index)}
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
            <Button as="link" to={galleryPath} size="medium" icon={FaImages}>
              {t("gallery.viewAll")}
            </Button>
          </div>
        </div>
      </section>

      <Lightbox
        images={GALLERY_PREVIEW_IMAGES}
        selectedIndex={selectedIndex}
        onNavigate={setSelectedIndex}
        onClose={() => setSelectedIndex(null)}
      />
    </>
  );
};

export default GalleryPreview;
