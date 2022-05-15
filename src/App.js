import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TambahKaryawan from "./pages/addKaryawan";
import TambahPembeli from "./pages/addPembeli";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="login" element= {<Login/>}/>
          <Route path="tambahKaryawan" element = {<TambahKaryawan/>}/>
          <Route path="tambahPembeli" element = {<TambahPembeli/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
