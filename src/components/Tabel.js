import React from "react";
import { Table } from "react-bootstrap";

const Tabel = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Makanan</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
