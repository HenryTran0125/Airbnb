/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Modal from "../Modal/Modal";
import styles from "./page.module.css";
import CloseButton from "../../assets/icon/closeButton";
import { useForm } from "react-hook-form";
import { usePostUserAccount } from "../../service/postUserAccount";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveEmail,
  saveId,
  saveUserName,
} from "../../store/slices/storeUserInformation";
import toast from "react-hot-toast";

function SignIn({ setSignIn, signIn, setSignUp }) {
  const { register, handleSubmit } = useForm();
  const mutation = usePostUserAccount();
  const dataResponse = mutation.data?.content?.user;
  const userName = useSelector((state) => state.storeInformation.name);
  const dispatch = useDispatch();

  useEffect(() => {
    if (mutation.isSuccess && dataResponse?.name) {
      dispatch(saveUserName(dataResponse?.name));
      dispatch(saveEmail(dataResponse?.email));
      dispatch(saveId(dataResponse?.id));
      toast.success("Login successfully!");
    }
  }, [mutation.isSuccess, dataResponse]);

  if (mutation.isLoading) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return toast.error(`Error: ${mutation.error.message}`);
  }

  if (mutation.isSuccess) {
    console.log("Get data successfully!");
  }

  function signInSubmission(data) {
    mutation.mutate(data);
    console.log(data);
    setSignIn(false);
  }

  function handleNavigateRegister() {
    setSignIn(false);
    setSignUp(true);
  }

  console.log(userName);

  return (
    <>
      {signIn && (
        <Modal>
          <div className={styles.container}>
            <div className={styles.alignment}>
              <h1 className={styles.h1}>Đăng nhập Airbnb</h1>

              <form onSubmit={handleSubmit(signInSubmission)}>
                {[
                  {
                    label: "Email",
                    type: "email",
                    register: "email",
                    holder: "Vui lòng nhập tài khoản",
                  },
                  {
                    label: "Mật khẩu",
                    type: "password",
                    register: "password",
                    holder: "Vui lòng nhập mật khẩu",
                  },
                ].map((item, index) => (
                  <div className={styles.fieldContainer} key={index}>
                    <label className={styles.label}>{item.label}</label>

                    <input
                      {...register(item.register)}
                      type={item.type}
                      placeholder={item.holder}
                      className={styles.input}
                    />
                  </div>
                ))}

                <button className={styles.signInButton} type="submit">
                  Đăng nhập
                </button>

                <div className={styles.createAccountContainer}>
                  <button
                    onClick={() => handleNavigateRegister()}
                    className={styles.createAccount}
                  >
                    Tạo tài khoản
                  </button>
                </div>
              </form>

              <button
                className={styles.closeButton}
                onClick={() => setSignIn(false)}
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

export default SignIn;
