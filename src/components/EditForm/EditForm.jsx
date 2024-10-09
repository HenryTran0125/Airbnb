/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Controller, useForm } from "react-hook-form";
import { editInformation } from "../../data/EditInformation";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  saveBirthday,
  saveEmail,
  saveGender,
  saveId,
  savePhone,
  saveUserName,
} from "../../store/slices/storeUserInformation";
import { useEffect, useState } from "react";
import CloseButton from "../../assets/icon/closeButton";
import { convertToDateFormat } from "../../helpers/convertToDateFormatPUT";
import { usePutUserInformation } from "../../service/putUserInformation";
import toast from "react-hot-toast";
import {
  updateBirthday,
  updateEmail,
  updateGender,
  updateId,
  updatePassword,
  updatePhone,
  updateUserName,
} from "../../store/slices/updateUserInformation";
import Modal from "../Modal/Modal";

function EditForm({ setEdit, edit }) {
  const { register, handleSubmit, control } = useForm();
  const { name, email, phone, birthday, gender } = useSelector(
    (state) => state.storeInformation
  );

  const { id } = useSelector((state) => state.storeInformation);
  const mutation = usePutUserInformation();
  const dispatch = useDispatch();
  const dataResponse = mutation.data?.content;

  useEffect(() => {
    if (mutation.isSuccess && dataResponse.name) {
      dispatch(saveUserName(dataResponse.name));
      dispatch(saveEmail(dataResponse.email));
      dispatch(saveId(dataResponse.id));
      dispatch(savePhone(dataResponse.phone));
      dispatch(saveBirthday(dataResponse.birthday));
      dispatch(saveGender(dataResponse.gender));

      toast.success(
        <span style={{ fontSize: "1.4rem", color: "green" }}>
          Login successfully!
        </span>
      );
    }
  }, [mutation.isSuccess, mutation.data, dispatch]);

  if (mutation.isLoading) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return console.error(`Error: ${mutation.error.message}`);
  }

  if (mutation.isSuccess) {
    return console.log("Data updated: ", mutation.data);
  }

  function subMission(data) {
    const updateData = { ...data, gender: true, id: id };
    console.log(updateData);
    mutation.mutate(updateData);
    setEdit(false);

    dispatch(saveId(data.id));
    dispatch(updateId(data.id));
    dispatch(saveEmail(data.email));
    dispatch(saveUserName(data.name));
    dispatch(savePhone(data.phone));
    dispatch(saveBirthday(data.birthday));
    dispatch(saveGender(data.gender));
    // dispatch(savePassword(data.password));

    localStorage.setItem("userInfo", JSON.stringify(updateData));

    toast.success(
      <span style={{ fontSize: "1.4rem", color: "green" }}>
        Update successfully!
      </span>
    );
  }

  function handleSelect(e) {
    dispatch(saveGender(e.target.value));
    console.log(e.target.value);
  }

  // console.log(birthday);

  return (
    <>
      {edit && (
        <Modal>
          <div className={styles.formContainer}>
            <div>
              <h2 className={styles.h2}>Edit Personal Profile</h2>
            </div>

            <div>
              <form onSubmit={handleSubmit(subMission)}>
                <div className={styles.fieldContainer}>
                  {editInformation.map((item, index) => (
                    <div className={styles.fieldElement} key={index}>
                      <label className={styles.label}>{item.label}</label>

                      <Controller
                        name={item.register}
                        control={control}
                        defaultValue={
                          item.register === "name"
                            ? name
                            : item.register === "email"
                            ? email
                            : phone
                        }
                        render={({ field }) => (
                          <input
                            className={styles.input}
                            {...field}
                            type={item.type}
                          />
                        )}
                      />
                    </div>
                  ))}

                  <div className={styles.fieldElement}>
                    <label className={styles.label}>Ngày sinh</label>
                    <Controller
                      name="birthday"
                      control={control}
                      defaultValue={birthday}
                      render={({ field }) => (
                        <input
                          className={styles.input}
                          {...field}
                          type="date"
                        />
                      )}
                    />
                  </div>

                  <div className={styles.fieldElement}>
                    <label className={styles.label}>Giới tính</label>
                    <Controller
                      name="gender"
                      control={control}
                      defaultValue={gender || "Chọn giới tính"}
                      render={({ field }) => (
                        <select
                          {...field}
                          onChange={(e) => handleSelect(e)}
                          className={styles.select}
                        >
                          <option className={styles.options} value="Nam">
                            Nam
                          </option>
                          <option className={styles.options} value="Nữ">
                            Nữ
                          </option>
                        </select>
                      )}
                    />
                  </div>
                </div>

                <button className={styles.button} type="submit">
                  Update
                </button>
              </form>

              <button
                className={styles.closeButton}
                onClick={() => setEdit(false)}
              >
                <CloseButton fill="black" stroke="black" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditForm;
