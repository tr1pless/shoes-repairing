import React from "react";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import { mainStyle } from "../Constants";

import styles from "./main.module.css";

export const Main = () => {
  return (
    <>
      <section style={mainStyle}>
        <Carousel >
          <CarouselItem>
            <p className={styles.carousel__text}>
              1111Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis deleniti asperiores ea odio aliquam nemo voluptates? Et,
              consequuntur. Inventore fuga atque facilis culpa ducimus earum
              magni quos quia dolorum adipisci.
            </p>
          </CarouselItem>
          <CarouselItem>
            <p className={styles.carousel__text}>
              2222Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis deleniti asperiores ea odio aliquam nemo voluptates? Et,
              consequuntur. Inventore fuga atque facilis culpa ducimus earum
              magni quos quia dolorum adipisci.
            </p>
          </CarouselItem>
          <CarouselItem>
            <p className={styles.carousel__text}>
              333Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Debitis deleniti asperiores ea odio aliquam nemo voluptates? Et,
              consequuntur. Inventore fuga atque facilis culpa ducimus earum
              magni quos quia dolorum adipisci.
            </p>
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
