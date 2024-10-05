/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { FormatDate } from "../../helpers/formattedDate";
import Modal from "../Modal/Modal";
import styles from "./page.module.css";
import { officialPrice } from "../../helpers/officialPrice";

function ModalConfirmation({
  setCheckingBookingButton,
  startDateInDetailRoom,
  endDateInDetailRoom,
  price,
  realNightsBooking,
}) {
  const guests = useSelector((state) => state.addGuestInRoom.guest);
  const priceConfirmation = officialPrice(price) * realNightsBooking + 8;
  return (
    <Modal>
      <div className={styles.container}>
        <div>
          <h2 className={styles.h2}>Bạn có chắc muốn đặt phòng này?</h2>
        </div>

        <div>
          <div className={styles.informationConfirmation}>
            Lịch đặt phòng: {FormatDate(startDateInDetailRoom)} -{" "}
            {FormatDate(endDateInDetailRoom)}
          </div>

          <div className={styles.informationConfirmation}>
            Số khách: 0{guests}
          </div>

          <div className={styles.officialPriceConfirmation}>
            Tổng tiền: ${priceConfirmation}
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.button}>Xác nhận</button>

            <button
              onClick={() => setCheckingBookingButton(false)}
              className={styles.buttonCancel}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalConfirmation;
