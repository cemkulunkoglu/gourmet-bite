import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeDiscount from "./components/home/HomeDiscount";
import HomeOurMenu from "./components/home/HomeOurMenu";
import HomeAboutUs from "./components/home/HomeAboutUs";
import HomeBookATable from "./components/home/HomeBookATable";
import HomeComments from "./components/home/HomeComments";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeDiscount />
      <HomeOurMenu />
      <HomeAboutUs />
      <HomeBookATable />
      <HomeComments />
      <Footer />
    </div>
  );
}

export default App;
