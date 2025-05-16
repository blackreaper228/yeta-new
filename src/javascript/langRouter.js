export function getLangPathInfo(pathname) {
  const parts = pathname.split("/").filter(Boolean); // убираем пустые строки
  const isRussian = parts[0] === "ru";
  const rest = isRussian ? parts.slice(1) : parts;
  return { isRussian, rest };
}

export function getRedirectPath(lang, currentPath) {
  const { isRussian, rest } = getLangPathInfo(currentPath);

  if (lang === "Ru" && !isRussian) return `/ru/${rest.join("/")}`;
  if (lang === "Eng" && isRussian) return `/${rest.join("/")}`;
  return null;
}
