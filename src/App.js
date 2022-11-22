import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/Conocenos/AboutUs";
import Home from "./components/Home/Home";
import Servicios from "./components/Servicios/Servicios"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/servicios" element={<Servicios />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
