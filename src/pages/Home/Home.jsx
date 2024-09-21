import Carousel from "../../components/Carousel/Carousel";
import SearchingArea from "../../components/SearchingArea/SearchingArea";
import styles from "./page.module.css";

function Home() {
  return (
    <section className={styles.section}>
      <Carousel />

      <SearchingArea />
    </section>
  );
}

export default Home;
