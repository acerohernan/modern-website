import React, { useState } from "react";

import { galleryPhotos as images } from "../../../../utils/data";

import gallery from "./gallery.module.scss";

function Gallery() {
  const [activeImage, setActiveImage] = useState(1);

  const GalleryItem = ({
    src,
    title,
    subtitle,
    category,
    index,
    updateActiveImage,
  }) => {
    return (
      <div className={gallery.itemWrapper}>
        <div></div>
        <div className={gallery.item}>
          <div className={gallery.itemInfo}>
            <h1 className={gallery.itemTitle}>{title}</h1>
            <h6 className={gallery.itemSubtitle}>{subtitle}</h6>
            <p className={gallery.itemCategory}>{category}</p>
          </div>
          <div
            className={gallery.itemImage}
            style={{ backgroundImage: `url(${src})` }}
          ></div>
        </div>
        <div></div>
      </div>
    );
  };

  return (
    <section className={gallery.container}>
      <div className={gallery.wrapper}>
        <div className={gallery.counter}>
          <span>{activeImage}</span>
          <span className={gallery.divider}></span>
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => {
          return (
            <GalleryItem
              key={index}
              index={index}
              {...image}
              updateActiveImage={(index) => setActiveImage(index + 1)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
