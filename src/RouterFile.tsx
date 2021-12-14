import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Location from "./pages/Location/Location";
import Ourstory from "./pages/Ourstory/Ourstory";
import Products from "./pages/Products/Products";

const RouterFile = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
