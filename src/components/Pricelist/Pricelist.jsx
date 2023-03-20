import React from "react";
import styles from "./pricelist.module.css";
import { pricesStyle } from "../Constants";
import { Link, Route } from "react-router-dom";

export const Pricelist = () => {
  const route = () => {};
  return (
    <>
      <section className={styles.pricelist__container} style={pricesStyle}>
        <div className={styles.pl__listContainer}>
          <p className={styles.pl__listTitle}>Цены</p>
          <div className={styles.pl__list}>
            <div
              className={`${styles.pl__columnsContainer} + ${styles.pl__columnsContainerFirst}`}
            >
              <div>
                <img src={`./../assets/shoe.png`} alt="" />
                <ul
                  className={`${styles.pl__itemList} + ${styles.pl__itemListFirst}`}
                >
                  <li>Профилактика муж. : от 9€ </li>
                  <li>Профилактика жен. : от 8€</li>
                  <li>Замена молнии : от 12€</li>
                  <li>Набойки муж. : от 8€</li>
                  <li>Набойки жен. : от 8€</li>
                  <li>Замена супинатора: от 10€</li>
                  <li>Укрепление каблука : от 8€</li>
                  <li>Замена фикс. молнии : от 4€</li>
                  <li>Подклейка подошвы : от 2€</li>
                  <li>Переклейка подошвы : от 10€</li>
                </ul>
              </div>
              <ul
                className={`${styles.pl__itemList} + ${styles.pl__itemListSecond}`}
              >
                <li>Профилактика жен. : от 8€</li>
                <li>Прошивка швов : от 2€</li>
                <li>Ушивка голенищ : от 20€</li>
                <li>Замена фурнитуры : от 2€</li>
                <li>Замена вклеек : от 7€</li>
                <li>Растяжка : от 5€</li>
                <li>Чистка обуви : от 15€</li>
                <li>Прошив вокруг : от 4€</li>
                <li>Заплатки : от 7€</li>
                <li>Рубцы\носики. : от 5 €</li>
              </ul>
            </div>
            <div className={styles.pl__columnsContainer}>
              <div>
                <img
                  className={styles.pl__knife}
                  src="./assets/knife.png"
                  alt=""
                />
                <ul className={styles.pl__itemList}>
                  <li>Заточка кухонных ножей : от 2€</li>
                  <li>Другие ножи(охотничьи и т.п) : от 4€</li>
                  <li>Ножи для мясорубки(комплект) : 6€</li>
                  <li>Маникюрные инструменты : от 3€</li>
                  <li>Хозяйственные инструменты : от 4€</li>
                </ul>
              </div>
              <div>
                <img
                  style={{ marginTop: "5px" }}
                  src="./assets/key.png"
                  alt=""
                />
                <ul className={styles.pl__itemList}>
                  <li>Ключ горизонтальной нарезки : от 4€</li>
                  <li>Ключ с вертикальной нарезкой : от 9€</li>
                  <li>Дисковый ключ(ABLOY) : от 5€</li>
                  <li>Сувальдный ключ(паук) : от 9€</li>
                  <li>Крестообразный ключ: от 6€</li>
                  <li>Чипы для домофонов: 5€</li>
                  <li>Пульт для гаражной двери: 15€</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pl__extraContainer}>
          <p className={styles.extraText}>
            Если в списке вы не нашли то, что вас интересует, то вы всегда
            можете позвонить нам и уточнить интересующий вас вопрос.
          </p>
          <div className={styles.extraLink__container}>
            <Link className={styles.list__link} to="/Contacts">
              <button className={styles.extraButton} type="button">
                <span>Контакты</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
