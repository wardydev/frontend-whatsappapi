import React from "react";
import { formatDate } from "../../utils/functions";

const Table = ({ data }) => {
  return (
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
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{list.number}</td>
                <td>{list.devicekey}</td>
                <td>{list.status}</td>
                <td>{formatDate(new Date(list.createdAt))}</td>
                <td>
                  <button className="btn btn-primary">Scan</button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
