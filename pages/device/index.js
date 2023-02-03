import React, { useContext, useEffect, useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

import Button from "../../src/components/Button";
import FormNumber from "../../src/components/DeviceComp/FormNumber";
import LayoutDashboard from "../../src/components/LayoutDashboard";
import Modal from "../../src/components/Modal";
import ScanQrCode from "../../src/components/ScanQrCode";
import Table from "../../src/components/Table";
import { DeviceContext } from "../../src/context/providers/DeviceProvider";
import usePostData from "../../src/hooks/usePostData";
import { HEAD_DEVICE, STATUS_DEVICE_ACTIVE } from "../../src/utils/constants";
import { replacePlusPhoneNumber } from "../../src/utils/functions";
import Alert from "../../src/components/Alert";
import Spinner from "../../src/components/Spinner";
import withAuth from "../../src/hoc/withAuth";
import CardDevice from "../../src/components/CardDevice";
import useGetDeviceData from "../../src/hooks/useGetDeviceData";
import other from "../../src/api/other";

const Device = () => {
  const {
    waNumber,
    setWaNumber,
    name,
    setName,
    deviceModalActive,
    resDeleted,
    isSuccess,
    isLoadingDevice,
    isShowModal,
    setIsShowModal,
    responseTable,
    getDataMyPackage,
    getListsDevice,
    lists,
    setDeviceModalActive,
  } = useContext(DeviceContext);
  const data = {
    number: replacePlusPhoneNumber(waNumber),
    name,
  };
  const { handlePostData, response, error, isLoading } = usePostData(
    "add",
    data,
    true
  );
  const count = useGetDeviceData("getcount");

  const showFormActive = () => {
    switch (deviceModalActive) {
      case STATUS_DEVICE_ACTIVE.INPUT_NUMBER:
        return <FormNumber />;
      case STATUS_DEVICE_ACTIVE.ADD_QR_CODE:
        return (
          <ScanQrCode
            data={responseTable.length !== 0 ? responseTable : response}
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
        "Add Whatsapp number") ||
      (deviceModalActive === STATUS_DEVICE_ACTIVE.ADD_QR_CODE && "Scan QR Code")
    );
  };

  const addDevice = () => {
    setIsShowModal(true);
    getDataMyPackage();
    setWaNumber("");
    setName("");
  };

  const handleCloseModal = () => {
    count.getData();
    setIsShowModal(false);
    getListsDevice();
    setDeviceModalActive(STATUS_DEVICE_ACTIVE.INPUT_NUMBER);
    setWaNumber("");
  };
  useEffect(() => {
    getListsDevice();
  }, []);

  return (
    <LayoutDashboard>
      {isShowModal && (
        <Modal
          title={titleModal()}
          closeModal={() => handleCloseModal()}
          handleButtonModal={handlePostData}
          errorMessage={error}
          isLoadingbutton={isLoading}
          titleButton="Next"
          isShowFooter={deviceModalActive !== STATUS_DEVICE_ACTIVE.ADD_QR_CODE}
          isButtonDisabled={waNumber}
        >
          {showFormActive()}
        </Modal>
      )}
      {isSuccess && (
        <div>
          <Alert message={resDeleted} theme="alert-success" />
        </div>
      )}
      <div className="mb-4 row">
        <div className="col-6">
          <CardDevice
            count={count?.data?.data?.total}
            title="Device"
            imageSrc="./device.svg"
          />
        </div>
        <div className="col-6">
          <CardDevice
            count={count?.data?.data?.connect}
            title="Connect"
            imageSrc="./connect.svg"
          />
        </div>
      </div>
      <div className="mb-3">
        <Button
          title="Add Device"
          handleClick={addDevice}
          isFullWidth={false}
          withIcon={<BiPlusCircle size={22} />}
        />
      </div>
      <Table data={lists} head={HEAD_DEVICE} />
      {isLoadingDevice && (
        <div className="text-center">
          <Spinner color="text-success" />
        </div>
      )}
    </LayoutDashboard>
  );
};

export default withAuth(Device);
