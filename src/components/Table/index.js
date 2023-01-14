import React, { useContext } from "react";
import { DeviceContext } from "../../context/providers/DeviceProvider";
import { formatDate } from "../../utils/functions";
import { BiTrash, BiQrScan, BiRefresh } from "react-icons/bi";

const Table = ({ data }) => {
  const { deleteListDevice, scanListDevice } = useContext(DeviceContext);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">NAMA</th>
            <th scope="col">PHONE NUMBER</th>
            <th scope="col">DEVICE KEY</th>
            <th scope="col">STATUS</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {data?.length !== 0 &&
            data?.map((list, index) => {
              return (
                <tr key={list.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{list.name}</td>
                  <td>{list.number}</td>
                  <td>{list.devicekey}</td>
                  <td>{list.status === null ? "Scan Dulu" : list.status}</td>
                  <td className="d-flex gap-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteListDevice(list.devicekey)}
                    >
                      <BiTrash size={16} />
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => scanListDevice(list.number)}
                    >
                      <BiQrScan size={16} />
                    </button>
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
