/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./page.module.css";
import DateRangeBooking from "../DateRangeBooking/DateRangeBooking";

function BookingDate({ isHomePage }) {
  const [checkButton, setCheckButton] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className={styles.bookingArea}>
      <div
        onClick={() => setCheckButton(true)}
        className={isHomePage ? styles.text : styles.textIsNotHomePage}
      >
        {startDate || "Start Date"} - {endDate || "End Date"}
      </div>

      {checkButton && (
        <div className={styles.dateRangeBookingContainer}>
          <DateRangeBooking
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setCheckButton={setCheckButton}
          />
        </div>
      )}
    </div>
  );
}

export default BookingDate;
