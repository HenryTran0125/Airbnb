/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import search from "../../assets/icon/search.svg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/addingGuestSlice";

function AddingGuest({ isHomePage }) {
  const [checkButton, setCheckButton] = useState(false);
  const guests = useSelector((state) => state.addGuest.guest);
  const dispatch = useDispatch();

  // console.log(guests);

  return (
    <div className={styles.addingGuest}>
      <div className={styles.addingGuestContainer}>
        <div
          onClick={() => setCheckButton(!checkButton)}
          className={isHomePage ? styles.text : styles.textIsNotHomePage}
        >
          Thêm khách
        </div>

        {checkButton && (
          <div className={styles.guestAdjustmentContainer}>
            <div className={styles.guestAdjustmentContent}>
              <div className={styles.div}>Khách</div>

              <div className={styles.numberOfGuestAdjusted}>
                <button
                  onClick={() => dispatch(decrement())}
                  className={guests <= 1 ? styles.buttonDefault : styles.button}
                  disabled={guests <= 1 && true}
                >
                  -
                </button>

                <div className={styles.numberOfGuests}>{guests}</div>

                <button
                  onClick={() => dispatch(increment())}
                  className={styles.button}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.imageContainer}>
        <img src={search} className={styles.search} />
      </div>
    </div>
  );
}

export default AddingGuest;
