import axios from "axios";

export const getCars = async () => {
  try {
    const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");

    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const filterCars = async (req, res) => {
  const result = [];
  const { driver, date, time, capacity } = req.query;

  console.log(req.query);

  if (!driver || driver == "") return res.status(400).json({ msg: "Mohon Masukkan Tipe Driver" });

  if (!date) return res.status(400).json({ msg: "Mohon Masukkan Tanggal Sewa" });

  const data = await getCars();
  const year = date.slice(0, 4);
  if (driver == "dengan-supir") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].available === true && data[i].year >= year && data[i].capacity >= capacity) {
        result.push(data[i]);
      }
    }
  }
  if (driver == "tanpa-supir") {
    for (let i = 0; i < data.length; i++) {
      if (data[i].available === false && data[i].year >= year && data[i].capacity >= capacity) {
        result.push(data[i]);
      }
    }
  }

  return res.status(200).json(result);
};
