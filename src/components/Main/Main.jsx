import React from "react";
import Carousel, { CarouselItem } from "../Carousel/Carousel";
import { mainStyle } from "../Constants";
import { lat, rus } from "../language/main.json";
import { useSelector, useDispatch } from "react-redux";

import styles from "./main.module.css";

export const Main = () => {
  const rusText = Object.entries(rus.text);
  const latText = Object.entries(lat.text);
  const lang = useSelector((state) => state.counter.value);

  const russian = rusText.map((value, key) => {
    return (
      <CarouselItem key={key}>
        <p className={styles.carousel__text}>{value[1]}</p>
      </CarouselItem>
    );
  });

  const latvian = latText.map((value, key) => {
    return (
      <CarouselItem key={key}>
        <p className={styles.carousel__text}>{value[1]}</p>
      </CarouselItem>
    );
  });

  return (
    <>
      <section style={mainStyle}>
        <Carousel>{lang ? latvian : russian}</Carousel>
      </section>
    </>
  );
};
