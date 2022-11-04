import React from "react";
import { Container } from "react-bootstrap";

export default function Service() {
  return (
    <Container>
      <div className="row mt-5 pt-5">
        <div className="col-md-6 text-center mt-5">
          <img src="./assets/img/img_service.png" className="img-fluid" alt="GambarOrang" />
        </div>
        <div className="col-md-6 mt-5">
          <h3 className="text-jutify mt-4">Best Car Rental for any kind of trip in Lamongan!</h3>
          <p className="mt-4">Sewa mobil di Lamongan bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
          <ul className="list-group">
            <li className="list-group-item border-0">
              <img src="./assets/img/Checklist.png" alt="" /> Sewa Mobil Dengan Supir di Bali 12 Jam
            </li>
            <li className="list-group-item border-0">
              <img src="./assets/img/Checklist.png" alt="" /> Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="list-group-item border-0">
              <img src="./assets/img/Checklist.png" alt="" /> Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className="list-group-item border-0">
              <img src="./assets/img/Checklist.png" alt="" /> Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className="list-group-item border-0">
              <img src="./assets/img/Checklist.png" alt="" /> Layanan Airport Transfer / Drop In Out
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
