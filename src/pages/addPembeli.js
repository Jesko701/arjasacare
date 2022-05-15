import FormPembeli from "./Component/FormPembeli";
import Dashboard from "./Component/Dashboard";

const addPembeli = () => {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Dashboard />
          <div className="layout-page">
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Pembeli /</span>{" "}
                  Tambah Pembeli
                </h4>
                <FormPembeli />
              </div>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
    </>
  );
};

export default addPembeli;
