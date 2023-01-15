import { useState, useEffect } from "react";
import autoReply from "../api/autoReply";

const useGetDataReply = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await autoReply.get(endpoint, {
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

  useEffect(() => {
    getData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useGetDataReply;
