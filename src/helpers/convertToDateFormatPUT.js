/* eslint-disable no-unused-vars */
export function convertToDateFormat(data) {
  if (!data) return;

  const date = data;
  const [month, day, year] = date.split("/");
  const formattedDate = `${year}-${month.padStart(2, "0")}-${day.padStart(
    2,
    "0"
  )}`;

  return formattedDate;
}
