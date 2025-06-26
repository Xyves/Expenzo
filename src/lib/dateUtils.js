export const getLast7Days = () => {
  const today = new Date();
  const days = [];

  const formatter = new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "2-digit",
  });

  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() - i);

    const formatted = formatter.format(date); // e.g. "Monday, 17/06"
    const [weekday, dd] = formatted.replace(",", "").split(/[\s/]+/); // Split on space or slash

    days.push(`${weekday} ${dd}`);
  }

  return days.reverse();
};

console.log(getLast7Days());
export const formatDate = (date) => {
  if (!(date instanceof Date) || isNaN(date)) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
export const formatMonthYear = (date) => {
  return date.toLocaleString("default", { month: "long", year: "numeric" });
};
export const parseDMY = (str) => {
  const [day, month, year] = str.split(".");
  return new Date(year, month - 1, day); // JS months are 0-based
};
