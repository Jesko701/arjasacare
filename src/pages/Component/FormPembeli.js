import axios from "axios";
import React, { useRef, useState } from "react";

const FormPembeli = () => {
  const inputNama = useRef(null);
  const inputAlamat = useRef(null);
  const inputGambarTTD = useRef(null);
  const inputNomorHP = useRef(null);

  const [getDataPembeli, setDataPembeli] = useState({
    nama: "",
    nomor_hp: "",
    alamat: null,
    tanda_tangan: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    addDataIntoUseState();
    const bodyFormData = new FormData();
    bodyFormData.append("nama", getDataPembeli.nama);
    bodyFormData.append("nomor_hp", getDataPembeli.nomor_hp);
    bodyFormData.append("alamat", getDataPembeli.alamat);
    bodyFormData.append("tanda_tangan", getDataPembeli.tanda_tangan);
    console.log(getDataPembeli);
    try {
      const insert = await axios({
        method: "post",
        url: "http://72f8-103-107-199-133.ngrok.io/api/v1/pelanggan",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvbG9naW4iLCJpYXQiOjE2NTI3Nzg3MDcsImV4cCI6MTY1MzM4MzUwNywibmJmIjoxNjUyNzc4NzA3LCJqdGkiOiJoNVIwSkdhVnRFQzhyTWJNIiwic3ViIjoxNywicHJ2IjoiNWRhNWMzZTIwZTEzNzM3YjJlZmY2NjI1NjJmNjlkOTFkMDFlODllMyJ9.n_xOedfvNesN75Ku4770FGUJpfy4jKNULz2-G1lCME0",
        },
      });
      console.log(insert);
      alert("Data berhasil di-input");
    } catch (msg) {
      alert(msg.error);
      console.log(msg.response.data);
    }
  };

  const addDataIntoUseState = () => {
    let data = getDataPembeli;
    data["nama"] = inputNama.current.value;
    data["alamat"] = inputAlamat.current.value;
    data["nomor_hp"] = inputNomorHP.current.value;
    data["tanda_tangan"] = inputGambarTTD.current.files[0];
    setDataPembeli(data);
  };

  return (
    <>
      <div class="mx-auto">
        <div class="card mb-4">
          <h5 class="card-header">Form Pelanggan</h5>
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
                    class="col-md-7 col-form-label"
                  >
                    Nomor HP <b>(10 - 15 Karakter)*</b>
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
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default FormPembeli;
