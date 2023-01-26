import React from "react";

import { mainStyle } from "../Constants";

import styles from "./main.module.css";

export const Main = () => {
  return (
    <>
      <section style={mainStyle}>
        <div className={styles.welcome}>
          <p className={styles.text}>
            Добро пожаловать! Обращаясь к нам вы встретите квалифицированных
            мастеров с многолетним опытом, способных решить любую проблему,
            которая относится к сфере наших услуг.
          </p>
        </div>
      </section>
    </>
  );
};
