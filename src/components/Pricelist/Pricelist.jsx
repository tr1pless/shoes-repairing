import React from "react";
import styles from "./pricelist.module.css";
import { pricesStyle } from "../Constants";
import { Link } from "react-router-dom";
import { lat, rus } from "../language/pricelist.json";
import { useSelector } from "react-redux";

export const Pricelist = () => {
  const shoesFirstRus = Object.entries(rus.shoes.firstRow);
  const shoesFirstLat = Object.entries(lat.shoes.firstRow);
  const shoesSecondRus = Object.entries(rus.shoes.secondRow);
  const shoesSecondLat = Object.entries(lat.shoes.secondRow);
  const sharpingRus = Object.entries(rus.sharping);
  const sharpingLat = Object.entries(lat.sharping);
  const keysRus = Object.entries(rus.keys);
  const keysLat = Object.entries(lat.keys);
  const contactsRus = Object.entries(rus.contacts);
  const contactsLat = Object.entries(lat.contacts);
  const lang = useSelector((state) => state.counter.value);
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
                  {lang == 0
                    ? shoesSecondRus.map((value, key) => {
                        return <li key={key}>{value[1]}</li>;
                      })
                    : shoesSecondLat.map((value, key) => {
                        return <li key={key}>{value[1]}</li>;
                      })}
                  {/* <li>Профилактика муж. : от 9€ </li> */}
                  {/* <li>Профилактика жен. : от 8€</li> */}
                  {/* <li>Замена молнии : от 12€</li> */}
                  {/* <li>Набойки муж. : от 8€</li> */}
                  {/* <li>Набойки жен. : от 8€</li> */}
                  {/* <li>Замена супинатора: от 10€</li> */}
                  {/* <li>Укрепление каблука : от 8€</li> */}
                  {/* <li>Замена фикс. молнии : от 4€</li> */}
                  {/* <li>Подклейка подошвы : от 2€</li> */}
                  {/* <li>Переклейка подошвы : от 10€</li> */}
                </ul>
              </div>
              <ul
                className={`${styles.pl__itemList} + ${styles.pl__itemListSecond}`}
              >
                {lang == 0
                  ? shoesFirstRus.map((value, key) => {
                      return <li key={key}>{value[1]}</li>;
                    })
                  : shoesFirstLat.map((value, key) => {
                      return <li key={key}>{value[1]}, </li>;
                    })}
                {/* <li>Профилактика жен. : от 8€</li> */}
                {/* <li>Прошивка швов : от 2€</li> */}
                {/* <li>Ушивка голенищ : от 20€</li> */}
                {/* <li>Замена фурнитуры : от 2€</li> */}
                {/* <li>Замена вклеек : от 7€</li> */}
                {/* <li>Растяжка : от 5€</li> */}
                {/* <li>Чистка обуви : от 15€</li> */}
                {/* <li>Прошив вокруг : от 4€</li> */}
                {/* <li>Заплатки : от 7€</li> */}
                {/* <li>Рубцы\носики. : от 5 €</li> */}
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
                  {lang == 0
                    ? sharpingRus.map((value, key) => {
                        return <li key={key}>{value[1]}</li>;
                      })
                    : sharpingLat.map((value, key) => {
                        return <li key={key}>{value[1]}</li>;
                      })}
                  {/* <li>Заточка кухонных ножей : от 2€</li> */}
                  {/* <li>Другие ножи(охотничьи и т.п) : от 4€</li> */}
                  {/* <li>Ножи для мясорубки(комплект) : 6€</li> */}
                  {/* <li>Маникюрные инструменты : от 3€</li> */}
                  {/* <li>Хозяйственные инструменты : от 4€</li> */}
                </ul>
              </div>
              <div>
                <img
                  style={{ marginTop: "5px" }}
                  src="./assets/key.png"
                  alt=""
                />
                <ul className={styles.pl__itemList}>
                  {lang == 0
                    ? keysRus.map((value, key) => {
                        return <li key={key}>{value[1]}</li>;
                      })
                    : keysLat.map((value, key) => {
                        return <li key={key}>{value[1]}</li>;
                      })}
                  {/* <li>Ключ горизонтальной нарезки : от 4€</li> */}
                  {/* <li>Ключ с вертикальной нарезкой : от 9€</li> */}
                  {/* <li>Дисковый ключ(ABLOY) : от 5€</li> */}
                  {/* <li>Сувальдный ключ(паук) : от 9€</li> */}
                  {/* <li>Крестообразный ключ: от 6€</li> */}
                  {/* <li>Чипы для домофонов: 5€</li> */}
                  {/* <li>Пульт для гаражной двери: 15€</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pl__extraContainer}>
          <p className={styles.extraText}>
            {lang == 0 ? contactsRus : contactsLat}
          </p>
          <div className={styles.extraLink__container}>
            <Link className={styles.list__link} to="/Contacts">
              <button className={styles.extraButton} type="button">
                <span>{lang == 0 ? "Контакты" : "KONTAKTI"}</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
