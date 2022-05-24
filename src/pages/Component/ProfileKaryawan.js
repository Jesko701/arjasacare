const ProfileKaryawan = (props) => {
  return (
    <>
      <div class="card col-md-12">
        <h5 class="card-header">Informasi Akun</h5>
        <div class="card-body">
          <div class="d-flex mb-3">
            <div class="flex-grow-1 row">
              <div class="col-9 mb-sm-0 mb-2">
                <h6 class="mb-0">Nama : {}</h6>
              </div>
            </div>
          </div>
          <div class="d-flex mb-3">
            
            <div class="flex-grow-1 row">
              <div class="col-9 mb-sm-0 mb-2">
                <h6 class="mb-0">Username : {}</h6>
              </div>
              
            </div>
          </div>
          <div class="d-flex">
            
            <div class="flex-grow-1 row">
              <div class="col-9 mb-sm-0 mb-2">
                <h6 class="mb-0">Karyawan atau Admin? : {}</h6>
              </div>
              <div class="col-3 text-end">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileKaryawan;
