import { useNavigate } from "react-router";
import React, { useState, useRef } from "react";
import axios from "axios";

const Login = () => {
  const [isSpin, setIsSpin] = useState(false);
  const navigate = useNavigate();

  const var_username = useRef();
  const var_pw = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = var_username.current.value + " " + var_pw.current.value;
      /* await axios.post(
        `https://5eb2-103-107-198-164.ngrok.io/api/v1/login/`,
        {
          username: var_username,
          password: var_pw
        }
      ); */

      setIsSpin(true);

      console.log(response);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
          <div class="authentication-inner">
            <div class="card">
              <div class="card-body">
                <div class="app-brand justify-content-center">
                  <span class="app-brand-logo demo"></span>
                  <span class="app-brand-text demo text-body fw-bolder">
                    ArjasaCare
                  </span>
                </div>
                <h4 class="mb-2">Selamat datang di Arjasa Care!</h4>
                <p class="mb-4">Silahkan login terlebih dahulu</p>
                <form
                  id="formAuthentication"
                  class="mb-3"
                  // method="POST"
                  onSubmit={submitHandler}
                >
                  <div class="mb-3">
                    <label for="email" class="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email_username"
                      placeholder="Masukkan username anda"
                      autofocus
                      ref={var_username}
                    />
                  </div>
                  <div class="mb-3 form-password-toggle">
                    <div class="d-flex justify-content-between">
                      <label class="form-label" for="password">
                        Password
                      </label>
                    </div>
                    <div class="input-group input-group-merge">
                      <input
                        type="password"
                        id="password"
                        class="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                        ref={var_pw}
                      />
                      <span class="input-group-text cursor-pointer">
                        <i class="bx bx-hide"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-primary d-grid w-100" type="submit">
                      Log-in
                    </button>
                  </div>
                  {isSpin && (
                    <div className="d-flex justify-content-center">
                      <div
                        className="spinner-border text-primary mb-4"
                        role="status"
                      ></div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
