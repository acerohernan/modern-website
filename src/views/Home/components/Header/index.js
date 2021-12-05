import React, { useEffect } from "react";

import header from "./header.module.scss";

import gsap from "gsap";
import SplitText from "../../../../utils/Split3.min.js";
import "./animations.scss";

function Header() {
  useEffect(() => {
    const split = new SplitText("#header-title", {
      type: "lines",
      linesClass: "LineChildren",
    });

    const splitParent = new SplitText("#header-title", {
      type: "lines",
      linesClass: "LineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <div className={header.container} data-scroll-section>
      <ul className={header.nav}>
        <li>INTRO</li>
        <li>ABOUT</li>
        <li>FEATURED</li>
      </ul>
      <h3 className={header.title} id="header-title">
        ART OBJECTS
      </h3>
    </div>
  );
}

export default Header;
