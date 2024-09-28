/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import search from "../../assets/icon/search.svg";

function BookingInformation({ isHomePage }) {
  return (
    <div className={styles.container}>
      <div className={styles.alignment}>
        <div className={styles.bookingArea}>
          <div className={isHomePage ? styles.text : styles.textIsNotHomePage}>
            Địa điểm
          </div>

          <div className={styles.textWhereWillYouGo}>Bạn sắp đi đâu</div>
        </div>

        <div className={styles.bookingArea}>
          <div className={isHomePage ? styles.text : styles.textIsNotHomePage}>
            21/09/2024 - 30/09/2024
          </div>
        </div>

        <div className={styles.addingGuest}>
          <div className={isHomePage ? styles.text : styles.textIsNotHomePage}>
            Thêm khách
          </div>

          <div className={styles.imageContainer}>
            <img src={search} className={styles.search} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingInformation;
