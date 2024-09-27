/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import BookingInformation from "../BookingInformation/BookingInformation";
import BookingLocation from "../BookingLocation/BookingLocation";
import Filter from "../Filter/Filter";
import styles from "./page.module.css";

function SearchingArea({ isHomePage }) {
  return (
    <section className={isHomePage ? styles.section : styles.isNotHomePage}>
      <BookingInformation isHomePage={isHomePage} />

      <Filter isHomePage={isHomePage} />
    </section>
  );
}

export default SearchingArea;
