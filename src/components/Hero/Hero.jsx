import React from "react";
import heroStyles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={heroStyles.heroWrapper}>
      <div className={heroStyles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img
          src={require("../../assets/hero-image.png")}
          alt="hero-section-headphones"
          width={212}
          height={212}
        />
      </div>
    </section>
  );
};

export default Hero;
