import { differenceInCalendarDays } from "date-fns";

/* eslint-disable no-unused-vars */
export function countingNights(startDate, endDate) {
  const numberOfNights = differenceInCalendarDays(endDate, startDate);

  return numberOfNights;
}
