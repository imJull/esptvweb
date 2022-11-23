import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/Conocenos/AboutUs";
import ContactUs from "./components/Contactanos/ContactUs";
import Enlaces from "./components/Enlaces/Enlaces";
import Home from "./components/Home/Home";
import Servicios from "./components/Servicios/Servicios"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/enlaces" element={<Enlaces />} />
        <Route path="/contactenos" element={<ContactUs />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
