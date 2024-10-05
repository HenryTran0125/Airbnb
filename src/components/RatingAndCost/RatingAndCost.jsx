/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { officialPrice } from "../../helpers/officialPrice";
import styles from "./page.module.css";
import star from "../../assets/icon/averageRating.svg";
import { calculateStars } from "../../helpers/calculateStar";

function RatingAndCost({ data, realData }) {
  const Price = officialPrice(data.giaTien);
  const numberOfReview = realData?.length;
  const totalStar = realData
    ?.map((item) => item.saoBinhLuan)
    ?.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className={styles.firstRowContainer}>
      <div className={styles.price}>${Price}/ night</div>

      <div className={styles.rating}>
        <div className={styles.imgContainer}>
          <img src={star} alt="star" className={styles.img} />
          {realData.length > 0
            ? calculateStars(totalStar, numberOfReview)
            : "Chưa có đánh giá"}
        </div>

        <div className={styles.textReview}>({numberOfReview}) đánh giá</div>
      </div>
    </div>
  );
}

export default RatingAndCost;
