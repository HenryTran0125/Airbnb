/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import BookingLocation from "../../components/BookingLocation/BookingLocation";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import SearchingArea from "../../components/SearchingArea/SearchingArea";
import styles from "./page.module.css";

function Home() {
  return (
    <section>
      <div className={styles.wrapper}>
        <Carousel />

        <SearchingArea isHomePage={true} />
      </div>

      <BookingLocation />

      <Categories />
    </section>
  );
}

export default Home;
