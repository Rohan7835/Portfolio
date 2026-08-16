import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";

const RoutesComp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComp;
