import React from "react";

const Table = () => {
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
        <tr>
          <th scope="row">1</th>
          <td>85739515629</td>
          <td>8ecb583417dd</td>
          <td>connected</td>
          <td>2023-01-04T04:04:00.000Z</td>
          <td>
            <button className="btn btn-primary">Scan</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>85739515629</td>
          <td>8ecb583417dd</td>
          <td>connecting</td>
          <td>2023-01-04T04:04:00.000Z</td>
          <td>
            <button className="btn btn-primary">Scan</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
