import { useCallback } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { buildTo } from "@/utils/navigation";

const PARAM = "foto";
const OPENED_STATE_KEY = "photoOpened";

const SITE_URL = import.meta.env.VITE_SITE_URL || window.location.origin;

export const getPhotoUrl = (lang, id) =>
  `${SITE_URL}${buildTo({ to: ROUTES.GALLERY }, lang)}?${PARAM}=${id}`;

const usePhotoDeepLink = (images) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const photoId = Number(searchParams.get(PARAM));
  const foundIndex = photoId ? images.findIndex((img) => img.id === photoId) : -1;
  const selectedIndex = foundIndex === -1 ? null : foundIndex;

  const setSelectedIndex = useCallback(
    (value) => {
      const nextIndex = typeof value === "function" ? value(selectedIndex) : value;
      const next = new URLSearchParams(searchParams);

      if (nextIndex === null || nextIndex === undefined || !images[nextIndex]) {
        if (location.state?.[OPENED_STATE_KEY]) {
          navigate(-1);
          return;
        }

        next.delete(PARAM);
        setSearchParams(next, { replace: true, preventScrollReset: true });
        return;
      }

      next.set(PARAM, String(images[nextIndex].id));
      if (next.toString() === searchParams.toString()) return;

      const isAlreadyOpen = selectedIndex !== null;

      setSearchParams(next, {
        replace: isAlreadyOpen,
        state: isAlreadyOpen ? location.state : { [OPENED_STATE_KEY]: true },
        preventScrollReset: true,
      });
    },
    [images, location.state, navigate, searchParams, selectedIndex, setSearchParams]
  );

  return [selectedIndex, setSelectedIndex];
};

export default usePhotoDeepLink;
