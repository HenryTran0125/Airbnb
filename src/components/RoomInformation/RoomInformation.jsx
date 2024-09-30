/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useGetRoomInformationById } from "../../service/getRoomInformationById";
import styles from "./page.module.css";
import { convertInformation } from "../../helpers/convertRoomInformation";
import home from "../../assets/icon/home.svg";
import clean from "../../assets/icon/clean.svg";
import trophie from "../../assets/icon/trophie.svg";
import translateIcon from "../../assets/icon/translateIcon.svg";
import bep from "../../assets/icon/kitchen.svg";
import wifi from "../../assets/icon/wifi.svg";
import tivi from "../../assets/icon/tv.svg";
import dieuHoa from "../../assets/icon/AC.svg";
import mayGiat from "../../assets/icon/washingMachine.svg";
import banLa from "../../assets/icon/iron.svg";

function RoomInformation({ data }) {
  const quickInformation = Object.entries(data).filter(
    ([key, value]) =>
      key === "phongNgu" ||
      key === "giuong" ||
      key === "phongTam" ||
      key === "khach"
  );

  const convenienceFurniture = Object.entries(data).filter(
    ([key, value]) => value === true
  );
  console.log(convenienceFurniture, data);
  return (
    <div>
      <h1 className={styles.h1}>{data.tenPhong}</h1>

      <div className={styles.imgContainer}>
        <img src={data.hinhAnh} className={styles.img} />
      </div>

      <div className={styles.detailContainer}>
        <div className={styles.textContent}>
          <div className={styles.wrapperQuickContent}>
            <h3 className={styles.h3}>Toàn bộ căn hộ. Chủ nhà NHATSANG</h3>

            <ul className={styles.ul}>
              {quickInformation.map(([key, value], index) => (
                <li className={styles.li} key={index}>
                  {value} {convertInformation(key)}
                </li>
              ))}
            </ul>
          </div>

          <ul className={styles.ulTable}>
            {[
              {
                icon: home,
                service: "Toàn bộ nhà",
                describe: "Bạn sẽ có không gian cao cấp cho riêng mình",
              },
              {
                icon: clean,
                service: "Vệ sinh tăng cường",
                describe:
                  "Chủ nhà này đã cam kết thực hiện quy trình vệ sinh tăng cường 5 bước của Airbnb. Hiển thị thêm",
              },
              {
                icon: trophie,
                service: "Phong là Chủ nhà siêu cấp",
                describe:
                  "Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.",
              },
              {
                icon: clean,
                service: "Miễn phí hủy trong 48 giờ",
                describe: "",
              },
            ].map((item, index) => (
              <li className={styles.liService} key={index}>
                <div className={styles.iconContainer}>
                  <img src={item.icon} className={styles.icon} />
                </div>

                <div className={styles.serviceContainer}>
                  <h5 className={styles.h5}>{item.service}</h5>

                  <p className={styles.p}>{item.describe}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className={styles.roomDescription}>
            <div className={styles.translate}>
              Dịch sang tiếng Anh{" "}
              <img src={translateIcon} height={"24px"} width={"24px"} />
            </div>

            <p className={styles.description}>{data.moTa}</p>

            <strong className={styles.strong}>Hiển thị thêm</strong>
          </div>

          <ul>
            <h2>Các tiện ích đi kèm</h2>

            <div>
              {convenienceFurniture.map(([key, value], index) => (
                <li key={index}>
                  <img src={key} height={"24px"} width={"24px"} />

                  {key}
                </li>
              ))}
            </div>
          </ul>
        </div>

        <div className={styles.priceTable}></div>
      </div>
    </div>
  );
}

export default RoomInformation;
