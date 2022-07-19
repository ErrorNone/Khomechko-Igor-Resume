import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
