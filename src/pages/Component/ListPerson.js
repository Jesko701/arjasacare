import axios from "axios";
import React, { useEffect, useState } from "react";

const ListPerson = (props) => {
  const [getOrang, setOrang] = useState([{
    nama: "Joy"
  }]);
  const [getFilteredName, setFilteredName] = useState();

  const getDataFromAPI = async (e) => {
    e.preventDefault();
    try {
      const getData = await axios.get(``);
      setOrang(getData);
      console.log(getOrang);
    } catch (msg) {
      console.error(msg.error);
      alert("Data gagal di Load");
    }
  };

  const getSearchData = (value) => {
     if (!getFilteredName) {
       return value;
     }
  }

  useEffect(() => {
    getDataFromAPI();
  }, []);

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
                {/* Looping Map  */}
                {getOrang &&
                  getOrang.map((item, i) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <i className="fab fa-angular fa-lg text-danger me-3"></i>
                            <strong>{i + 1}</strong>
                          </td>
                          <td>{item.nama}</td>
                          <td>
                            <button
                              type="button"
                              className="btn rounded-pill btn-outline-secondary mr-3"
                            >
                              Detail
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListPerson;
