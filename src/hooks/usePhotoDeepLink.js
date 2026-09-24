import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ROUTES } from "../constants/routes";

const PARAM = "foto";

const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin;

export const getPhotoUrl = (lang, id) => `${SITE_URL}/${lang}${ROUTES.GALLERY}?${PARAM}=${id}`;

const usePhotoDeepLink = (images) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedIndex, setSelectedIndex] = useState(() => {
    const id = Number(searchParams.get(PARAM));
    if (!id) return null;
    const index = images.findIndex((img) => img.id === id);
    return index === -1 ? null : index;
  });

  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (selectedIndex === null) next.delete(PARAM);
    else next.set(PARAM, String(images[selectedIndex].id));

    if (next.toString() !== searchParams.toString()) {
      setSearchParams(next, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  return [selectedIndex, setSelectedIndex];
};

export default usePhotoDeepLink;
