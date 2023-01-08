import React, { useContext } from "react";
import { DeviceContext } from "../../context/providers/DeviceProvider";
import { formatDate } from "../../utils/functions";
import { BiTrash, BiQrScan } from "react-icons/bi";

const Table = ({ data }) => {
  const { deleteListDevice, scanListDevice } = useContext(DeviceContext);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">PHONE NUMBER</th>
            <th scope="col">DEVICE KEY</th>
            <th scope="col">STATUS</th>
            <th scope="col">CREATED AT</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 &&
            data.map((list, index) => {
              return (
                <tr key={list.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{list.number}</td>
                  <td>{list.devicekey}</td>
                  <td>{list.status}</td>
                  <td>{formatDate(new Date(list.createdAt))}</td>
                  <td className="d-flex gap-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteListDevice(list.devicekey)}
                    >
                      <BiTrash size={16} />
                    </button>
                    {list.status === "connecting" && (
                      <button
                        className="btn btn-success"
                        onClick={() => scanListDevice(list.number)}
                      >
                        <BiQrScan size={16} />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
