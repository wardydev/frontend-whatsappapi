import Image from "next/image";
import React from "react";

const ScanQrCode = ({ data }) => {
  return (
    <div className="text-center">
      <div>
        <span className="fw-medium">Scan QR Code Dibawah</span>
      </div>
      <Image src={data.qr} width={300} height={300} alt="qr-code" />
      <div>
        <span className="fw-medium">Device key: {data.devicekey}</span>
      </div>
    </div>
  );
};

export default ScanQrCode;
