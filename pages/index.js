import React, { useEffect, useState } from "react";
import auth from "../src/api/auth";
// export async function getServerSideProps() {
//   const res = await axios.get("http://198.71.61.49:3333/auth/me", {
//     headers: {
//       Authorization: `Bearer ${
//         typeof window !== "undefined"
//           ? JSON.parse(localStorage.getItem("TOKEN"))
//           : ""
//       }`,
//     },
//   });
//   const data = res.data;
//   return {
//     props: {
//       data,
//     },
//   };
// }

const Home = () => {
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
    <div>
      <ul className="list-group">
        <li className="list-group-item">User Info</li>
        <li className="list-group-item">{user.id}</li>
        <li className="list-group-item">{user.name}</li>
        <li className="list-group-item">{user.email}</li>
        <li className="list-group-item">{user.updatedAt}</li>
      </ul>
    </div>
  );
};

export default Home;
