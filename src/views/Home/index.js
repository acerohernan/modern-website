import React from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

import home from "./home.module.scss";

function Home() {
  return (
    <div className={home.container}>
      <Navbar />
      <Header />
    </div>
  );
}

export default Home;
