import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

import styles from "./QrCode.module.css";
import { DeviceContext } from "../../context/providers/DeviceProvider";
import { STATUS_DEVICE_ACTIVE } from "../../utils/constants";

const ScanQrCode = ({ data, closeModal }) => {
  const {
    getListsDevice,
    setDeviceModalActive,
    setWaNumber,
    status,
    getStatus,
  } = useContext(DeviceContext);

  useEffect(() => {
    getStatus(data);
    if (status.status === "connected") {
      setTimeout(() => {
        getListsDevice();
        setDeviceModalActive(STATUS_DEVICE_ACTIVE.INPUT_NUMBER);
        setWaNumber("");
        closeModal();
      }, 1000);
    }
  }, [status]);

  return (
    <div className="text-center">
      <div>
        <span className="fw-medium">Scan QR Code Dibawah Ini</span>
      </div>
      <div className={`card my-4 ${styles.camera}`}>
        <Image src={data.qr} width={300} height={300} alt="qr-code" />
      </div>
      <div className="mb-3">
        <span style={{ color: "#14BA6D" }}>
          {status.status === "connected"
            ? "Berhasil Di Scan, Tunggu sebentar.."
            : "."}
        </span>
      </div>
    </div>
  );
};

export default ScanQrCode;
