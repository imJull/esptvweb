import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/Conocenos/AboutUs";
import ErrorPage from "./components/errror/ErrorPage";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/nada" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
