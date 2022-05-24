import { useEffect as UseEffect, useState as UseState } from "react";
import { CSVLink } from "react-csv";
import { timestampFormatter } from "../../helpers";

const detail = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="card mb-4" id="list-produk">
        <div className="card-body">
          <h3 className="card-title">{data.nama}</h3>
          <div className="table-responsive text-nowrap">
            <table className="table table-striped">
              <tbody className="table-border-bottom-0">
                <tr>
                  <td>
                    <i className="fab fa-angular fa-lg text-danger me-3"></i>
                    <strong>Nomor HP</strong>
                  </td>
                  <td>{data.nomor_hp}</td>
                </tr>
                <tr>
                  <td>
                    <i className="fab fa-angular fa-lg text-danger me-3"></i>
                    <strong>Alamat</strong>
                  </td>
                  <td>{data.alamat}</td>
                </tr>
                <tr>
                  <td>
                    <i className="fab fa-angular fa-lg text-danger me-3"></i>
                    <strong>Tanggal Input</strong>
                  </td>
                  <td>{timestampFormatter(data.updated_at || "")}</td>
                </tr>
                <tr>
                  <td>
                    <i className="fab fa-angular fa-lg text-danger me-3"></i>
                    <strong>Tanda Tangan</strong>
                  </td>
                  <td>
                    <button
                      className="btn rounded-pill btn-outline-warning"
                      onClick = {() => { alert("Fitur ini belum tersedia sekarang") }}
                    >
                      Lihat
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="button"
            className="btn rounded-pill btn-outline-danger mr-3"
          >
            Hapus
          </button>
          <button
            type="button"
            className="btn rounded-pill btn-outline-success float-end"
          >
            Tambah Transaksi
          </button>
        </div>
      </div>
    </>
  );
};

export default detail;
