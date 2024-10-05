/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Modal from "../Modal/Modal";
import styles from "./page.module.css";
import CloseButton from "../../assets/icon/closeButton";

function SignIn({ signIn }) {
  return (
    <>
      {signIn && (
        <Modal>
          <form>Hi</form>

          <button>
            <CloseButton />
          </button>
        </Modal>
      )}
    </>
  );
}

export default SignIn;
