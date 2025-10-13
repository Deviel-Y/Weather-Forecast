export const getCurrentDate = () => {
  const now = new Date();

  const weekday = now.toLocaleString("en-US", {
    weekday: "long",
  });

  const time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const date = `${now.getDate()} ${now.toLocaleString("en-US", {
    month: "short",
  })}, ${now.getFullYear()}`;

  return { weekday, time, date };
};
