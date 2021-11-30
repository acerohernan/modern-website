import React from "react";
import loader from "./loader.module.scss";

function Laoder() {
  return (
    <div className={loader.container}>
      <h1 className={loader.title}>Flirty Flowers</h1>
      <span className={loader.subtitle}>Rio de Janeiro</span>
    </div>
  );
}

export default Laoder;
