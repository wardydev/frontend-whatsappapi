import Link from "next/link";
import React, { useState } from "react";
import autoReply from "../../src/api/autoReply";
import Alert from "../../src/components/Alert";
import LayoutDashboard from "../../src/components/LayoutDashboard";
import Spinner from "../../src/components/Spinner";
import SwitchInput from "../../src/components/SwitchInput";
import useGetDataReply from "../../src/hooks/useGetDataReply";
import { HEAD_AUTOREPLY } from "../../src/utils/constants";

const AutoReply = () => {
  const { data, loading, error } = useGetDataReply("/");

  const handleSwithChange = async (autoreply, devicekey) => {
    try {
      if (autoreply === false) {
        await autoReply.get(`/active/${devicekey}`, {
          headers: {
            Authorization: `Bearer ${
              typeof window !== "undefined" &&
              JSON.parse(localStorage.getItem("TOKEN"))
            }`,
          },
        });
      } else {
        await autoReply.get(`/deactive/${devicekey}`, {
          headers: {
            Authorization: `Bearer ${
              typeof window !== "undefined" &&
              JSON.parse(localStorage.getItem("TOKEN"))
            }`,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LayoutDashboard>
      {error && (
        <div>
          <Alert theme="alert-danger" message={error} />
        </div>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            {HEAD_AUTOREPLY.map((item, index) => {
              return (
                <th scope="col" key={index}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.data?.length !== 0 &&
            data?.data?.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.number}</td>
                  <td>
                    <Link href={`auto-reply/${item.devicekey}`}>Setting</Link>
                  </td>
                  <td>
                    <SwitchInput
                      isDisable={false}
                      defaultValue={item.autoreply}
                      setValue={() =>
                        handleSwithChange(item.autoreply, item.devicekey)
                      }
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {loading && (
        <div className="text-center">
          <Spinner color="text-success" />
        </div>
      )}
    </LayoutDashboard>
  );
};

export default AutoReply;
