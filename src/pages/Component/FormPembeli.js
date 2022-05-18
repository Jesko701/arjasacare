import axios from "axios";
import React, { useRef, useState } from "react";

const FormPembeli = () => {

  const inputNama = useRef(null)
  const inputAlamat = useRef(null)
  const inputGambarTTD = useRef(null)
  const inputNomorHP = useRef(null);

  const[getDataPembeli, setDataPembeli] = useState({
    nama: "",
    alamat: "",
    nomor_hp: "",
    saranDariApotik:"",
    gambatTTD:""
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    addDataIntoUseState();
    try {
      const insert = await axios.post("", getDataPembeli);
      console.log(insert);
      alert("Data berhasil di-input");
    } catch (msg) {
      alert(msg.error)
      console.log(getDataPembeli)
    }
  }
  
  const addDataIntoUseState = () => {
    let data = getDataPembeli
    data["nama"] = inputNama;
    data["alamat"] = inputAlamat;
    data["nomor_hp"] = inputNomorHP;
    data["gambatTTD"] = inputGambarTTD
    setDataPembeli(data);
  }


  return (
    <>
      <div class="mx-auto">
        <div class="card mb-4">
          <h5 class="card-header">Form Pembeli</h5>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <label for="html5-text-input" class="col-md-4 col-form-label">
                    Nama <b>(Wajib)*</b>
                  </label>
                  <div class="col-md-10">
                    <input
                      autoFocus
                      class="form-control"
                      type="text"
                      name="nama"
                      placeholder="Nama......"
                      id="html5-text-input"
                      ref={inputNama}
                      required
                    />
                  </div>
                </div>
                <div class="col">
                  <label
                    for="html5-search-input"
                    class="col-md-4 col-form-label"
                  >
                    Nomor HP
                  </label>
                  <div class="col-md-12">
                    <input
                      class="form-control"
                      type="number"
                      name="nomorHP"
                      placeholder="Nomor HP...."
                      id="html5-search-input"
                      ref={inputNomorHP}
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="html5-email-input" class="col-form-label">
                  Alamat
                </label>
                <div>
                  <input
                    class="form-control"
                    type="text"
                    name="alamat"
                    placeholder="Alamat...."
                    id="html5-email-input"
                    ref={inputAlamat}
                  />
                </div>
              </div>

              <div class="mb-3 row" />
              <div class="row">
                <div class="mb-3">
                  <label for="formFile" class="form-label">
                    Masukkan gambar tanda-tangan{" "}
                  </label>
                  <input
                    class="form-control"
                    type="file"
                    id="formFile"
                    name="gambar"
                    accept="image/*"
                    ref={inputGambarTTD}
                  />
                </div>
              </div>
              <div className="mx-auto float-end">
                <button type="submit" class="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
            <br/>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPembeli;
