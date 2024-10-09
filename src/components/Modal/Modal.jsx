/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import styles from "./page.module.css";
import ReactDOM from "react-dom";

function Modal({ children, onclose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function handleClickOutside(e) {
    if (e.target.id === "modal-overlay") {
      onclose();
    }
  }

  return ReactDOM.createPortal(
    <div
      id="modal-overlay"
      onClick={handleClickOutside}
      className={styles.modalStyle}
    >
      <div className={styles.modalContentStyle}>{children}</div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Modal;
