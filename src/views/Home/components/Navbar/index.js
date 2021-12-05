import React from "react";

import navbar from "./navbar.module.scss";

function Navbar() {
  return (
    <section className={navbar.container} data-scroll-section>
      <a href="/"> Menu</a>
      <a href="/"> Flirty Flowers</a>
      <a href="/"> Cart</a>
    </section>
  );
}

export default Navbar;
