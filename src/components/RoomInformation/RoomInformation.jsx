/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetRoomInformationById } from "../../service/getRoomInformationById";
import styles from "./page.module.css";
import { convertInformation } from "../../helpers/convertRoomInformation";

import ShortDescription from "../ShortDescription/ShortDescription";
import RoomService from "../RoomService/RoomService";
import TranslateSection from "../TranslateSection/TranslateSection";
import ConvenienceInRoom from "../ConvenienceInRoom/ConvenienceInRoom";
import PriceTable from "../PriceTable/PriceTable";
import WritingReview from "../WritingReview/WritingReview";
import Comments from "../Comments/Comments";

function RoomInformation({ data }) {
  const quickInformation = Object.entries(data).filter(
    ([key, value]) =>
      key === "phongNgu" ||
      key === "giuong" ||
      key === "phongTam" ||
      key === "khach"
  );

  return (
    <div>
      <h1 className={styles.h1}>{data.tenPhong}</h1>

      <div className={styles.imgContainer}>
        <img src={data.hinhAnh} className={styles.img} />
      </div>

      <div className={styles.detailContainer}>
        <div className={styles.textContent}>
          <ShortDescription quickInformation={quickInformation} />

          <RoomService />

          <TranslateSection data={data} />

          <ConvenienceInRoom data={data} />
        </div>

        <div className={styles.priceTable}>
          <PriceTable data={data} />
        </div>
      </div>

      <WritingReview />

      <Comments data={data} />
    </div>
  );
}

export default RoomInformation;
