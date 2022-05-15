import FormKaryawan from "./Component/FormKaryawan";
import Dashboard from "./Component/Dashboard";



const addKaryawan = ()=> {
    return (
        <>
         <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Dashboard />
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Karyawan /</span> Tambah Karyawan
                </h4>
                <FormKaryawan/>
              </div>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
        </>
    );
}

export default addKaryawan;