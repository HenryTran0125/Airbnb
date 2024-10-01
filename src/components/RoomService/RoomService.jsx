/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import home from "../../assets/icon/home.svg";
import clean from "../../assets/icon/clean.svg";
import trophy from "../../assets/icon/trophy.svg";

function RoomService() {
  return (
    <ul className={styles.ulService}>
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
          icon: trophy,
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
  );
}

export default RoomService;
