/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import PropTypes from "prop-types";
import RoomDescription from "../RoomDescription/RoomDescription";

function RoomList({ data, city }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const places = data.length;

  return (
    <div className={styles.container}>
      <div className={styles.textResult}>
        Hiện tại có {places} chỗ ở tại {city}
      </div>

      <div>
        <h1 className={styles.h1}>Chỗ ở tại khu vực bản đồ đã chọn</h1>

        <div>
          <RoomDescription data={data} />
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
