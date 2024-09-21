/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import search from "../../assets/icon/search.svg";

function BookingInformation() {
  return (
    <div className={styles.container}>
      <div className={styles.alignment}>
        <div className={styles.bookingArea}>
          <div className={styles.text}>Địa điểm</div>
          <div className={styles.text}>Bạn sắp đi đâu</div>
        </div>

        <div className={styles.bookingArea}>
          <div className={styles.text}>21/09/2024 - 30/09/2024</div>
        </div>

        <div className={styles.addingGuest}>
          <div className={styles.text}>Thêm khách</div>

          <div className={styles.imageContainer}>
            <img src={search} className={styles.search} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingInformation;
