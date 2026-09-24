import styles from "./Gallery.module.scss";
import { useTranslation } from "react-i18next";
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

  return (
    <>
      <section className={styles.section} aria-labelledby="gallery-page-title">
        <div className={styles.container}>
          <SectionTitle subtitle={t("gallery.subtitle")}>{t("gallery.title")}</SectionTitle>

          {GALLERY_BLOCKS.map((block) => (
            <div key={block.id} className={styles.block}>
              <h2 className={styles.blockTitle}>{t(block.titleKey)}</h2>

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
