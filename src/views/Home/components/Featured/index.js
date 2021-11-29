import React from "react";

import featured from "./featured.module.scss";

import { featuredPhotos } from "../../../../utils/data";

function Featured() {
  const [firstUrl, secondUrl] = featuredPhotos;

  return (
    <section className={featured.container}>
      <div className={featured.leftLayout}>
        <h4>GREEN</h4>
        <img src={firstUrl} alt="firstImage" />
      </div>
      <div className={featured.rightLayout}>
        <h4>LILY</h4>
        <img src={secondUrl} alt="firstImage" />
      </div>
    </section>
  );
}

export default Featured;
