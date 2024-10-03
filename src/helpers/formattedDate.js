/* eslint-disable no-unused-vars */
import { format } from "date-fns";

export function FormatDate(dateInput) {
  const date = new Date(dateInput);

  const result = format(date, "dd/MM/yyyy");

  return result;
}
