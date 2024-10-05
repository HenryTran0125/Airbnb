/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";

function ButtonBooking({ setCheckingBookingButton }) {
  return (
    <>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => setCheckingBookingButton(true)}
          className={styles.button}
        >
          Đặt phòng
        </button>
      </div>

      <div className={styles.notPaid}>Bạn vẫn chưa bị trừ tiền</div>
    </>
  );
}

export default ButtonBooking;
