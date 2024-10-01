/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Convenience from "../Convenience/Convenience";
import styles from "./page.module.css";
import { correctUrlRoomName } from "../../helpers/correctUrlRoomName";
import PropTypes from "prop-types";

function RoomList({ data, city }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  // if (!Array.isArray(data)) {
  //   return <div>Không có dữ liệu</div>;
  // }

  console.log(Array.isArray(data));

  const places = data.length;

  return (
    <div className={styles.container}>
      <div className={styles.textResult}>
        Hiện tại có {places} chỗ ở tại {city}
      </div>

      <div>
        <h1 className={styles.h1}>Chỗ ở tại khu vực bản đồ đã chọn</h1>

        <div>
          <ul>
            {data?.map((item, index) => (
              <li key={index} className={styles.li}>
                <Link
                  className={styles.link}
                  to={`/room-detail/${item.id}`}
                  state={{ id: item.id }}
                >
                  <div
                    className={
                      item.id < 100
                        ? styles.imgContainer
                        : styles.specialImgContainer
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
        </div>
      </div>
    </div>
  );
}

export default RoomList;

RoomList.propTypes = {
  data: PropTypes.array,
  city: PropTypes.string,
};
