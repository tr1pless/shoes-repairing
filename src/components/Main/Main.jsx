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
            {/* <span style={carouselShoes}> */}
            <p className={styles.carousel__text}>
              1111Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis deleniti asperiores ea odio aliquam nemo voluptates? Et,
              consequuntur. Inventore fuga atque facilis culpa ducimus earum
              magni quos quia dolorum adipisci.
            </p>
            {/* </span> */}
          </CarouselItem>
          <CarouselItem>
            {/* <span style={carouselKeys}> */}
            <p className={styles.carousel__text}>
              2222Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis deleniti asperiores ea odio aliquam nemo voluptates? Et,
              consequuntur. Inventore fuga atque facilis culpa ducimus earum
              magni quos quia dolorum adipisci.
            </p>
            {/* </span> */}
          </CarouselItem>
          <CarouselItem>
            {/* <span style={carouselSharping}> */}
            <p className={styles.carousel__text}>
              333Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis deleniti asperiores ea odio aliquam nemo voluptates? Et,
              consequuntur. Inventore fuga atque facilis culpa ducimus earum
              magni quos quia dolorum adipisci.
            </p>
            {/* </span> */}
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
