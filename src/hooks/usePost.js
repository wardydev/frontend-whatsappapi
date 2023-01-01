import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import auth from "../api/auth";
import { AuthContext } from "../context/providers/AuthProvider";

const usePost = (
  url,
  data,
  componentActive,
  isRouting = false,
  isLogin = false,
  isLocalStorage = false,
  keyStorage
) => {
  const { setRegisterAuthActive } = useContext(AuthContext);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePostData = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await auth.post(url, data);
      if (isLocalStorage === true && isLogin === true) {
        if (typeof window !== "undefined") {
          localStorage.setItem(
            keyStorage,
            JSON.stringify(res?.data?.access_token)
          );
        }
        router.push("/");
      } else {
        setRegisterAuthActive(componentActive);
        if (isRouting === true) {
          router.push("/login");
        }
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setErrorMessage(err.message);
    }
  };
  return { handlePostData, isLoading, errorMessage };
};

export default usePost;
