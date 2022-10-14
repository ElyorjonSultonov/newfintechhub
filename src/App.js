import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import NavbarBottom from "./components/Navbar/NavbarBottom";
import HomePage from "./Pages/HomePage/HomePage";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Course from "./Pages/Course/Course";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course" element={<Course />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
