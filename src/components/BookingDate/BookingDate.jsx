/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./page.module.css";
import DateRangeBooking from "../DateRangeBooking/DateRangeBooking";
import close from "../../assets/icon/close-outline.svg";
import CloseButton from "../../assets/icon/closeButton";

function BookingDate({ isHomePage }) {
  const [checkButton, setCheckButton] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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
          />

          <button
            onClick={() => setCheckButton(false)}
            className={styles.button}
          >
            <CloseButton
              fill="black"
              stroke="black"
              className={styles.closeButton}
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default BookingDate;
