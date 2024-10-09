/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { convertInformation } from "../../helpers/convertRoomInformation";
import { correctUrlRoomName } from "../../helpers/correctUrlRoomName";
import ContentConvenience from "../ContentConvenience/ContentConvenience";
import styles from "./page.module.css";
function Convenience({ item }) {
  // console.log(item);
  return (
    <div className={styles.contentContainer}>
      <div>
        <h3 className={styles.h3}>{correctUrlRoomName(item?.tenPhong)}</h3>

        <ContentConvenience keyword={"Tiện nghi"} data={item} />

        <ContentConvenience keyword={"Phòng"} data={item} />

        <ContentConvenience keyword={"Số lượng khách"} data={item} />

        <ContentConvenience keyword={"Giá"} data={item} />
      </div>
    </div>
  );
}

export default Convenience;
