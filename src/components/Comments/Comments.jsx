/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useReview } from "../../service/review";
import StarsInComment from "../StarsInComment/StarsInComment";
import styles from "./page.module.css";
import avatar from "../../assets/icon/avatar.png";

function Comments({ data }) {
  const { id } = data;
  const {
    data: dataReview,
    error: dataError,
    isLoading: dataLoading,
  } = useReview(id);

  if (dataLoading) {
    return <div>Loading...</div>;
  }

  if (dataError) {
    return <div>Error: {dataError.message}</div>;
  }

  const realData = dataReview?.content;

  console.log(realData);

  return (
    <section className={styles.section}>
      <div>
        <h2 className={styles.h2}>Bình luận</h2>

        <ul className={styles.ul}>
          {realData?.map((item, index) => (
            <li className={styles.li} key={index}>
              <div className={styles.userInformation}>
                <div>
                  <img src={avatar} className={styles.img} />
                </div>

                <div>
                  <div className={styles.nameAndRatingStarsContainer}>
                    <div className={styles.nameUser}>
                      {item.tenNguoiBinhLuan}
                    </div>

                    <div>
                      <StarsInComment numberOfStars={item.saoBinhLuan} />
                    </div>
                  </div>

                  <div>{item.ngayBinhLuan}</div>
                </div>
              </div>

              <div className={styles.content}>{item.noiDung}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Comments;
