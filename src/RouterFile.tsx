import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const RouterFile = function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterFile;
