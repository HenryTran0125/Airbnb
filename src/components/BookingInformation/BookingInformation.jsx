/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import SuggestLocation from "../SuggestLocation/SuggestLocation";
import BookingDate from "../BookingDate/BookingDate";
import AddingGuest from "../AddingGuest/AddingGuest";

function BookingInformation({ isHomePage }) {
  return (
    <div className={styles.container}>
      <div className={styles.alignment}>
        <SuggestLocation isHomePage={isHomePage} />

        <BookingDate isHomePage={isHomePage} />

        <AddingGuest isHomePage={isHomePage} />
      </div>
    </div>
  );
}

export default BookingInformation;
