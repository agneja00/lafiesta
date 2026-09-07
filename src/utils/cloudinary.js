const UPLOAD_SEGMENT = /\/upload\/(?:[^/]+\/)?/;

export const getCloudinaryUrl = (src, { width, quality = "auto", format = "auto" } = {}) => {
  if (!src?.includes("/upload/")) return src;

  const transform = [`f_${format}`, `q_${quality}`, width && `w_${width}`]
    .filter(Boolean)
    .join(",");

  return src.replace(UPLOAD_SEGMENT, `/upload/${transform}/`);
};

export const getCloudinarySrcSet = (src, widths) =>
  widths.map((w) => `${getCloudinaryUrl(src, { width: w })} ${w}w`).join(", ");
