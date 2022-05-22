import axios from "axios";
import { useEffect as UseEffect, useState as UseState } from "react";
import { CSVLink } from "react-csv";

const detail = (props) => {
  const kopCSV = [
    { label: "Nama Panjang", key: "fullname" },
    { label: "Nomor HP", key: "nomor_hp" },
    { label: "Alamat", key: "alamat" },
    { label: "Obat", key: "obat" },
    { label: "Alergi", key: "alergi" },
    { label: "Keluhan", key: "keluhan" },
    { label: "Saran", key: "saran" },
  ];

  const [getDetail, setDetail] = UseState([
    {
      fullname: "joy",
      nomor_hp: "0822222222",
      alamat: "Tes",
      obat: "Tes1",
      alergi: "Tes2",
      keluhan: "Keluhan",
      saran: "Saran",
    },
  ]);

  const fetchDataTransaksi = async (e) => {
    try {
      const getDataFromAPI = await axios.get(``);
      console.log(getDataFromAPI);
      setDetail(getDataFromAPI);
    } catch (msg) {
      console.log(msg.error());
    }
  };

  const fetchDataPelanggan = async (e) => {
    try {
      const getDataFromAPI = await axios.get(``);
      setDetail(getDetail.concat(getDataFromAPI));
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const csvReport = {
    data: getDetail,
    headers: kopCSV,
    filename: "Detail_Pelanggan.csv",
  };

  UseEffect(() => {
    fetchDataTransaksi();
    fetchDataPelanggan();
  }, []);

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
                  <b>Alamat: {props.alamat}</b>
                  <div class="mb-3 row" />
                  <b>No Telepon: {props.noTelp}</b>
                  <div class="mb-3 row" />
                  <b>Tanggal Input: {props.tglInput}</b>
                  <div class="mb-3 row" />
                </div>
                <div class="col">
                  <b>Tanda Tangan: </b>
                  <img src={props.tanda_tangan}></img>
                </div>
              </div>
              <button
                type="button"
                class="btn rounded-pill btn-outline-success mr-3"
              >
                Tambah Transaksi
              </button>
              <button
                type="button"
                class="btn rounded-pill btn-outline-danger mr-3"
              >
                Hapus
              </button>
              <button type="button" class="btn btn-info float-end">
                Download Excel
              </button>
            </div>
          </div>
          <div className="card mb-4" id="list-produk">
            <div className="card-body">
              <h3 className="card-title">Daftar List Transaksi</h3>
              <div className="table-responsive text-nowrap">
                <div class="input-group">
                  <input
                    type="search"
                    class="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    search
                  </button>
                </div>
                <div class="mb-3 row" />
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
