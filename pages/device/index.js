import React, { useContext, useState } from "react";
import Button from "../../src/components/Button";
import FormNumber from "../../src/components/DeviceComp/FormNumber";
import LayoutDashboard from "../../src/components/LayoutDashboard";
import Modal from "../../src/components/Modal";
import ScanQrCode from "../../src/components/ScanQrCode";
import Table from "../../src/components/Table";
import { DeviceContext } from "../../src/context/providers/DeviceProvider";
import usePostData from "../../src/hooks/usePostData";
import { STATUS_DEVICE_ACTIVE } from "../../src/utils/constants";

const Device = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const { waNumber, deviceModalActive } = useContext(DeviceContext);
  const data = {
    number: waNumber,
  };
  const { handlePostData, response, error, isLoading } = usePostData(
    "add",
    data,
    true
  );

  const showFormActive = () => {
    switch (deviceModalActive) {
      case STATUS_DEVICE_ACTIVE.INPUT_NUMBER:
        return <FormNumber />;
      case STATUS_DEVICE_ACTIVE.ADD_QR_CODE:
        return <ScanQrCode data={response} />;
      case STATUS_DEVICE_ACTIVE.FINISHED:
        return <h1>finished</h1>;
      default:
        return deviceModalActive;
    }
  };

  return (
    <LayoutDashboard>
      {isShowModal && (
        <Modal
          title="Tambahkan Nomor Hp"
          closeModal={() => setIsShowModal(false)}
          handleButtonModal={handlePostData}
          errorMessage={error}
          isLoadingbutton={isLoading}
          isShowFooter={deviceModalActive !== STATUS_DEVICE_ACTIVE.ADD_QR_CODE}
        >
          {showFormActive()}
        </Modal>
      )}
      <div className="mb-3">
        <Button title="Tambah" handleClick={() => setIsShowModal(true)} />
      </div>
      <Table />
    </LayoutDashboard>
  );
};

export default Device;
