import React from "react";

import footer from "./footer.module.scss";

function Footer() {
  return (
    <div className={footer.container} data-scroll-section>
      <h4 className={footer.title}>MADE IN</h4>
      <p className={footer.text}>RIO DE JANEIRO</p>
    </div>
  );
}

export default Footer;
