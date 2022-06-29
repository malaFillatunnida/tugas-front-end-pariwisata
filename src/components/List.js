import React from "react";
import { Image } from "react-bootstrap";

const List = () => {
  return (
    <div class="CardList">
      <div class="container mt-4">
        <h2>Daftar Pariwisata</h2>
        <div class="row mb-3">
          <div class="col-md-4 mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <Image
                class="card-img-top"
                src="https://cdn0-production-images-kly.akamaized.net/YQbA5cwCszzqlEmatj2udL1zUVM=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2383620/original/066825900_1539590316-3.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <Image
                class="card-img-top"
                src="https://cdn0-production-images-kly.akamaized.net/FhLsNrEaUq08HEA9xF_2ch4Zb2o=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2383618/original/083751200_1539590315-1.JPG"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mt-4">
            <div class="card" style={{ width: "18rem" }}>
              <Image
                class="card-img-top"
                src="https://cdn0-production-images-kly.akamaized.net/Xk-WtjElylSVR44zvgBPdEZDaYw=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2383619/original/044315600_1539590316-2.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
