import React from "react";
import { useLocation, NavLink } from "react-router-dom";

const Dashboard = () => {
  const pathName = useLocation().pathname;
  const menuActive = {
    produk: pathName == "/home",
    tambahPelanggan: pathName == "/RegPelanggan",
    tambahKaryawan: pathName == "/tambahKaryawan",
    daftarTransaksi: pathName == "/daftarTransaksi",
    profile: pathName == "/profile",
  };
  const closeDashboard = () => {
    const html = document.getElementById("html");
    html.classList.remove("layout-menu-expanded");
  };
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <NavLink to="/produk" className="app-brand-link">
            <i className="bx bxs-bolt-circle bx-lg"></i>
            <span className="app-brand-text demo menu-text fw-bolder ms-2">
              ArjasaCare
            </span>
          </NavLink>
          <a className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i
              onClick={closeDashboard}
              className="bx bx-chevron-left bx-sm align-middle"
            ></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Produk</span>
          </li>
          <li className={`menu-item ${menuActive.produk ? "active" : ""}`}>
            <NavLink to="/home" className="menu-link">
              <i className="menu-icon tf-icons bx bxs-zap"></i>
              <div>List Pelanggan</div>
            </NavLink>
          </li>
          <li
            className={`menu-item ${
              menuActive.tambahPelanggan ? "active" : ""
            }`}
          >
            <NavLink to="/RegPelanggan" className="menu-link">
              <i className="menu-icon tf-icons bx bx-layer-plus"></i>
              <div>Form Tambah Pelanggan</div>
            </NavLink>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Karyawan</span>
          </li>
          <li className={`menu-item ${menuActive.profile ? "active" : ""}`}>
            <NavLink to="/profile" className="menu-link">
              <i className="menu-icon tf-icons bx bxs-book-content"></i>
              <div data-i18n="User interface">Profil</div>
            </NavLink>
          </li>
          <li
            className={`menu-item ${menuActive.tambahKaryawan ? "active" : ""}`}
          >
            <NavLink to="/tambahKaryawan" className="menu-link">
              <i className="menu-icon tf-icons bx bxs-file-plus"></i>
              <div data-i18n="Support">Tambah Karyawan</div>
            </NavLink>
          </li>
          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Transaksi</span>
          </li>
          <li
            className={`menu-item ${menuActive.daftarTransaksi ? "active" : ""}`}
          >
            <NavLink to="/daftarTransaksi" className="menu-link">
              <i className="menu-icon tf-icons bx bxs-file-plus"></i>
              <div data-i18n="Support">Daftar Transaksi</div>
            </NavLink>
          </li>
        </ul>
      </aside>
      
    </>
  );
};

export default Dashboard;
