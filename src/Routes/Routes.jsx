import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";

const RoutesComp = () => (
  <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesComp;
