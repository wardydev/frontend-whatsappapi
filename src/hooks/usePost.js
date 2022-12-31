import React from "react";
import { useRouter } from "next/router";
import auth from "../api/auth";

const usePost = (url, data, route, isLocalStorage = false, keyStorage) => {
  const router = useRouter();

  const handlePostData = async (e) => {
    e.preventDefault();
    try {
      const res = await auth.post(url, data);
      if (isLocalStorage) {
        if (typeof window !== "undefined") {
          localStorage.setItem(
            keyStorage,
            JSON.stringify(res?.data?.access_token)
          );
        }
      }
      router.push(route);
    } catch (err) {
      // temporary error message
      console.log(err.message);
    }
  };
  return { handlePostData };
};

export default usePost;
