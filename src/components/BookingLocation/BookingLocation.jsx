/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { Link } from "react-router-dom";
import {
  getBookingLocation,
  useLocation,
} from "../../service/getBookingLocation";
import { convertToSlug } from "../../helpers/convert";

function BookingLocation() {
  const { data, error, isLoading } = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(typeof data.content[0].id);
  const dataContent = data.content;

  const filteredData = dataContent.filter((element) => element.id < 10);
  // console.log(filteredData);
  return (
    <div className={styles.container}>
      <div className={styles.h1Container}>
        <h1 className={styles.h1}>Địa điểm nổi bật</h1>
      </div>

      <ul className={styles.ul}>
        {filteredData.map((item, index) => (
          <li className={styles.li} key={index}>
            <Link
              to={`location/${convertToSlug(item.tinhThanh)}`}
              className={styles.insideContent}
              state={{ id: item.id, city: item.tinhThanh }}
            >
              <div>
                <img src={item.hinhAnh} className={styles.image} />
              </div>

              <div className={styles.textContent}>
                <div className={styles.text}>{item.tinhThanh}</div>
                {/* <div className={styles.time}>{item.time} lái xe</div> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingLocation;
