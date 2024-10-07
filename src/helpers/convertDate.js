/* eslint-disable no-unused-vars */
export function convertDate(dataDate) {
  const date = new Date(dataDate);

  const isoDate = date.toISOString();

  return isoDate;
}
