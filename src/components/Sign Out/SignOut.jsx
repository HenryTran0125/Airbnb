/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import styles from "./page.module.css";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Modal from "../Modal/Modal";
import CloseButton from "../../assets/icon/closeButton";
import { cleanUserInformation } from "../../store/slices/storeUserInformation";

function SignOut({ signOut, setSignOut }) {
  const dispatch = useDispatch();

  function handleSignout() {
    dispatch(cleanUserInformation(null));
    // Remove user data from localStorage
    localStorage.removeItem("userInfo");

    toast.success(
      <span style={{ fontSize: "1.4rem", color: "green" }}>
        Signed out successfully!
      </span>
    );

    setSignOut(false);
  }

  return (
    <>
      {signOut && (
        <Modal>
          <div className={styles.container}>
            <h1 className={styles.h1}>Bạn có chắc muốn đăng xuất không?</h1>

            <div className={styles.buttonContainer}>
              <button
                onClick={() => handleSignout()}
                className={styles.yesButton}
              >
                Có
              </button>

              <button className={styles.noButton}>Không</button>
            </div>

            <div
              onClick={() => setSignOut(false)}
              className={styles.closeButton}
            >
              <CloseButton fill="black" stroke="black" />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default SignOut;
