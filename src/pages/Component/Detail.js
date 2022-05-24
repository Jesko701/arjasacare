import { useEffect as UseEffect, useState as UseState } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";
import { useAuth } from "../../Config/Auth";
import { useNavigate } from "react-router";

const Detail = ({data}) => {
  const { authToken } = useAuth();
  const id = data.id;
  const navigate = useNavigate();

  const handleDeletePelanggan = () => {
    const DeleteData = async () => {
      try {
        const response = await axios.delete(`https://arjasa-care-api.herokuapp.com/api/v1/pelanggan/${id}`, 
          {headers: { Authorization: `Bearer ${authToken}` }}
        );
        navigate("/");
      } catch (err) {}
    }
    DeleteData();
  }
  
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

  const csvReport = {
    data: getDetail,
    headers: kopCSV,
    filename: "Detail_Pelanggan.csv",
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
              <h3 class="card-title">Nama: {data.nama}</h3>
              <div class="row">
                <div class="col">
                  <b>Alamat: {data.alamat}</b>
                  <div class="mb-3 row" />
                  <b>No Telepon: {data.nomor_hp}</b>
                  <div class="mb-3 row" />
                  <b>Tanggal Input: {data.created_at}</b>
                  <div class="mb-3 row" />
                </div>
                <div class="col">
                  <b>Tanda Tangan: </b>
                  <a href={data.tanda_tangan} className="btn btn-warning">Lihat</a>
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
                onClick={handleDeletePelanggan}
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
=======
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

export default Detail;
