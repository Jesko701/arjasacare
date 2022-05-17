import Dashboard from "./Component/Dashboard";
import ListPerson from "./Component/ListPerson";
import Search from "./Component/Search"

const Home = () => {
  return <>
   <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Dashboard />
          <div className="layout-page">
            <Search />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">Pelanggan /</span> Daftar Pelanggan
                </h4>
                <ListPerson/>
              </div>
              <div className="content-backdrop fade"></div>
            </div>
          </div>
        </div>
        <div className="layout-overlay layout-menu-toggle"></div>
      </div>
  </>;
};

export default Home;
