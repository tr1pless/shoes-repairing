import React from "react";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import {
  carouselKeys,
  carouselSharping,
  carouselShoes,
  mainStyle,
} from "../Constants";

import styles from "./main.module.css";

export const images = [
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
export const Main = () => {
  return (
    <>
      <section style={mainStyle}>
        <Carousel>
          <CarouselItem>
            <span style={carouselShoes}></span>
          </CarouselItem>
          <CarouselItem>
            <span style={carouselKeys}></span>
          </CarouselItem>
          <CarouselItem>
            <span style={carouselSharping}></span>
          </CarouselItem>
        </Carousel>
        {/* <div className={styles.welcome}> */}
        {/* <p className={styles.text}> */}
        {/* Добро пожаловать! Обращаясь к нам вы встретите квалифицированных */}
        {/* мастеров с многолетним опытом, способных решить любую проблему, */}
        {/* которая относится к сфере наших услуг. */}
        {/* </p> */}
        {/* </div> */}
      </section>
    </>
  );
};
