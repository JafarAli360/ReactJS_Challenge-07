import React from "react";

export default function MyLayout({ children }) {
  return (
    <div className="text" data-aos="fade-right">
      <h2 style={{ marginLeft: "8.5%" }}>Why Us</h2>
      <p style={{ marginLeft: "8.5%" }}>Mengapa harus pilih Binar Rental Car?</p>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="card" data-aos="fade-up" style={{ paddingBottom: "25px" }}>
              <div className="card-body">
                <p>
                  <img src="./assets/img/icon_complete.png" className="img-fluid imgcar" alt="Mobil" />
                </p>
                <h5 className="card-title">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak mobil, kondisi masih baru, bersih dan terawat.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <p>
                  <img src="./assets/img/icon_price.png" className="img-fluid imgcar" alt="Mobil" />
                </p>
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia diakhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <p>
                  <img src="./assets/img/icon_24hrs.png" className="img-fluid imgcar" alt="Mobil" />
                </p>
                <h5 className="card-title">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia diakhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="card" data-aos="fade-up">
              <div className="card-body">
                <p>
                  <img src="./assets/img/icon_professional.png" className="img-fluid imgcar" alt="Mobil" />
                </p>
                <h5 className="card-title">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur , ramah dan selalu tepat waktu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
