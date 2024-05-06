export const dateFormatterTool = (date: Date, locale = "en-US") => {
  return date.toLocaleDateString(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
