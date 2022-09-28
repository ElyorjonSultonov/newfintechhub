import React from "react";
import "./App.scss";
import AboutMe from "./Pages/AboutUs/AboutMe";
import Home from "./Pages/HomePage/Home";
import Footer from "./components/Footer/Footer";
import Partner from "./Pages/Partners/Partner";
import Courses from "./Pages/Courses/Courses";
import Navbar from "./components/Navbar/Navbar";
import Comments from "./Pages/Comments/Comments";
import Teachers from "./Pages/Teachers/Teachers";
import { Route, Routes } from "react-router-dom";
import NavbarBottom from "./components/Navbar/NavbarBottom";


function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarBottom/>
      
      {/* <Routes>
        <Route path="/" element=/>
        <Route path="/about" element= />
        <Route path="/courses" element=/>
        <Route path="/teachers" element= />
        <Route path="/comments" element= />
      </Routes> */}
      {<Home />}
      {<AboutMe />}
      {<Courses />}
      {<Teachers />}
      {<Comments />}
      {<Partner />}
      <Footer />
    </div>
  );
}

export default App;
