import React, { useEffect, useState } from "react";
import axios from "axios";

import LayoutDashboard from "../src/components/LayoutDashboard";
import withAuth from "../src/hoc/withAuth";
import Image from "next/image";
import CardHome from "../src/components/CardHome";
import Accordion from "../src/components/Accordion";

const Home = () => {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const res = await axios.get("http://198.71.61.49:3333/myPackage", {
        headers: {
          Authorization: `Bearer ${
            typeof window !== "undefined" &&
            JSON.parse(localStorage.getItem("TOKEN"))
          }`,
        },
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    console.log(data);
  }, []);
  return (
    <LayoutDashboard>
      <div className="row mt-5">
        <div className="col-6">
          <div className="card" style={{ minHeight: 130 }}>
            <CardHome
              title="My Package"
              value="Basic"
              img="./static/images/package-illustration.svg"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <CardHome
                title="Expired At"
                value="20 Januari 2022"
                img="./static/images/date-illustration.svg"
              />
            </div>
          </div>
        </div>
        <div className="col-12 mt-3">
          <Accordion />
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default withAuth(Home);
