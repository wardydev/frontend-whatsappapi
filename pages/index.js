import React, { useEffect, useState } from "react";
import auth from "../src/api/auth";
import LayoutDashboard from "../src/components/LayoutDashboard";
import withAuth from "../src/hoc/withAuth";

const Home = ({ token }) => {
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    try {
      const res = await auth.get("me", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("TOKEN"))}`,
        },
      });
      setUser(res?.data);
    } catch (err) {
      // temporary error message
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <LayoutDashboard>
      <ion-icon name="heart"></ion-icon>
      <ul>
        <li>User Info</li>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.updatedAt}</li>
      </ul>
    </LayoutDashboard>
  );
};

export default withAuth(Home);
