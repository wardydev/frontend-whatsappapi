import React, { useState } from "react";
import { STATUS_DEVICE_ACTIVE } from "../../utils/constants";

export const DeviceContext = React.createContext();
const DeviceProvider = ({ children }) => {
  const [waNumber, setWaNumber] = useState("");
  const [deviceModalActive, setDeviceModalActive] = useState(
    STATUS_DEVICE_ACTIVE.INPUT_NUMBER
  );

  return (
    <DeviceContext.Provider
      value={{ waNumber, setWaNumber, deviceModalActive, setDeviceModalActive }}
    >
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
