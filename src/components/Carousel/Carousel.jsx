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
  const [mlsec, setMlsec] = useState(5000);
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
      return () => clearInterval(interval);
    } else {
      updateIndex(activeIndex - 1);
      return () => clearInterval(interval);
    }
  };

  const next = () => {
    if (activeIndex >= 2) {
      updateIndex(activeIndex - 4);
      return () => clearInterval(interval);
    } else {
      updateIndex(activeIndex + 1);
      return () => clearInterval(interval);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
      console.log(activeIndex);
    }, mlsec);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div
      onMouseEnter={() => {
        setMlsec(30000);
      }}
      onMouseLeave={() => {
        setMlsec(5000);
      }}
      className={styles.carousel}
    >
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
