/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./page.module.css";
import Convenience from "../Convenience/Convenience";
import PropTypes from "prop-types";

function RoomDescription({ data, dashboard }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ul className={styles.ul}>
      {data.map((item, index) => (
        <li key={index} className={styles.li}>
          <Link
            className={styles.link}
            to={`/room-detail/${item.id}`}
            state={{ id: item.id }}
          >
            <div
              className={
                item.id < 100 ? styles.imgContainer : styles.specialImgContainer
              }
            >
              <img
                src={item.hinhAnh}
                className={item.id < 100 ? styles.img : styles.specialImg}
              />
            </div>

            <Convenience item={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default RoomDescription;

RoomDescription.propTypes = {
  data: PropTypes.array,
};
