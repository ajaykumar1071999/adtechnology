import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Consultations from "../Components/Consultations/Consultations";
export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Consultations" element={<Consultations />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
