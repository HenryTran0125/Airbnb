/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
} from "../../store/slices/addingGuestInRoomDetail";
import toast from "react-hot-toast";

function AddingGuestInRoomDetail({ data }) {
  const guests = useSelector((state) => state.addGuestInRoom.guest);
  const dispatch = useDispatch();

  if (guests == data.khach)
    toast((t) => (
      <span style={{ fontSize: "2rem", color: "#f03e3e", top: "4rem" }}>
        {" "}
        ⛔ Đã đạt số khách tối đa
      </span>
    ));

  return (
    <div className={styles.guestContainer}>
      <div className={styles.guest}>Khách</div>

      <div className={styles.adjustGuest}>
        <button
          disabled={guests <= 1 && true}
          onClick={() => dispatch(decrement())}
          className={
            guests <= 1 ? styles.disabledMinusButton : styles.minusButton
          }
        >
          -
        </button>

        <div className={styles.numberOfGuest}>{guests} khách</div>

        <button
          disabled={guests >= data.khach && true}
          onClick={() => dispatch(increment())}
          className={
            guests >= data.khach ? styles.disabledPlusButton : styles.plusButton
          }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default AddingGuestInRoomDetail;
