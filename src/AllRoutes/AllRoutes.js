import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Courses from "../Components/Courses/Courses";
import Consultations from "../Components/Consultations/Consultations";
export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>          
          <Route path="Consultations" element={<Consultations/>}></Route>          
          <Route path="/Courses" element={<Courses/>}></Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
