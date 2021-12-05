import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

import footer from "./footer.module.scss";

import SplitText from "../../../../utils/Split3.min.js";
import useOnScreen from "../../../../hooks/useOnScreen";

function Footer() {
  const [reveal, setReveal] = useState(false);

  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
      });
      const splitParent = new SplitText("#location-text", {
        type: "lines",
      });

      gsap.fromTo(
        split.lines,
        { y: 200 },
        {
          duration: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2",
        }
      );
    }
  }, [reveal]);

  return (
    <div className={footer.container} data-scroll-section>
      <h4 className={footer.title}>MADE IN</h4>
      <p
        className={`${footer.text} ${reveal ? footer.isReveal : ""}`}
        id="location-text"
        ref={ref}
      >
        RIO DE JANEIRO
      </p>
    </div>
  );
}

export default Footer;
