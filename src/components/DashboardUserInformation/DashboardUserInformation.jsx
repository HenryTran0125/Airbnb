/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import avatar from "../../assets/icon/avatar.png";
import certified from "../../assets/icon/certified.png";
import email from "../../assets/icon/emailConfirmation.svg";
import { useSelector } from "react-redux";
import RoomInDashboard from "../RoomInDashboard/RoomInDashboard";

function DashboardUserInformation() {
  const userName = useSelector((state) => state.storeUserName.name);
  return (
    <div className={styles.container}>
      <div className={styles.informationContainer}>
        <div className={styles.upLoadImageContainer}>
          <div>
            <img src={avatar} className={styles.img} alt="avatar" />
          </div>

          <div className={styles.upLoadImageText}>Cập nhật ảnh</div>
        </div>

        <div className={styles.certifiedContainer}>
          <div className={styles.certifiedDescription}>
            <img
              src={certified}
              className={styles.imgCertified}
              alt="certified"
            />

            <div className={styles.certifiedText}>Xác minh danh tính</div>
          </div>

          <p className={styles.p}>
            Xác minh danh tính của bạn với huy hiệu xác minh danh tính.
          </p>

          <div className={styles.buttonContainer}>
            <button className={styles.button}>Nhận huy hiệu</button>
          </div>
        </div>

        <div className={styles.emailConfirmationContainer}>
          <h1 className={styles.h1}>{userName} đã xác nhận</h1>

          <div className={styles.emailConfirmation}>
            <img src={email} className={styles.emailImage} />

            <div className={styles.emailText}>Địa chỉ email</div>
          </div>
        </div>
      </div>

      <div>
        <p className={styles.welcome}>Xin chào {userName}</p>

        <p className={styles.joining}>Bắt đầu tham gia vào 2023</p>

        <p className={styles.editProfile}>Chỉnh sửa hồ sơ</p>

        <RoomInDashboard />
      </div>
    </div>
  );
}

export default DashboardUserInformation;
