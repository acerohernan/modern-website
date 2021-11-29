import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";

import home from "./home.module.scss";

function Home() {
  return (
    <div className={home.container}>
      <Navbar />
      <Header />
      <Featured />
      <About />
      <Gallery />
    </div>
  );
}

export default Home;
