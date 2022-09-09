import React from "react";
import "./App.scss";
import AboutMe from "./components/BizHaqimizda/AboutMe";
import Home from "./components/boshSahifa/Home";
import Footer from "./components/Footer/Footer";
import Partner from "./components/Hamkorlar/Partner";
import Courses from "./components/Kurslarimiz/Courses";
import Navbar from "./components/Navbar/Navbar";
import Comments from "./components/Sharhlar/Comments";
import Teachers from "./components/Ustozlar/Teachers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Courses />
      <Teachers />
      <Comments />
      <Partner />
      <Footer/>
    </div>
  );
}

export default App;
