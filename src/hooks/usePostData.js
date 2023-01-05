import { useContext, useState } from "react";
import device from "../api/device";
import { DeviceContext } from "../context/providers/DeviceProvider";
import { STATUS_DEVICE_ACTIVE } from "../utils/constants";

const usePostData = (endpoint, data, isWithMultipleForm = false) => {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const { setDeviceModalActive } = useContext(DeviceContext);

  const handlePostData = async () => {
    setIsLoading(true);
    try {
      const res = await device.post(endpoint, data, {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      if (res) {
        setResponse(res.data.data);
        setIsLoading(false);
        if (isWithMultipleForm) {
          setDeviceModalActive(STATUS_DEVICE_ACTIVE.ADD_QR_CODE);
        }
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return { handlePostData, response, error, isLoading };
};

export default usePostData;
