/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLocation } from "../../service/getBookingLocation";
import styles from "./page.module.css";
import { useState } from "react";
import CloseButton from "../../assets/icon/CloseButton";

function SuggestLocation({ isHomePage }) {
  const [checkButton, setCheckButton] = useState(false);
  const [cityName, setCityName] = useState(undefined);

  const {
    data: dataLocation,
    error: dataError,
    isLoading: dataLoading,
  } = useLocation();

  if (dataLoading) {
    return <div>Loading...</div>;
  }

  if (dataError) {
    return <div>Error: {dataError.message}</div>;
  }

  const realData = dataLocation?.content;
  const dataLocationFilteredById = realData?.filter((item) => item.id < 10);

  function handleClick() {
    setCheckButton(true);
  }

  function handleClose() {
    setCheckButton(false);
  }

  function chosenCity(name) {
    setCityName(name);
    setCheckButton(false);
  }

  return (
    <div className={styles.container}>
      <div>
        <div
          onClick={() => handleClick()}
          className={isHomePage ? styles.text : styles.textIsNotHomePage}
        >
          Địa điểm
        </div>

        {checkButton ? (
          <div className={styles.suggestingContainer}>
            <div className={styles.suggestingContent}>
              <h2 className={styles.h2}>Tìm kiếm địa điểm</h2>

              <ul className={styles.ul}>
                <div className={styles.wrapper}>
                  {dataLocationFilteredById?.map((item, index) => (
                    <li
                      onClick={() => chosenCity(item.tinhThanh)}
                      className={styles.li}
                      key={index}
                    >
                      <div className={styles.imgContainer}>
                        <img src={item.hinhAnh} className={styles.img} />
                      </div>

                      <div className={styles.locationText}>
                        {item.tinhThanh}
                      </div>
                    </li>
                  ))}
                </div>
              </ul>

              <button onClick={() => handleClose()} className={styles.button}>
                <CloseButton />
              </button>
            </div>
          </div>
        ) : (
          <div
            onClick={() => handleClick()}
            className={
              cityName ? styles.textYouWillGo : styles.textWhereWillYouGo
            }
          >
            {cityName || "Bạn sắp đi đâu"}
          </div>
        )}
      </div>
    </div>
  );
}

export default SuggestLocation;
