import React from "react";
import { Button } from "react-bootstrap";

const Testimonial = () => {
  return (
    <div className="card" style={{ backgroundColor: "#0D28A6", padding: "5% 5% 5% 5%", margin: "5% 10% 5% 10%" }}>
      <div className="row text-center" id="Testi" data-aos="fade-down">
        <div className="position-absolute top-0 start-100 translate-middle"></div>
        <h3 style={{ color: "white" }}>Sewa Mobil Di Lamongan Sekarang</h3>
        <p style={{ padding: "0px 15% 3% 15%", color: "white" }}>Perkembangan teknologi memudahkan Anda untuk sewa mobil hanya dengan Binar Car Rental, Anda dapat menemukan pilihan mobil terbaik, yang sesuai dengan kebutuhan.</p>
        <div className="button">
          <Button type="button" className="btn btn-success">
            Mulai Sewa Mobil
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
