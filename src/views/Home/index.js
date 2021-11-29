import React from "react";

import Navbar from "./components/Navbar";

import home from "./home.module.scss";

function Home() {
  return (
    <div className={home.container}>
      <Navbar />
    </div>
  );
}

export default Home;
