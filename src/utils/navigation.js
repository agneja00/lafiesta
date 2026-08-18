export const buildTo = ({ to, hash }, lang) => {
  const pathname = `/${lang}${to ? `/${to}` : ""}`;

  if (hash) {
    return { pathname, hash };
  }

  return pathname;
};

export const isLinkActive = (link, location, lang) => {
  const expectedPath = `/${lang}${link.to ? `/${link.to}` : ""}`;

  if (location.pathname !== expectedPath) {
    return false;
  }

  if (link.hash) {
    return location.hash === link.hash;
  }

  return !location.hash;
};
