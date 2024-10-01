/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { officialPrice } from "../../helpers/officialPrice";
import { useReview } from "../../service/review";
import star from "../../assets/icon/averageRating.svg";
import { calculateStars } from "../../helpers/calculateStar";
import Button from "../../common/Button/Button";

function PriceTable({ data }) {
  const {
    data: dataReview,
    error: dataError,
    isLoading: dataLoading,
  } = useReview(data.id);

  const realData = dataReview?.content;
  const Price = officialPrice(data.giaTien);
  const numberOfReview = realData?.length;
  const totalStar = realData
    ?.map((item) => item.saoBinhLuan)
    ?.reduce((acc, curr) => acc + curr, 0);

  if (dataLoading) {
    return <div>Loading...</div>;
  }

  if (dataError) {
    return <div>Error: {dataError.message || "Error occur"}</div>;
  }

  // console.log(dataReview.content);
  // console.log(totalStar, numberOfReview);
  return (
    <div className={styles.container}>
      <div className={styles.firstRowContainer}>
        <div className={styles.price}>${Price}/ night</div>

        <div className={styles.rating}>
          <div className={styles.imgContainer}>
            <img src={star} alt="star" className={styles.img} />
            {calculateStars(totalStar, numberOfReview)}
          </div>

          <div className={styles.textReview}>({numberOfReview}) đánh giá</div>
        </div>
      </div>

      <div>
        <div className={styles.dateContainer}>
          <div className={styles.checkInDateContainer}>
            <div className={styles.checkInText}>Nhận phòng</div>
            <div className={styles.date}>02-10-2024</div>
          </div>

          <div className={styles.checkOutDateContainer}>
            <div className={styles.checkOutText}>Trả phòng</div>
            <div className={styles.date}>09-10-2024</div>
          </div>
        </div>

        <div className={styles.guestContainer}>
          <div className={styles.guest}>Khách</div>

          <div className={styles.adjustGuest}>
            <button className={styles.minusButton}>-</button>

            <div className={styles.numberOfGuest}>1 khách</div>

            <button className={styles.plusButton}>+</button>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Đặt phòng</button>
        </div>

        <div className={styles.notPaid}>Bạn vẫn chưa bị trừ tiền</div>

        <div className={styles.totalMoneyContainer}>
          <div className={styles.moneyAndNights}>${Price} x 7 nights</div>

          <div className={styles.totalMoney}>$147</div>
        </div>

        <div className={styles.cleaningFeeContainer}>
          <div className={styles.cleaningText}>Cleaning fee</div>

          <div className={styles.feeCleaning}>$8</div>
        </div>

        <div className={styles.totalBeforeTaxes}>
          <div className={styles.totalText}>Total before taxes</div>

          <div className={styles.totalAmount}>$155</div>
        </div>
      </div>
    </div>
  );
}

export default PriceTable;
