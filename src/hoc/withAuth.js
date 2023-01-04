import { useRouter } from "next/router";
import { useEffect } from "react";

function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const router = useRouter();
    let TOKEN;
    if (typeof window !== "undefined") {
      TOKEN = JSON.parse(localStorage.getItem("TOKEN"));
    }

    useEffect(() => {
      if (!TOKEN) {
        router.push("/login");
      }
    }, [TOKEN, router]);

    return <WrappedComponent {...props} token={TOKEN} />;
  };
}

export default withAuth;
