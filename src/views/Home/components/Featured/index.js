import React, { useRef, useState, useEffect } from "react";

import featured from "./featured.module.scss";
import useOnScreen from "../../../../hooks/useOnScreen";

import { featuredPhotos } from "../../../../utils/data";
import "./featured-animation.scss";

function Featured() {
  const [firstUrl, secondUrl] = featuredPhotos;
  const [appear, setAppear] = useState(false);

  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setAppear(onScreen);
  }, [onScreen]);

  return (
    <section className={featured.container} data-scroll-section ref={ref}>
      <div className={featured.leftLayout}>
        <h4>GREEN</h4>
        <img
          src={firstUrl}
          alt="firstImage"
          data-scroll
          className={`${featured.leftImage} ${appear ? "is-reveal" : ""}`}
        />
      </div>
      <div className={featured.rightLayout}>
        <h4>LILY</h4>
        <img
          src={secondUrl}
          alt="firstImage"
          data-scroll
          className={`${featured.leftImage} ${appear ? "is-reveal" : ""}`}
        />
      </div>
    </section>
  );
}

export default Featured;
