/* eslint-disable no-unused-vars */
import FooterLayout from "../FooterLayout/FooterLayout";
import styles from "./page.module.css";
import { introduction, community, guest, support } from "../../data/Footer";
import translate from "../../assets/icon/translate.svg";

function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <FooterLayout title={"Giới thiệu"} array={introduction} />
        <FooterLayout title={"Cộng đồng"} array={community} />
        <FooterLayout title={"Đón tiếp khách"} array={guest} />
        <FooterLayout title={"Hỗ trợ"} array={support} />
      </div>

      <div className={styles.copyRightContainer}>
        <div className={styles.copyrightWrapUp}>
          <ul className={styles.privacy}>
            <li className={styles.li}>© {currentYear} Airbnb, Inc.</li>
            <li className={styles.li}>Quyền riêng tư</li>
            <li className={styles.li}>Điều khoản</li>
            <li className={styles.li}>Sơ đồ trang web</li>
          </ul>

          <div className={styles.translation}>
            <div className={styles.translator}>
              <img src={translate} height="16px" width="16px" />
              <div className={styles.text}>Tiếng Việt (VN)</div>
            </div>

            <div className={styles.text}>USD</div>
            <div className={styles.text}>Hỗ trợ tài nguyên</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
