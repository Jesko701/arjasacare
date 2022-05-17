import axios from "axios";
import { useState as UseState } from "react";

const detail = (props) => {
  const [getDetail, setDetail] = UseState([{}]);

  const fetchDataTransaksi = async (props) => {
    try {
      const getDataFromAPI = await axios.get(``);
      console.log(getDataFromAPI);
      setDetail(getDataFromAPI);
    } catch (msg) {
      console.log(msg.error());
    }
  };

  return (
    <>
      <div class="content-wrapper">
        <div class="container-xxl flex-grow-1 container-p-y">
          <h4 class="fw-bold py-3 mb-4">
            <span class="text-muted fw-light">Detail /</span> Detail Pelanggan
          </h4>
          <div class="card mb-4" id="list-produk">
            <div class="card-body">
              <h3 class="card-title">Nama: {props.nama}</h3>
              <div class="row">
                <div class="col">
                  <b>NIK: {props.nik}</b>
                  <div class="mb-3 row" />
                  <b>Alamat: {props.alamat}</b>
                  <div class="mb-3 row" />
                  <b>No Telepon: {props.noTelp}</b>
                  <div class="mb-3 row" />
                  <b>Usia: {props.usia} </b>
                  <div class="mb-3 row" />
                  <b>Tanggal Input: {props.tglInput}</b>
                  <div class="mb-3 row" />
                </div>
                <div class="col">
                  <b>Tanda Tangan: </b>
                  <img src={props.idGambarTTD}></img>
                </div>
              </div>
              <button
                type="button"
                class="btn rounded-pill btn-outline-success mr-3"
              >
                Tambah Stok
              </button>
              <button
                type="button"
                class="btn rounded-pill btn-outline-secondary mr-3"
              >
                Ubah
              </button>
              <button
                type="button"
                class="btn rounded-pill btn-outline-danger mr-3"
              >
                Hapus
              </button>
            </div>
          </div>
          <div className="card mb-4" id="list-produk">
            <div className="card-body">
              <h3 className="card-title">Daftar List Transaksi</h3>
              <div className="table-responsive text-nowrap">
                <table className="table table-striped">
                  <tbody className="table-border-bottom-0">
                    <tr>
                      <td>
                        <i className="fab fa-angular fa-lg text-danger me-3"></i>
                        <strong>Nomor</strong>
                      </td>
                      <td>Keluhan</td>
                      <td>Nama Obat</td>
                      <td>Alergi</td>
                      <td>Saran</td>
                    </tr>
                    {getDetail &&
                      getDetail.map((item, i) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <i className="fab fa-angular fa-lg text-danger me-3"></i>
                                <strong>{i + 1}</strong>
                              </td>
                              <td>{item.keluhan}</td>
                              <td>{item.namaObat}</td>
                              <td>{item.alergi}</td>
                              <td>{item.saran}</td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default detail;
