import { React, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getCars } from "../redux/actions/carAction";
import { Button } from "react-bootstrap";

import axios from "axios";

const Panel = () => {
  const [Driver, setDriver] = useState("");
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");
  const [Capacity, setCapacity] = useState("");
  const [result, setResult] = useState([]);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCars(Driver, Date, Time, Capacity));
  // });

  // const { getCarsListResult } = useSelector((state) => state.carReducer);

  const submitHandler = async (e) => {
    e.preventDefault();

    // setResult(getCarsListResult);

    try {
      const response = await axios.get(`http://localhost:8080/datacars?driver=${Driver}&date=${Date}&time=${Time}&capacity=${Capacity}`);

      const data = response.data;
      console.log(data);
      setResult(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(result);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8-md " style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", borderRadius: "8px", marginTop: "-40px", marginBottom: "100px", padding: "15px 5px 15px 20px", marginLeft: "20px", backgroundColor: "white" }}>
          <form onSubmit={submitHandler}>
            <div className="row ps-2">
              <div className="col-md">
                <div className="form-group">
                  <label htmlFor="supir" className="form-label ps-2 text-muted">
                    Tipe Driver
                  </label>
                  <select id="supir" name="driver" className="form-select" value={Driver} onChange={(e) => setDriver(e.target.value)}>
                    <option selected hidden>
                      Pilih Tipe Driver
                    </option>
                    <option value="dengan-supir">Dengan Sopir</option>
                    <option value="tanpa-supir">Tanpa Sopir (Lepas Kunci)</option>
                  </select>
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <label htmlFor="date" className="form-label ps-2 text-muted">
                    Tanggal
                  </label>
                  <input type="date" name="date" id="date" className="form-control" value={Date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <label htmlFor="time" className="form-label ps-2 text-muted">
                    Waktu Jemput / Ambil
                  </label>
                  <div className="input-group">
                    <select id="time" className="form-select" name="time" value={Time} onChange={(e) => setTime(e.target.value)}>
                      <option s elected hidden>
                        Pilih Waktu
                      </option>
                      <option value="08">08.00 WIB</option>
                      <option value="09">09.00 WIB</option>
                      <option value="10">10.00 WIB</option>
                      <option value="11">11.00 WIB</option>
                      <option value="12">12.00 WIB</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <label htmlFor="pass" className="form-label ps-2 text-muted">
                    Jumlah Penumpang
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Penumpang"
                      name="capacity"
                      value={Capacity}
                      onChange={(e) => {
                        setCapacity(e.target.value);
                      }}
                    />
                    <i class="bi bi-people input-group-text"></i>
                  </div>
                </div>
              </div>
              <div className="col-md">
                <Button type="submit" className="btn btn-success" style={{ marginTop: "31px" }}>
                  Search
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row mb-5" style={{ marginTop: "-70px", marginLeft: "30px" }}>
        {result.msg ? (
          <div>
            <p>{result.msg}</p>
          </div>
        ) : (
          ""
        )}
        {result.length >= 1
          ? result.map((car) => (
              <div className="col-lg-4 mt-2 mt-3 d-flex flex-column justify-content-between h-100">
                <div className="card">
                  <img className="img-thumbnail" src={car.image} alt={car.manufacture} style={{ maxWidth: "400px", maxHeight: "207px" }}></img>
                  <div className="card-body">
                    <p>
                      {car.manufacture} / {car.model}
                    </p>
                    <p className="fw-bold fs-4">Rp. {car.rentPerDay} / hari</p>
                    <p className="py-3" style={{ width: "300px", height: "100px" }}>
                      {car.description} / hari
                    </p>
                    <p>
                      <i class="pe-2 bi bi-people"></i> {car.capacity} Orang
                    </p>
                    <p>
                      <i class="pe-2 bi bi-gear"></i> {car.transmission}
                    </p>
                    <p>
                      <i class="pe-2 bi bi-calendar"></i> {car.year} Tahun
                    </p>
                    <Button type="submit" className="btn btn-success" style={{ width: "305px" }}>
                      Pilih Mobil
                    </Button>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Panel;
