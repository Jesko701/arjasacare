import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TambahKaryawan from "./pages/addKaryawan";
import TambahPembeli from "./pages/addPembeli";
import DetailPelanggan from "./pages/detailPelanggan"
import TambahTransaksi from "./pages/tambahTransaksi";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element= {<Login/>}/>
          <Route path="tambahKaryawan" element = {<TambahKaryawan/>}/>
          <Route path="tambahPembeli" element = {<TambahPembeli/>}/>
          <Route path="detail" element = {<DetailPelanggan/>}/>
          <Route path="tambahTransaksi" element = {<TambahTransaksi/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
