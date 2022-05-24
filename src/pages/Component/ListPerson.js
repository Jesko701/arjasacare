import axios from "axios";
import React, { useEffect, useState } from "react";

const ListPerson = (props) => {
  return (
    <>
      <div className="card mb-4" id="list-produk">
        <div className="card-body">
          <h3 className="card-title">List Pelanggan</h3>
          <div className="table-responsive text-nowrap">
            <table className="table table-striped">
              <tbody className="table-border-bottom-0">
                <tr>
                  <td>
                    <i className="fab fa-angular fa-lg text-danger me-3"></i>
                    <strong>Nomor</strong>
                  </td>
                  <td>Nama</td>
                  <td>Aksi</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPerson;
