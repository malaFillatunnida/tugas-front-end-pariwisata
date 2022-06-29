import React from "react";
import { Image } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container">
      <div className="d-none d-md-block">
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="d-flex h-100">
              <div className="justify-content-center align-self-center">
                <h2>
                  <strong>Welcome to the Semarang city,</strong>
                  <br />
                  tourism object website
                </h2>
                <p>
                  Ayo silahkan dibaca, mungkin anda akan <br />
                  tertarik dengan objek-objek pariwisata
                  <br />
                  yang ada di Kota Semarang.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Image src="assets/image/hero.svg" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
