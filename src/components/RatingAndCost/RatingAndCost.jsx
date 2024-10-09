/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { officialPrice } from "../../helpers/officialPrice";
import styles from "./page.module.css";
import star from "../../assets/icon/averageRating.svg";
import { calculateStars } from "../../helpers/calculateStar";

function RatingAndCost({ data, realData }) {
  if (!Array.isArray(realData)) {
    return <div>No data available</div>;
  }

  if (!realData || !data) return;

  const Price = officialPrice(data.giaTien);
  const numberOfReview = realData?.length;
  const totalStar = realData
    ?.map((item) => item.saoBinhLuan)
    ?.reduce((acc, curr) => acc + curr, 0);

  console.log(realData);

  return (
    <div className={styles.firstRowContainer}>
      <div className={styles.price}>${Price}/ night</div>

      <div className={styles.rating}>
        <div className={styles.imgContainer}>
          <img src={star} alt="star" className={styles.img} />
          {realData?.length > 0
            ? calculateStars(totalStar, numberOfReview)
            : "0"}
        </div>

        <div className={styles.textReview}>
          ({numberOfReview > 0 ? numberOfReview : "0"}) đánh giá
        </div>
      </div>
    </div>
  );
}

export default RatingAndCost;
