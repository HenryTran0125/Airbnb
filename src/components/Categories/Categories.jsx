/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { categories } from "../../data/Categories";
import { Link } from "react-router-dom";
import { useLocation } from "../../service/getBookingLocation";
import { convertToSlug } from "../../helpers/convert";

function Categories() {
  const { data, error, isLoading } = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(typeof data.content[0].id);
  const dataContent = data.content;

  const filteredData = dataContent.filter((element) => element.id < 5);

  function CombineObject(data1, data2) {
    const combined = data1.map((item, index) => ({
      ...item,
      ...data2[index],
    }));

    console.log(combined);
    return combined;
  }

  const result = CombineObject(filteredData, categories);
  console.log(result);

  return (
    <section className={styles.section}>
      <div>
        <div className={styles.sectionTitleContainer}>
          <h1 className={styles.sectionTitle}>Ở bất cứ đâu</h1>
        </div>

        <div>
          <ul className={styles.ul}>
            {result.map((item, index) => (
              <Link
                state={{ id: item.id, city: item.tinhThanh }}
                to={`location/${convertToSlug(item.tinhThanh)}`}
                key={index}
              >
                <li className={styles.li}>
                  <div>
                    <img src={item.image} className={styles.image} />
                  </div>

                  <div className={styles.titleContainer}>
                    <div className={styles.title}>{item.title}</div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
