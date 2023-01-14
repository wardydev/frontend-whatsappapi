import { useEffect, useState } from "react";
import other from "../api/other";

const useGetPackageData = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await other.get(endpoint, {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      if (res) {
        setData(res?.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};

export default useGetPackageData;
