import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import { BrowserRouter } from "react-router-dom";

const RoutesComp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComp;
