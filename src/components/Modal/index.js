import React, { useContext } from "react";
import { BiX } from "react-icons/bi";
import { DeviceContext } from "../../context/providers/DeviceProvider";
import Alert from "../Alert";
import Button from "../Button";
import Spinner from "../Spinner";

import styles from "./Modal.module.css";

const Modal = ({
  children,
  title,
  closeModal,
  handleButtonModal,
  errorMessage,
  isLoadingbutton,
  isShowFooter = true,
}) => {
  const { waNumber } = useContext(DeviceContext);
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.closeButton} onClick={closeModal}>
        <BiX size={36} color="#86F8C3" />
      </div>
      <div className={styles.mainContent}>
        <div className="card" style={{ minWidth: 600 }}>
          <div className="card-header pt-3 d-flex align-item-center">
            <h5 className="card-title fs-4 fw-medium">{title}</h5>
          </div>
          <div className="card-body px-5">
            <div>{errorMessage && <Alert message={errorMessage} />}</div>
            {children}
          </div>
          {isShowFooter && (
            <div className="card-footer d-flex justify-content-end py-3">
              <Button
                title={isLoadingbutton ? <Spinner /> : "Next"}
                isDisabled={!waNumber}
                handleClick={handleButtonModal}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
