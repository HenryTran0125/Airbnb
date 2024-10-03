/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useEffect, useState } from "react";
import { addDays } from "date-fns";
import styles from "./page.module.css";
import { FormatDate } from "../../helpers/formattedDate";

function DateRangeBooking({ setStartDate, setEndDate }) {
  const [bookingStartDate, setBookingStartDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const { startDate } = bookingStartDate[0];
  const { endDate } = bookingStartDate[0];

  useEffect(() => {
    setStartDate(FormatDate(startDate));
    setEndDate(FormatDate(endDate));
  }, [startDate, endDate]);

  console.log(FormatDate(startDate), FormatDate(endDate), bookingStartDate);

  return (
    <div className={styles.container}>
      <DateRangePicker
        onChange={(item) => setBookingStartDate([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={bookingStartDate}
        direction="horizontal"
        className={styles.dateRangePicker}
      />
    </div>
  );
}

export default DateRangeBooking;
