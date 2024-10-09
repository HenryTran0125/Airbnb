/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { officialPrice } from "../../helpers/officialPrice";
import { useReview } from "../../service/review";
import RatingAndCost from "../RatingAndCost/RatingAndCost";
import BookingDateInRoomDetail from "../BookingDateInRoomDetail/BookingDateInRoomDetail";
import AddingGuestInRoomDetail from "../AddingGuestInRoomDetail/AddingGuestInRoomDetail";
import ButtonBooking from "../ButtonBooking/ButtonBooking";
import BookingFee from "../BookingFee/BookingFee";
import { useReducer, useState } from "react";
import ModalBookingDate from "../Modal/Modal";
import DateRangeBooking from "../DateRangeBooking/DateRangeBooking";
import { countingNights } from "../../helpers/countNights";
import Modal from "../Modal/Modal";
import ModalConfirmation from "../ModalConfirmation/ModalConfirmation";
import { useSelector } from "react-redux";

function PriceTable({ data }) {
  const [checkClickBooking, setCheckClickBooking] = useState(false);
  const [startDateInDetailRoom, setStartDateInDetailRoom] = useState(null);
  const [endDateInDetailRoom, setEndDateInDetailRoom] = useState(null);
  const [checkBookingButton, setCheckingBookingButton] = useState(false);

  const {
    data: dataReview,
    error: dataError,
    isLoading: dataLoading,
  } = useReview(data.id);

  if (dataLoading) {
    return <div>Loading...</div>;
  }

  if (dataError) {
    return <div>Error: {dataError.message || "Error occur"}</div>;
  }
  const realData = dataReview?.content;
  const Price = officialPrice(data.giaTien);
  const realNightsBooking = countingNights(
    startDateInDetailRoom,
    endDateInDetailRoom
  );
  const { id, maViTri } = data;

  console.log(dataReview);

  return (
    <div className={styles.container}>
      <RatingAndCost realData={realData} data={data} />

      <div>
        <BookingDateInRoomDetail
          startDateInDetailRoom={startDateInDetailRoom}
          endDateInDetailRoom={endDateInDetailRoom}
          setCheckClickBooking={setCheckClickBooking}
        />

        <AddingGuestInRoomDetail data={data} />

        <ButtonBooking
          startDateInDetailRoom={startDateInDetailRoom}
          endDateInDetailRoom={endDateInDetailRoom}
          setCheckingBookingButton={setCheckingBookingButton}
        />

        <BookingFee realNightsBooking={realNightsBooking} Price={Price} />
      </div>

      {checkClickBooking && (
        <Modal onclose={() => setCheckClickBooking(false)}>
          <DateRangeBooking
            setCheckClickBooking={setCheckClickBooking}
            setStartDateInDetailRoom={setStartDateInDetailRoom}
            setEndDateInDetailRoom={setEndDateInDetailRoom}
          />

          <div className={styles.theNightsContainer}>
            <p className={styles.text}>Số đêm:</p>

            <p className={styles.nightsBooking}>{realNightsBooking}</p>
          </div>
        </Modal>
      )}

      {checkBookingButton && (
        <ModalConfirmation
          startDateInDetailRoom={startDateInDetailRoom}
          endDateInDetailRoom={endDateInDetailRoom}
          setCheckingBookingButton={setCheckingBookingButton}
          price={data.giaTien}
          realNightsBooking={realNightsBooking}
          id={id}
          maViTri={maViTri}
        />
      )}
    </div>
  );
}

export default PriceTable;
