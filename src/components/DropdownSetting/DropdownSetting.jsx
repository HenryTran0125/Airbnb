/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";

function DropdownSetting({ handleCheckSignIn, handleCheckSignUp }) {
  return (
    <>
      <button onClick={() => handleCheckSignIn()} className={styles.action}>
        Đăng nhập
      </button>

      <button onClick={() => handleCheckSignUp()} className={styles.action}>
        Đăng ký
      </button>
    </>
  );
}

export default DropdownSetting;
