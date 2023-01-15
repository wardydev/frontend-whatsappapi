import React, { useState } from "react";
import autoReply from "../../api/autoReply";

export const AutoReplyContext = React.createContext();
const AutoReplyProvider = ({ children }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDataByDeviceKey = async (deviceKey) => {
    setLoading(true);
    try {
      const res = await autoReply.get(`/${deviceKey}`, {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <AutoReplyContext.Provider
      value={{ getDataByDeviceKey, data, loading, error }}
    >
      {children}
    </AutoReplyContext.Provider>
  );
};

export default AutoReplyProvider;
