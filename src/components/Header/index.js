import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import auth from "../../api/auth";
import { ProfileContext } from "../../context/providers/ProfileProvider";
import styles from "./Header.module.css";

const Header = () => {
  const { profile } = useContext(ProfileContext);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [dataMe, setDataMe] = useState({});

  const getMe = async () => {
    try {
      const { data } = await auth.get("me", {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      setDataMe(data);
    } catch (err) {
      console.log(err);
    }
  };

  // const signOut = async () => {
  //   try {
  //     const {Data} = await axios.post()
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="py-3 d-flex justify-content-end pe-5 border-bottom">
      <div className={`d-flex align-items-center relative ${styles.container}`}>
        <div>
          <span className="fw-medium">{dataMe && dataMe?.name}</span>
        </div>
        <div
          className={`bg-secondary text-white p-2 rounded-circle ms-3 ${styles.profile}`}
          onClick={() => setShowProfileCard(!showProfileCard)}
          style={{ cursor: "pointer" }}
        >
          <BiUser size={24} />
        </div>
        {showProfileCard && (
          <div className={`shadow rounded ${styles.card}`}>
            <div
              className="py-1 mt-1 rounded fw-medium"
              style={{ cursor: "pointer" }}
            >
              Settings
            </div>
            <div
              className="py-1 mt-1 rounded fw-medium"
              style={{ cursor: "pointer" }}
            >
              Log out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
