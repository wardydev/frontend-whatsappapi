import React, { useContext, useEffect, useState } from "react";
import Button from "../../src/components/Button";
import FormNumber from "../../src/components/DeviceComp/FormNumber";
import LayoutDashboard from "../../src/components/LayoutDashboard";
import Modal from "../../src/components/Modal";
import ScanQrCode from "../../src/components/ScanQrCode";
import Table from "../../src/components/Table";
import { DeviceContext } from "../../src/context/providers/DeviceProvider";
import usePostData from "../../src/hooks/usePostData";
import { STATUS_DEVICE_ACTIVE } from "../../src/utils/constants";
import { replacePlusPhoneNumber } from "../../src/utils/functions";
import Alert from "../../src/components/Alert";
import Spinner from "../../src/components/Spinner";

const Device = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const {
    waNumber,
    deviceModalActive,
    resDeleted,
    lists,
    getListsDevice,
    isSuccess,
    isLoadingDevice,
  } = useContext(DeviceContext);
  const data = {
    number: replacePlusPhoneNumber(waNumber),
  };
  const { handlePostData, response, error, isLoading } = usePostData(
    "add",
    data,
    true
  );

  useEffect(() => {
    getListsDevice();
  }, []);

  const showFormActive = () => {
    switch (deviceModalActive) {
      case STATUS_DEVICE_ACTIVE.INPUT_NUMBER:
        return <FormNumber />;
      case STATUS_DEVICE_ACTIVE.ADD_QR_CODE:
        return (
          <ScanQrCode
            data={response}
            closeModal={() => setIsShowModal(false)}
          />
        );
      case STATUS_DEVICE_ACTIVE.FINISHED:
        return <h1>finished</h1>;
      default:
        return deviceModalActive;
    }
  };

  const titleModal = () => {
    return (
      (deviceModalActive === STATUS_DEVICE_ACTIVE.INPUT_NUMBER &&
        "Tambahkan Nomor Wa") ||
      (deviceModalActive === STATUS_DEVICE_ACTIVE.ADD_QR_CODE && "Scan QR Code")
    );
  };

  return (
    <LayoutDashboard>
      {isShowModal && (
        <Modal
          title={titleModal()}
          closeModal={() => setIsShowModal(false)}
          handleButtonModal={handlePostData}
          errorMessage={error}
          isLoadingbutton={isLoading}
          isShowFooter={deviceModalActive !== STATUS_DEVICE_ACTIVE.ADD_QR_CODE}
        >
          {showFormActive()}
        </Modal>
      )}
      {isSuccess && (
        <div>
          <Alert message={resDeleted} theme="alert-success" />
        </div>
      )}
      <div className="mb-3">
        <Button
          title="Tambah"
          handleClick={() => setIsShowModal(true)}
          isFullWidth={false}
        />
      </div>
      <Table data={lists} />
      {isLoadingDevice && (
        <div className="text-center">
          <Spinner color="text-success" />
        </div>
      )}
    </LayoutDashboard>
  );
};

export default Device;
