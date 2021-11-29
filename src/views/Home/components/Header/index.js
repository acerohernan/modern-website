import React from "react";

import header from "./header.module.scss";

function Header() {
  return (
    <div className={header.container}>
      <ul className={header.nav}>
        <li>INTRO</li>
        <li>ABOUTE</li>
        <li>FEATURED</li>
      </ul>
      <h3 className={header.title}>ART OBJECTS</h3>
    </div>
  );
}

export default Header;
