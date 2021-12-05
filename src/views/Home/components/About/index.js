import React, { useEffect, useState, useRef } from "react";

import SplitText from "../../../../utils/Split3.min.js";
import useOnScreen from "../../../../hooks/useOnScreen";
import gsap from "gsap";
import about from "./about.module.scss";

function About() {
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  /*  useEffect(() => {
    const split = new SplitText("#about-text", {
      type: "lines",
    });
    const splitParent = new SplitText("#about-text", {
      type: "lines",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2",
    });
  }, [reveal]); */

  return (
    <section className={about.container} data-scroll-section>
      <h6 className={about.title}>About</h6>
      <p className={about.text} ref={ref} id="about-text">
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}

export default About;
