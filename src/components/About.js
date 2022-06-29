import React from "react";
import { Image } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <div className="d-none d-md-block">
        <div className="row mt-4">
          <div className="col">
            <div className="d-flex h-100">
              <div className="justify-content-center align-self-center">
                <h2>
                  <strong>Objek Wisata di Kota Semarang</strong>
                </h2>
                <p>
                  Kami akan mengajak Anda untuk menjelajahi berbagai tempat
                  wisata Semarang dan sekitarnya. Wisata Semarang selalu menarik
                  untuk dikunjungi karena menawarkan pesona keindahan yang luar
                  biasa.
                </p>
                <p>
                  Ada banyak pilihan destinasi wisata di ibukota Provinsi Jawa
                  Tengah itu, antara lain wisata alam, mulai pantai, pegunungan,
                  hingga air terjun. Ada wisata budaya serta wahana wisata yang
                  menawarkan berbagai atraksi menarik.
                </p>
                <p>
                  Untuk mempermudah Anda memilih objek wisata yang akan
                  dikunjungi, kami akan membagi wisata Semarang berdasarkan
                  lokasi yang dituju, yakni wisata sejarah dan budaya, wisata
                  alam, dan wisata edukasi dan permainan.
                </p>
                <p>
                  Semarang punya banyak destinasi wisata sejarah dan budaya yang
                  cukup menarik untuk dikunjungi. Berikut rekomendasi tempat
                  wisata sejarah dan budaya di Semarang.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <Image src="assets/image/aboutpage.svg" width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
