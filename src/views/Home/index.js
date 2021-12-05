import React, { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

import Loader from "../../components/Loader";
import home from "./home.module.scss";
import useLocoScroll from "../../hooks/useLocoScroll";

function Home() {
  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);
  const [timer, setTimer] = useState(3);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      {preloader ? (
        <Loader />
      ) : (
        <div
          className={home.container}
          data-scroll-container
          id="main-container"
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Home;
