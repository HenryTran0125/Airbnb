/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useEffect, useState } from "react";
import { addDays } from "date-fns";
import styles from "./page.module.css";
import { FormatDate } from "../../helpers/formattedDate";
import { useLocation } from "react-router-dom";
import CloseButton from "../../assets/icon/closeButton";

function DateRangeBooking({
  setStartDate,
  setEndDate,
  setCheckButton,
  setCheckClickBooking,
  setStartDateInDetailRoom,
  setEndDateInDetailRoom,
  dispatch,
}) {
  const [bookingStartDate, setBookingStartDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
      color: "#fe6b6e",
    },
  ]);
  const location = useLocation();
  const checkPathName = location.pathname;

  const { startDate } = bookingStartDate[0];
  const { endDate } = bookingStartDate[0];

  useEffect(() => {
    if (checkPathName == "/") {
      setStartDate(FormatDate(startDate));
      setEndDate(FormatDate(endDate));
    } else {
      setStartDateInDetailRoom(startDate);
      setEndDateInDetailRoom(endDate);
    }
  }, [startDate, endDate, setStartDate, setEndDate]);

  function closeButton() {
    checkPathName == "/" ? setCheckButton(false) : setCheckClickBooking(false);
  }

  // console.log(FormatDate(startDate), FormatDate(endDate), bookingStartDate);

  return (
    <div
      className={
        checkPathName == "/" ? styles.container : styles.containerNotHomePage
      }
    >
      <DateRangePicker
        onChange={(item) => setBookingStartDate([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={checkPathName == "/" ? 2 : 1}
        ranges={bookingStartDate}
        direction="horizontal"
        className={styles.dateRangePicker}
        color="#fe6b6e"
      />

      <button onClick={() => closeButton()} className={styles.button}>
        <CloseButton
          fill="black"
          stroke="black"
          className={styles.closeButton}
        />
      </button>
    </div>
  );
}

export default DateRangeBooking;
