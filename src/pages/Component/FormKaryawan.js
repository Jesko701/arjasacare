import React, { useRef, useState } from "react";
import { axios } from "axios";

const FormKaryawan = () => {
  const inputNama = useRef(null);
  const inputUsername = useRef(null);
  const inputPassword = useRef(null);

  const [dataKaryawan, setDataKaryawan]   = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const handleSubmitKaryawan = async (e) => {
    e.preventDefault();
    handleInput();

    const bodyFormData = new FormData();
    bodyFormData.append("fullname", dataKaryawan.fullname);
    bodyFormData.append("username", dataKaryawan.username);
    bodyFormData.append("password", dataKaryawan.password);
    try {
      const data = await axios({
        method: "post",
        url: "",
        data: bodyFormData,
      });
      console.log(data);
      alert("Data berhasil diinput");
    } catch (event) {
      alert(event.error + " Gagal menambah data");
      console.log(dataKaryawan);
    }
  };

  const handleInput = () => {
    let myData = dataKaryawan;
    myData["fullname"] = inputNama.current.value;
    myData["username"] = inputUsername.current.value;
    myData["password"] = inputPassword.current.value;
    setDataKaryawan(myData);
  };

  return (
    <>
      <div class="mx-auto">
        <form onSubmit={handleSubmitKaryawan}>
          <div class="card mb-4">
            <h5 class="card-header">Form Tambah Karyawan</h5>
            <div class="card-body">
              <div class="mb-3 row">
                <label for="html5-text-input" class="col-md-2 col-form-label">
                  Nama <b>(Wajib)</b>
                </label>
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Nama ..."
                    name="nama"
                    id="html5-text-input"
                    ref={inputNama}
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="html5-search-input" class="col-md-2 col-form-label">
                  Username <b>(Wajib)</b>
                </label>
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Username ... "
                    name="username"
                    ref={inputUsername}
                    id="html5-search-input"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="html5-email-input" class="col-md-2 col-form-label">
                  Password <b>(Wajib)</b>
                </label>
                <div class="col-md-10">
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="* * * * *"
                    ref={inputPassword}
                    required
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

export default FormKaryawan;
