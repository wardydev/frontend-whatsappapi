import React, { useState } from "react";
import { STATUS_DEVICE_ACTIVE } from "../../utils/constants";
import device from "../../api/device";

export const DeviceContext = React.createContext();
const DeviceProvider = ({ children }) => {
  const [waNumber, setWaNumber] = useState("");
  const [deviceModalActive, setDeviceModalActive] = useState(
    STATUS_DEVICE_ACTIVE.INPUT_NUMBER
  );
  const [resDeleted, setResDeleted] = useState();
  const [lists, setLists] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoadingDevice, setIdLoadingDevice] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [responseTable, setResponseTable] = useState([]);
  const [status, setStatus] = useState({});

  const getListsDevice = async () => {
    setIdLoadingDevice(true);
    try {
      const res = await device.get("list", {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      if (res) {
        setLists(res.data.data);
        setIdLoadingDevice(false);
      }
    } catch (err) {
      console.log(err);
      setIdLoadingDevice(false);
    }
  };

  const deleteListDevice = async (deviceKey) => {
    setIdLoadingDevice(true);
    try {
      const res = await device.delete(`delete/${deviceKey}`, {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      if (res) {
        getListsDevice();
        setIsSuccess(true);
        setIdLoadingDevice(false);
        setResDeleted(res.data.message);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2500);
      }
    } catch (err) {
      console.log(err);
      setIdLoadingDevice(false);
    }
  };

  const scanListDevice = async (number) => {
    setDeviceModalActive(STATUS_DEVICE_ACTIVE.ADD_QR_CODE);
    try {
      const res = await device.post(
        "add",
        { number: number },
        {
          headers: {
            Authorization: `Bearer ${
              typeof window !== "undefined" &&
              JSON.parse(localStorage.getItem("TOKEN"))
            }`,
          },
        }
      );
      if (res) {
        setResponseTable(res?.data.data);
        setIsShowModal(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getStatus = async (data) => {
    try {
      const res = await device.get(`status/${data?.devicekey}`, {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      console.log(res.data);

      if (res) {
        setStatus(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DeviceContext.Provider
      value={{
        waNumber,
        setWaNumber,
        deviceModalActive,
        setDeviceModalActive,
        deleteListDevice,
        resDeleted,
        getListsDevice,
        lists,
        isSuccess,
        isLoadingDevice,
        scanListDevice,
        isShowModal,
        setIsShowModal,
        responseTable,
        setResponseTable,
        getStatus,
        status,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
