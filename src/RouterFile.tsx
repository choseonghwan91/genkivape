import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
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
        <Route path="/nav" element={<Nav></Nav>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
