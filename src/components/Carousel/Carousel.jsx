import React, { useEffect, useState } from "react";
import styles from "./carousel.module.css";
import { leftCaret, rightCaret } from "../Constants";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={styles.carousel__item} style={{ width: width }}>
      {children}
    </div>
  );
};
const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoScroll, setAutoscroll] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };

  const previous = () => {
    if (activeIndex === 0) {
      updateIndex(activeIndex + 4);
    } else {
      updateIndex(activeIndex - 1);
    }
  };

  const next = () => {
    if (activeIndex >= 2) {
      updateIndex(activeIndex - 4);
    } else {
      updateIndex(activeIndex + 1);
    }
  };

  const start = () => {
    setInterval(() => {
      next();
      // setAutoscroll(true);
    }, 5000);
    clearInterval();
  };

  useEffect(() => {
    if (!autoScroll) {
      start();
    }
  }, [activeIndex]);

  // const start = () => {
  // const interval = setInterval(() => {
  // next();
  // setAutoscroll(true);
  // console.log("going");
  // }, 5000);
  // clearInterval(interval);
  // };
  // useEffect(() => {
  // if (!pause) {
  // start();
  // } else if (autoScroll == true) {
  // start();
  // }
  // console.log("bye");
  // }, [activeIndex]);

  return (
    <div className={styles.carousel}>
      <div className={styles.boxWraper}>
        <button
          style={{ left: "5px" }}
          onClick={() => previous()}
          className={styles.carets}
        >
          {leftCaret}
        </button>
        <button
          style={{ right: "5px" }}
          onClick={() => next()}
          className={styles.carets}
        >
          {rightCaret}
        </button>
        <div
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          className={styles.box}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
