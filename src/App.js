import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Index from "./components/home/Index";
import useBodyClass from "./hooks/useBodyClass";
import AboutUs from "./components/AboutUs";
import BookATable from "./components/BookATable";

function App() {
  useBodyClass("default_class", "sub_page");

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/book-a-table" element={<BookATable />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
