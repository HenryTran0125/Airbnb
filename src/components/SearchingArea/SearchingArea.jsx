/* eslint-disable no-unused-vars */
import BookingInformation from "../BookingInformation/BookingInformation";
import Filter from "../Filter/Filter";
import styles from "./page.module.css";

function SearchingArea() {
  return (
    <section className={styles.section}>
      <BookingInformation />

      <Filter />
    </section>
  );
}

export default SearchingArea;
