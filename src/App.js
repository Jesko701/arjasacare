import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TambahKaryawan from "./pages/addKaryawan";
import TambahPembeli from "./pages/addPembeli";
import DetailPelanggan from "./pages/detailPelanggan"
import TambahTransaksi from "./pages/tambahTransaksi";
import { useState } from "react";
import { AuthContext } from "./Config/Auth";
import { PrivateRoute, RestrictedRoute } from "../src/Config/PrivateRoute";
import DaftarTransaksi from "./pages/DaftarTransaksi";


function App() {

  const isAnyToken = JSON.parse(localStorage.getItem("tokens"));
  const [authToken, setAuthToken] = useState(isAnyToken);

  const setAndGetTokens = (token) => {
    localStorage.setItem("tokens", JSON.stringify(token));
    setAuthToken(token);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAndGetTokens }}>
    <div className="app">
      <Router>
        <Routes>
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element= {<RestrictedRoute><Login/></RestrictedRoute>}/>
          <Route path="/tambahKaryawan" element = {<PrivateRoute><Home /><TambahKaryawan/></PrivateRoute>}/>
          <Route path="/RegPelanggan" element = {<PrivateRoute><TambahPembeli/></PrivateRoute>}/>
          <Route path="/detail" element = {<PrivateRoute><DetailPelanggan/></PrivateRoute>}/>
          <Route path="/transaksi" element = {<PrivateRoute><TambahTransaksi/></PrivateRoute>}></Route>
          <Route path="/daftarTransaksi" element = {<PrivateRoute><DaftarTransaksi/></PrivateRoute>}></Route>
        </Routes>
      </Router>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
