/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";

function BookingFee({ Price, realNightsBooking }) {
  const estimatedTotalFee = Price * realNightsBooking;
  return (
    <>
      <div className={styles.totalMoneyContainer}>
        <div className={styles.moneyAndNights}>
          ${Price} x {realNightsBooking} nights
        </div>

        <div className={styles.totalMoney}>${estimatedTotalFee}</div>
      </div>

      <div className={styles.cleaningFeeContainer}>
        <div className={styles.cleaningText}>Cleaning fee</div>

        <div className={styles.feeCleaning}>$8</div>
      </div>

      <div className={styles.totalBeforeTaxes}>
        <div className={styles.totalText}>Total before taxes</div>

        <div className={styles.totalAmount}>${estimatedTotalFee + 8}</div>
      </div>
    </>
  );
}

export default BookingFee;
