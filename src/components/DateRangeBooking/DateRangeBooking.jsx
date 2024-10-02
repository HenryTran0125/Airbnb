/* eslint-disable no-unused-vars */
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useState } from "react";
import { addDays } from "date-fns";
import styles from "./page.module.css";

function DateRangeBooking() {
  const [bookingStartDate, setBookingStartDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // console.log(selectionRange.startDate, selectionRange.endDate);

  return (
    <div>
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
