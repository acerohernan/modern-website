import React from "react";

import about from "./about.module.scss";

function About() {
  return (
    <section className={about.container}>
      <h4 className={about.title}>About</h4>
      <p className={about.text}>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}

export default About;
