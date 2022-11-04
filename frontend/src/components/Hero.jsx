import React from "react";
// import { Container } from "react-bootstrap";

export default function Hero() {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-md-6 m-auto">
          <h2 className="text-justify">Sewa & Rental Mobil Terbaik di Kawasan Lamongan</h2>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <a className="btn btn-success" href="/search">
            Mulai Sewa Mobil
          </a>
        </div>
        <div className="col-md-6">
          <img src="./assets/img/img_carr.png" className="img-fluid" alt="Mobil" style={{ marginRight: "-40px" }} />
        </div>
      </div>
    </div>
  );
}
