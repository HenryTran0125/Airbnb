/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import styles from "./page.module.css";
import { useSelector } from "react-redux";

function ButtonBooking({
  setCheckingBookingButton,
  startDateInDetailRoom,
  endDateInDetailRoom,
}) {
  const id = useSelector((state) => state.storeInformation.id);

  function handleBooking() {
    if (!id) {
      toast((t) => (
        <span style={{ fontSize: "1.6rem" }}>
          <strong style={{ fontSize: "2rem", marginRight: "10px" }}>⚠️</strong>
          Vui lòng đăng nhập để đặt phòng
        </span>
      ));
      setCheckingBookingButton(false);
    } else if (!startDateInDetailRoom && !endDateInDetailRoom) {
      toast((t) => (
        <span style={{ fontSize: "1.6rem" }}>
          <strong style={{ fontSize: "2rem", marginRight: "10px" }}>⚠️</strong>
          Vui lòng chọn ngày đi và về
        </span>
      ));
      setCheckingBookingButton(false);
    } else {
      setCheckingBookingButton(true);
    }
  }

  return (
    <>
      <div className={styles.buttonContainer}>
        <button onClick={() => handleBooking()} className={styles.button}>
          Đặt phòng
        </button>
      </div>

      <div className={styles.notPaid}>Bạn vẫn chưa bị trừ tiền</div>
    </>
  );
}

export default ButtonBooking;
