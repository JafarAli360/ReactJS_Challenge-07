import "./App.css";
import Dashboard from "./pages/Dasboard";
import SearchCars from "./pages/SearchCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
