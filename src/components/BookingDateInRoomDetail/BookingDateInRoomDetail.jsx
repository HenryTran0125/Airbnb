/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "./page.module.css";
import { FormatDate } from "../../helpers/formattedDate";

function BookingDateInRoomDetail({
  setCheckClickBooking,
  startDateInDetailRoom,
  endDateInDetailRoom,
}) {
  const startDateBooking = FormatDate(startDateInDetailRoom);
  const endDateBooking = FormatDate(endDateInDetailRoom);

  return (
    <div className={styles.dateContainer}>
      <div
        onClick={() => setCheckClickBooking(true)}
        className={styles.checkInDateContainer}
      >
        <div className={styles.checkInText}>Nhận phòng</div>
        <div className={styles.date}>
          {startDateInDetailRoom ? startDateBooking : "Start Date"}
        </div>
      </div>

      <div className={styles.checkOutDateContainer}>
        <div className={styles.checkOutText}>Trả phòng</div>
        <div className={styles.date}>
          {endDateInDetailRoom ? endDateBooking : "End Date"}
        </div>
      </div>
    </div>
  );
}

export default BookingDateInRoomDetail;
