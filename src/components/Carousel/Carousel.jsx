import React, { useState } from "react";
import styles from "./carousel.module.css";
import { leftCaret, rightCaret } from "../Constants";

let images = [
  <img
    className={styles.carouselImage}
    src="https://loremflickr.com/400/240"
    alt=""
  />,
  <img
    className={styles.carouselImage}
    src="https://loremflickr.com/500/240"
    alt=""
  />,
  <img
    className={styles.carouselImage}
    src="https://loremflickr.com/320/240"
    alt=""
  />,
  <img
    className={styles.carouselImage}
    src="https://loremflickr.com/250/240"
    alt=""
  />,
  <img
    className={styles.carouselImage}
    src="https://loremflickr.com/170/240"
    alt=""
  />,
];

export const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const nextImage = () => {
    if (current !== 4) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };
  const prevImage = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(4);
    }
  };
  return (
    <div className={styles.carousel}>
      <div className={styles.box}>
        <button
          style={{ left: "5px" }}
          onClick={() => prevImage()}
          className={styles.carets}
        >
          {leftCaret}
        </button>
        {images[current]}
        <button
          style={{ right: "5px" }}
          onClick={() => nextImage()}
          className={styles.carets}
        >
          {rightCaret}
        </button>
      </div>
    </div>
  );
};
