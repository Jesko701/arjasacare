import { useRef as UseRef, useState as UseState } from "react";
import axios from "axios";

const formTransaksi = () => {
  const inputObat = UseRef(null);
  const inputAlergi = UseRef(null);
  const inputKeluhan = UseRef(null);
  const inputSaran = UseRef(null);

  const[getData, setData] = UseState([{
      obat: inputObat,
      alergi: inputAlergi,
      keluhan: inputKeluhan,
      saran: inputSaran
  }]);

  const handleSubmitTransaksi = async (e) => {
      e.preventDefault()
      handleInput()
      try {
          
      } catch (error) {
          console.log(error.error);
          alert(error.error);
      }
  };

  const handleInput = () => {
      let tmpData = getData;
      tmpData['obat'] = inputObat;
      tmpData['alergi'] = inputAlergi;
      tmpData['keluhan'] = inputKeluhan;
      tmpData['saran'] = inputSaran;
      setData(tmpData);

  }
  return (
    <>
      <div class="mx-auto">
        <form onSubmit={handleSubmitTransaksi}>
          <div class="card mb-4">
            <h5 class="card-header">Form Tambah Karyawan</h5>
            <div class="card-body">
              <div class="mb-3 row">
                <label for="html5-search-input" class="col-md-2 col-form-label">
                  Nama Obat <b>(Wajib)</b>
                </label>
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="....."
                    name="namaObat"
                    id="html5-search-input"
                    ref={inputObat}
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="html5-email-input" class="col-md-2 col-form-label">
                  alergi
                </label>
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    name="alergi"
                    placeholder="....."
                    ref={inputAlergi}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="html5-text-input" class="col-md-2 col-form-label">
                  Keluhan
                </label>
                <div class="col-md-8">
                  <textarea
                    class="form-control"
                    rows="5"
                    type="text"
                    placeholder="....."
                    name="nama"
                    id="html5-text-input"
                    ref={inputKeluhan}
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="html5-text-input" class="col-md-2 col-form-label">
                  Saran
                </label>
                <div class="col-md-8">
                  <textarea
                    class="form-control"
                    rows="5"
                    type="text"
                    placeholder="....."
                    name="nama"
                    id="html5-text-input"
                    ref={inputSaran}
                  />
                </div>
              </div>
              <div className="mx-auto float-end">
                <button type="submit" class="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default formTransaksi;
