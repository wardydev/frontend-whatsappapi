import React, { useEffect, useState } from "react";
import Image from "next/image";

import device from "../../api/device";

const ScanQrCode = ({ data }) => {
  const [status, setStatus] = useState({});

  const getStatus = async () => {
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

  useEffect(() => {
    getStatus();
  }, [data, status]);

  return (
    <div className="text-center">
      <div>
        <span className="fw-medium">Scan QR Code Dibawah</span>
      </div>
      <Image src={data.qr} width={300} height={300} alt="qr-code" />
      <div>
        <span className="fw-medium">Device key: {data.devicekey}</span>
        <p className="fw-medium">Status: {status?.status}</p>
      </div>
    </div>
  );
};

export default ScanQrCode;
