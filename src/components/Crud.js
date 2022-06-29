import React from "react";

const Crud = () => {
  return (
    <div class="table">
      <div class="container card-body">
        <h3 style={{ textAlign: "center" }}>Tabel Crud</h3>
        <hr />
        <button
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#myModalAdd"
        >
          Tambah
        </button>
        <br />
        <table class="table" id="mytable" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>No</th>
              <th>Foto</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>
                <img
                  src="https://cdn0-production-images-kly.akamaized.net/ZHmrtcnvRwVfmjs1_ZQURkrhCVc=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2383617/original/026988100_1539590315-1.JPG"
                  alt=""
                  width="250px"
                />
              </td>
              <td>Lawang Sewu</td>
              <td>Jl. Pemuda, Sekayu, Kec. Semarang Tengah, Kota Semarang</td>
              <td>
                <a
                  href="javascript:void(0);"
                  class="btn btn-sm btn-success edit"
                >
                  Edit
                </a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-sm btn-danger delete"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
